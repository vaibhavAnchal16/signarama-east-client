import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import React from "react";
import { useState } from "react";
import client from "../apollo-client";
import { SENDFORM } from "../graphql/mutations";
import { imageUpload } from "./Helpers/ImageUpload";
import Button from "./Button/Button";
import { QualityIcon } from "./icons";

const ConnectForm = (props) => {
  const router = useRouter();
  const formRef = React.useRef(null);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const manageForm = async (e, type, step) => {
    e.preventDefault();
    const { name, email, phone, address, message } = formRef.current;
    if (name.value?.trim() === "") {
      name.closest(".fields-wrapper").classList.add("error");
      name.focus();
      return;
    }
    if (email.value?.trim() === "" || email.value.indexOf("@") === -1) {
      email.closest(".fields-wrapper").classList.add("error");
      email.focus();
      return;
    }
    if (phone.value?.trim() === "") {
      phone.closest(".fields-wrapper").classList.add("error");
      phone.focus();
      return;
    }
    if (message.value?.trim() === "") {
      message.closest(".fields-wrapper").classList.add("error");
      message.focus();
      return;
    }
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
  };

  const removeErrorClass = (e) => {
    e.target.closest(".fields-wrapper").classList.remove("error");
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
    <div className="form-wrapper login-info" {...props}>
      <div className="form-header uplifted-content">
        <h1 className="d-margin-b">Contact Us.</h1>
        <h2 className="s-margin-b  d-flex-center d-column-gap">
          Let's <span className="highlighted">Connect.</span> Let's Do it
          Together.
        </h2>
      </div>

      <div className="form-inner">
        <p className="d-margin-b">Please Fill Out The Online Form.</p>
        <form className="contact-form" ref={formRef} id="submitform">
          <div className={step === 1 ? `show` : `hide`}>
            <div className="fields-wrapper">
              <label> Name *</label>
              <input onChange={removeErrorClass} name="name" />
            </div>
            <div className="fields-wrapper">
              <label> Email *</label>
              <input onChange={removeErrorClass} name="email" />
            </div>
            <div className="fields-wrapper">
              <label> Phone Number *</label>
              <input onChange={removeErrorClass} name="phone" />
            </div>
          </div>

          <div
          // className={step === 2 ? `show` : `hide`}
          >
            <div className="fields-wrapper">
              <label> Address </label>
              <input name="address" />
            </div>
            <div className="fields-wrapper">
              <label> Message *</label>
              <input name="message" />
            </div>
            <div className="fields-wrapper">
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  formImageUpload(e.currentTarget.files[0]);
                }}
              />
            </div>
          </div>
          <div className="d-flex d-flex-end">
            {/* {step !== 1 && (
              <button
                type="button"
                onClick={(e) => manageForm(e, "PREVIOUS", step)}
              >
                {" "}
                <span>Previous</span>
              </button>
            )}{" "} */}

            <Button
              type={`fill`}
              onClick={(e) => manageForm(e, step !== 2 ? "NEXT" : null, step)}
              disabled={file?.loading ?? false}
            >
              Send
            </Button>
            {/* <button
              disabled={file?.loading ?? false}
              type={`button`}
              className={step === 2 ? `submit` : ``}
              onClick={(e) => manageForm(e, step !== 2 ? "NEXT" : null, step)}
            >
              <span>{step === 1 ? `Next` : "Submit"}</span>
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnectForm;
