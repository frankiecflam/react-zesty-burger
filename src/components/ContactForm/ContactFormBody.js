import "./ContactFormBody.css";
import { Fragment } from "react";
import ContactInput from "./InputGroup/ContactInput";
import ContactInputLabel from "./InputGroup/ContactInputLabel";
import ContactSelect from "./InputGroup/ContactSelect";
import ContactTextarea from "./InputGroup/ContactTextarea";
import ContactFeedback from "./InputGroup/ContactFeedback";

const ContactFormBody = ({
  formSubmitted,
  formReceived,
  formInputState,
  onNameChange,
  onEmailChange,
  onRecommendChange,
  onCommentChange,
}) => {
  const { name, email, comments } = formInputState;

  const nameHaveError =
    formInputState.nameTouched && !formInputState.nameValidity;
  const emailHaveError =
    formInputState.emailTouched && !formInputState.emailValidity;

  const commentsHaveError =
    formInputState.commentsTouched && !formInputState.commentsValidity;

  return (
    <div className="contact__form-body">
      {!formSubmitted && (
        <Fragment>
          <div className="contact__form-control contact__form-name">
            <ContactInputLabel htmlFor="name" text="Name *" />
            <ContactInput
              type="text"
              id="name"
              onChange={onNameChange}
              value={name}
            />
            <ContactFeedback title="name" hasError={nameHaveError} />
          </div>
          <div className="contact__form-control contact__form-email">
            <ContactInputLabel htmlFor="email" text="Email *" />
            <ContactInput
              type="email"
              id="email"
              onChange={onEmailChange}
              value={email}
            />
            <ContactFeedback
              title="email"
              hasError={emailHaveError}
              input={formInputState.email}
            />
          </div>
          <div className="contact__form-control contact__form-recommend">
            <ContactInputLabel
              htmlFor="recommend"
              text="how likely are you to recommend us to a friend?"
            />
            <ContactSelect onChange={onRecommendChange} />
          </div>
          <div className="contact__form-control contact__form-comment">
            <ContactInputLabel htmlFor="comments" text="Comments *" />
            <ContactTextarea
              id="comments"
              rows="10"
              cols="50"
              onChange={onCommentChange}
              value={comments}
            />
            <ContactFeedback title="comments" hasError={commentsHaveError} />
          </div>
        </Fragment>
      )}
      {formSubmitted && (
        <div className="contact__formSubmittedFeedback">
          {formReceived === null && <h1>Your feedback is being submitted.</h1>}
          {formReceived === false && <h1>Whoops! Something went wrong.</h1>}
          {formReceived && <h1>Thank you for your feedback!</h1>}
        </div>
      )}
    </div>
  );
};

export default ContactFormBody;
