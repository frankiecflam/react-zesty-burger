import "./ContactFormFooter.css";
import FormSubmitBtn from "../Buttons/FormSubmitBtn";
import FormBackBtn from "../Buttons/FormBackBtn";

import { Fragment } from "react";

const ContactFormFooter = ({ formSubmitted }) => {
  return (
    <div className="contact__form-footer">
      {!formSubmitted && (
        <Fragment>
          <p>* required</p>
          <FormSubmitBtn type="submit" text="SEND" />
        </Fragment>
      )}
      {formSubmitted && (
        <Fragment>
          <FormBackBtn to="/" text="back" />
        </Fragment>
      )}
    </div>
  );
};

export default ContactFormFooter;
