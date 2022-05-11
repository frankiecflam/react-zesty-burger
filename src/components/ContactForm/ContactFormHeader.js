import { Fragment } from "react";
import "./ContactFormHeader.css";

const ContactFormHeader = ({ formSubmitted }) => {
  return (
    <Fragment>
      <h1 className="contact__form-heading">Contact</h1>
      {!formSubmitted && (
        <p className="contact__form-description">
          Tell us about your experience with Zesty Burgers. <br />
          Any feedback is deely appreciated.
        </p>
      )}
    </Fragment>
  );
};

export default ContactFormHeader;
