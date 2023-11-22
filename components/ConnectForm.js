import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import React from "react";
import { useState } from "react";
import client from "../apollo-client";
import { SENDFORM } from "../graphql/mutations";
import { imageUpload } from "./Helpers/ImageUpload";

const ConnectForm = (props) => {
  const router = useRouter();
  const formRef = React.useRef(null);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const manageForm = async (e, type, step) => {
    if (step < 2 && type === "NEXT") {
      setTimeout(function () {
        setStep((step) => step + 1);
      }, 500);
    }
    if (step > 1 && type === "PREVIOUS") {
      setTimeout(function () {
        setStep((step) => step - 1);
      }, 500);
    }
    if (step === 2 && !type) {
      const { name, email, phone, address, message } = formRef.current;
      try {
        const { data } = await client.mutate({
          mutation: SENDFORM,
          variables: {
            name: name.value,
            phoneNumber: phone.value,
            address: address.value,
            message: message.value,
            attachment: file?.url,
            email: email.value,
          },
        });
        if (data) {
          window.location.href = `${window.location.origin}/thankyou`;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formImageUpload = async (file) => {
    setFile({
      loading: true,
    });
    const url = await imageUpload(file, "FORMATTACHMENTS");
    setFile({
      loading: false,
      url,
    });
  };

  return (
    <div className="form-wrapper" {...props}>
      <div className="form-inner">
        <form className="contact-form" ref={formRef} id="submitform">
          <div className={step === 1 ? `show` : `hide`}>
            <div className="fields-wrapper">
              <label> Name </label>
              <input name="name" />
            </div>
            <div className="fields-wrapper">
              <label> Email </label>
              <input name="email" />
            </div>
            <div className="fields-wrapper">
              <label> Phone Number </label>
              <input name="phone" />
            </div>
          </div>

          <div className={step === 2 ? `show` : `hide`}>
            <div className="fields-wrapper">
              <label> Address </label>
              <input name="address" />
            </div>
            <div className="fields-wrapper">
              <label> Message </label>
              <input name="message" />
            </div>
            <div className="fields-wrapper">
              <label> Upload File </label>
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  formImageUpload(e.currentTarget.files[0]);
                }}
              />
            </div>
          </div>
          <div className="fields-wrapper formctas">
            {step !== 1 && (
              <button
                type="button"
                onClick={(e) => manageForm(e, "PREVIOUS", step)}
              >
                {" "}
                <span>Previous</span>
              </button>
            )}{" "}
            <button
              disabled={file?.loading ?? false}
              type={`button`}
              className={step === 2 ? `submit` : ``}
              onClick={(e) => manageForm(e, step !== 2 ? "NEXT" : null, step)}
            >
              <span>{step === 1 ? `Next` : "Submit"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnectForm;
