import "./Home.css";
import homeBg_1280 from "../assets/images/home/homeBg-1280.jpg";
import homeBg_1920 from "../assets/images/home/homeBg-1920.jpg";
import homeBg_5992 from "../assets/images/home/homeBg-5992.jpg";

import Container from "../components/UI/Container";
import OrderNowButton from "../components/Buttons/OrderNowBtn";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__bg"
        srcSet={`${homeBg_5992} 5992w, ${homeBg_1920} 1920w, ${homeBg_1280} 1280w`}
        sizes="100vw"
        alt="background of zesty burgers"
        src={homeBg_5992}
      />
      <div className="home__overlay" />

      <Container className="home__body">
        <h1 className="home__heading-primary">
          Look no further <br /> The best{" "}
          <span className="home__heading-burger">burger</span> in town
        </h1>
        <h2 className="home__heading-secondary">
          Our job is to fill your tummy with a wide range of delicious burgers.
        </h2>
        <OrderNowButton className="home__ctaBtn"/>
      </Container>
    </div>
  );
};

export default Home;
