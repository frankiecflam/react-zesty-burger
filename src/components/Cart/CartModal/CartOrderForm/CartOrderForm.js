import "./CartOrderForm.css";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { useReducer } from "react";

const ACTIONS = {
  name: "NAME",
  phone: "PHONE",
  address: "ADDRESS",
  submission: "SUBMISSION",
  clear: "CLEAR",
};

const inputInitialState = {
  name: "",
  nameValidity: false,
  nameTouched: false,

  phone: "",
  phoneValidity: false,
  phoneTouched: false,

  address: "",
  addressValidity: false,
  addressTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.name:
      return {
        ...state,
        name: action.value,
        nameValidity: action.value.trim().length > 0,
        nameTouched: true,
      };
    case ACTIONS.phone: {
      const pattern = /[^0-9]/g;
      const notDigit = action.value.match(pattern);

      return {
        ...state,
        phone: action.value,
        phoneValidity: action.value.trim().length > 8 && notDigit === null,
        phoneTouched: true,
      };
    }
    case ACTIONS.address: {
      return {
        ...state,
        address: action.value,
        addressValidity: action.value.trim().length > 0,
        addressTouched: true,
      };
    }

    case ACTIONS.submission: {
      return {
        ...state,
        nameTouched: true,
        phoneTouched: true,
        addressTouched: true,
      };
    }

    default:
      return inputInitialState;
  }
};

const CartOrderForm = ({ onOrderSubmit }) => {
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    inputInitialState
  );

  const formValidity =
    inputState.nameValidity &&
    inputState.phoneValidity &&
    inputState.addressValidity;

  const handleNameInputChange = (e) => {
    inputDispatch({
      type: ACTIONS.name,
      value: e.target.value,
    });
  };

  const handlePhoneInputChange = (e) => {
    inputDispatch({
      type: ACTIONS.phone,
      value: e.target.value,
    });
  };

  const handleAddressInputChange = (e) => {
    inputDispatch({
      type: ACTIONS.address,
      value: e.target.value,
    });
  };

  const handleOrderFormSubmit = (e) => {
    e.preventDefault();

    inputDispatch({
      type: ACTIONS.submission,
    });

    if (!formValidity) return;

    const customerDetails = {
      name: inputState.name,
      phone: inputState.phone,
      address: inputState.address,
    };

    onOrderSubmit(customerDetails);
  };

  const nameInputFeedbackClasses = inputState.nameValidity
    ? "cartOrderForm__feedback correct"
    : `cartOrderForm__feedback ${inputState.nameTouched && "incorrect"}`;

  const phoneInputFeedbackClasses = inputState.phoneValidity
    ? "cartOrderForm__feedback correct"
    : `cartOrderForm__feedback ${inputState.phoneTouched && "incorrect"}`;

  const addressInputFeedbackClasses = inputState.addressValidity
    ? "cartOrderForm__feedback correct"
    : `cartOrderForm__feedback ${inputState.addressTouched && "incorrect"}`;

  return (
    <form className="cartOrderForm" onSubmit={handleOrderFormSubmit}>
      <h1 className="cartOrderForm__heading-primary">your details</h1>
      <div className="cartOrderForm__form-control">
        <label htmlFor="name">name *</label>
        <input
          type="text"
          id="name"
          value={inputState.name}
          onChange={handleNameInputChange}
        />

        <div className={nameInputFeedbackClasses}>
          <div className="cartOrderForm__feedback-icon">
            <BiCheckCircle className="cartOrderForm__feedback-correct" />
            <BiXCircle className="cartOrderForm__feedback-incorrect" />
          </div>
          <p className="cartOrderForm__feedback-incorrect-text">
            Name must not be empty.
          </p>
        </div>
      </div>
      <div className="cartOrderForm__form-control">
        <label htmlFor="phone">phone no. *</label>
        <input
          type="text"
          id="phone"
          value={inputState.phone}
          onChange={handlePhoneInputChange}
        />
        <div className={phoneInputFeedbackClasses}>
          <div className="cartOrderForm__feedback-icon">
            <BiCheckCircle className="cartOrderForm__feedback-correct" />
            <BiXCircle className="cartOrderForm__feedback-incorrect" />
          </div>
          <p className="cartOrderForm__feedback-incorrect-text">
            Phone number must be at least 9-digit long.
          </p>
        </div>
      </div>
      <div className="cartOrderForm__form-control">
        <label htmlFor="address">address *</label>
        <input
          type="text"
          id="address"
          value={inputState.address}
          onChange={handleAddressInputChange}
        />
        <div className={addressInputFeedbackClasses}>
          <div className="cartOrderForm__feedback-icon">
            <BiCheckCircle className="cartOrderForm__feedback-correct" />
            <BiXCircle className="cartOrderForm__feedback-incorrect" />
          </div>
          <p className="cartOrderForm__feedback-incorrect-text">
            Address must not be empty.
          </p>
        </div>
      </div>
      <p className="cartOrderForm__required">* required</p>
      <button type="submit" className="cartOrderForm__btn-submit">
        order now
      </button>
    </form>
  );
};

export default CartOrderForm;
