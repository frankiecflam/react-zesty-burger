import "./ContactFeedback.css";

const ContactFeedback = ({ title, hasError, input }) => {
  if (!hasError) return;

  let feedbackContent = `${title} must not be empty!`;

  if (title === "email") {
    if (input.trim().length > 0) {
      feedbackContent = "E.g. example@email.com";
    }
  }

  return <p className="contact__inputFeedback">{feedbackContent}</p>;
};

export default ContactFeedback;
