import "./About.css";
import Container from "../components/UI/Container";
import aboutBg_2240 from "../assets/images/about/aboutBg-2240.jpg";

const About = () => {
  return (
    <div className="about">
      <Container className="about__body">
        <div className="about__inner">
          <h1 className="about__heading-primary">about us</h1>
          <div className="about__inner-body">
            <div className="about__inner-text">
              <p className="about__description">
                We are a family-run burger shop making a variery of burgers with
                premium ingredients and singature recipes. Up to this moment, we
                have already served more than 100,000 customers in Manchester.
              </p>

              <div className="about__storeInfo">
                <p>Location:</p>
                <p>7 High Street, Manchester M1 6YX</p>
              </div>

              <div className="about__storeInfo">
                <p>Contact:</p>
                <p>013-4579-5834</p>
              </div>
              <div className="about__storeInfo">
                <p>Opening Times:</p>
                <div className="about__openingTimes">
                  <p>11:00 - 20:00 (Mon - Fri)</p>
                  <p>10:00 - 17:00 (Sat)</p>
                  <p>Off (Sun & Public Holidays)</p>
                </div>
              </div>
            </div>
            <div className="about__inner-photo">
              <img
                className="about__inner-img"
                src={aboutBg_2240}
                alt="zesty burgers"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
