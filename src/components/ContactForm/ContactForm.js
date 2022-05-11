import "./ContactForm.css";
import ContactFormHeader from "../ContactForm/ContactFormHeader";
import ContactFormBody from "../ContactForm/ContactFormBody";
import ContactFormFooter from "../ContactForm/ContactFormFooter";

import { useReducer, useState } from "react";

const formInitialState = {
  name: "",
  nameValidity: false,
  nameTouched: false,
  email: "",
  emailValidity: false,
  emailTouched: false,
  recommendation: "",
  comments: "",
  commentsValidity: false,
  commentsTouched: false,
};

const ACTIONS = {
  name: "NAME",
  email: "EMAIL",
  recommend: "RECOMMENDATION",
  comments: "COMMENTS",
  submission: "SUBMISSION",
  clear: "CLEAR",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.name:
      return {
        ...state,
        name: action.value,
        nameValidity: action.value.trim().length > 0,
      };
    case ACTIONS.email:
      return {
        ...state,
        email: action.value,
        emailValidity: action.value.trim().includes("@"),
      };
    case ACTIONS.recommend:
      return {
        ...state,
        recommendation: action.value,
      };
    case ACTIONS.comments:
      return {
        ...state,
        comments: action.value,
        commentsValidity: action.value.trim().length > 0,
      };
    case ACTIONS.submission:
      return {
        ...state,
        nameTouched: true,
        emailTouched: true,
        commentsTouched: true,
      };

    case ACTIONS.clear:
      return formInitialState;

    default:
      return formInitialState;
  }
};

const ContactForm = () => {
  const [formInputState, formInputDispatch] = useReducer(
    formReducer,
    formInitialState
  );

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formReceived, setFormRecevied] = useState(null);

  const formValidity =
    formInputState.nameValidity &&
    formInputState.emailValidity &&
    formInputState.commentsValidity;

  const sendAPIToServer = async () => {
    const date = new Date(Date.now());
    const commentID = Math.floor(
      date.getTime() * (Math.random() * 10)
    ).toString();
    const { name, email, recommendation, comments: content } = formInputState;

    const comment = {
      id: commentID,
      date,
      name,
      email,
      recommendation,
      content,
    };

    setFormRecevied(null);

    const response = await fetch(
      "https://react-zestyburgers-default-rtdb.europe-west1.firebasedatabase.app/comments.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );

    if (!response.ok) {
      setFormRecevied(false);
      return;
    }

    setFormRecevied(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    formInputDispatch({ type: ACTIONS.submission });

    if (!formValidity) return;

    sendAPIToServer();
    setFormSubmitted(true);
    formInputDispatch({ type: ACTIONS.clear });
  };

  const handleNameInputChange = (e) => {
    formInputDispatch({ type: ACTIONS.name, value: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    formInputDispatch({ type: ACTIONS.email, value: e.target.value });
  };

  const handleRecommendInputChange = (e) => {
    formInputDispatch({ type: ACTIONS.recommend, value: e.target.value });
  };

  const handleCommentInputChange = (e) => {
    formInputDispatch({ type: ACTIONS.comments, value: e.target.value });
  };

  return (
    <form className="contact__form" onSubmit={handleFormSubmit}>
      <ContactFormHeader formSubmitted={formSubmitted} />
      <ContactFormBody
        formSubmitted={formSubmitted}
        formReceived={formReceived}
        formInputState={formInputState}
        onNameChange={handleNameInputChange}
        onEmailChange={handleEmailInputChange}
        onRecommendChange={handleRecommendInputChange}
        onCommentChange={handleCommentInputChange}
      />
      <ContactFormFooter formSubmitted={formSubmitted} />
    </form>
  );
};

export default ContactForm;
