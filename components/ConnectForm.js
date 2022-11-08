import React from "react";
import { useState } from "react";

const ConnectForm = (props) => {
  const [step, setStep] = useState(1);
  const manageForm = (e, type, step) => {
    if (step < 2 && type === "NEXT") {
      setStep((step) => step + 1);
    }
    if (step > 1 && type === "PREVIOUS") {
      setStep((step) => step - 1);
    }
  };
  return (
    <div className="form-wrapper" {...props}>
      <div className="form-inner">
        <form
          className="contact-form"
          onSubmit={(e) => {
            const { name, email, phone, address, message, file } = e.target;
            e.preventDefault();
            console.log(
              name.value,
              email.value,
              phone.value,
              address.value,
              message.value,
              file
            );
          }}
        >
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
              <input type="file" name="file" />
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
              type={step === 2 ? `submit` : `button`}
              className={step === 2 ? `submit` : ``}
              onClick={(e) => manageForm(e, "NEXT", step)}
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
