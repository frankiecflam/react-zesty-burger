import "./CartSubmission.css";

const CartSubmission = ({ orderReceived, orderID }) => {
  return (
    <div className="cartModal__submission">
      {orderReceived === null && (
        <h1 className="cartModal__submission-heading-primary">
          Your order is being submitted.
        </h1>
      )}

      {orderReceived === false && (
        <div className="cartModal__submission-innerContainer">
          <h1 className="cartModal__submission-heading-primary">
            Whoops! We have trouble receiving your order.
          </h1>

          <p className="cartModal__failedSubmission-message">
            Please contact us directly by phone.{" "}
            <a
              href="tel:01345795834"
              className="cartModal__failedSubmission-contact"
            >
              013-4579-5834
            </a>
          </p>
        </div>
      )}

      {orderReceived && (
        <div className="cartModal__submission-innerContainer">
          <h1 className="cartModal__submission-heading-primary">
            thank you for your order!
          </h1>
          <p className="cartModal__submission-orderRef">
            Order Ref: #{orderID}
          </p>
          <p className="cartModal__submission-orderMessage">
            We will let you know once your order is on its way.
          </p>
        </div>
      )}
    </div>
  );
};

export default CartSubmission;
