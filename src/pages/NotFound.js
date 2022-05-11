import "./NotFound.css";
import Container from "../components/UI/Container";

const NotFound = () => {
  return (
    <div className="notFound">
      <Container className="notFound__body">
        <h1 className="notFound__heading-primary">Page not found!</h1>
      </Container>
    </div>
  );
};

export default NotFound;
