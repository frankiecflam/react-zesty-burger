import "./Contact.css";
import Container from "../components/UI/Container";

import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <Container className="contact__body">
        <div className="contact__inner">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
