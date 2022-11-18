import { Container, Row, Col } from "react-bootstrap";

const HeroTwo = () => {
  return (
    <>
      <Container fluid id="services">
        <h1 data-aos="fade-up">
          We offer a wide range <br /> of design services.
        </h1>
        <Container fluid className="mb-5 service">
          <Row>
            <Col sm className="cols">
              <div data-aos="fade-up">
                <div>
                  <h2>PRODUCT DESIGN</h2>
                </div>
                <div>
                  <p>
                    We design websites , apps , and print collateral for some of
                    the world’s most recognized brands
                  </p>
                </div>
              </div>
            </Col>
            <Col sm className="cols" lg>
              <div data-aos="fade-up">
                <div>
                  <h2>web development</h2>
                </div>
                <div>
                  <p>
                    Our design approach is to create a website that shows
                    impressive results representing your brand, ease of use and
                    simplicity for your audience
                  </p>
                </div>
              </div>
            </Col>
            <Col className="cols" sm lg>
              <div data-aos="fade-up">
                <div>
                  <h2>GRAPHIC DESIGN</h2>
                </div>
                <div>
                  <p>
                    Create your new brand , logo , website , viral social hit , or
                    next lit piece. Our creative team will make your campaign or
                    organization look good.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="service service-two">
          <Row>
            <Col className="cols" sm data-aos="fade-up" lg>
              <div>
                <div>
                  <h2>APP DEVELOPMENT</h2>
                </div>
                <div>
                  <p>
                    {`We develop functional & user friendly 
                    mobile apps for IOS & Android that reflects 
                    high brand credibility`}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="premium cols" sm lg data-aos="fade-up">
              <div>
                <div>
                  <strong>SEO</strong>{" "}
                  <small className="small-b">premium</small>
                </div>
                <div>
                  <p>
                    We understand what words to use,how to use and when to use,
                    these words help in SEO ranking and attract more users to
                    your website
                  </p>
                </div>
              </div>
            </Col>
            <Col className="premium cols" sm data-aos="fade-up">
              <div>
                <div>
                  <strong>BLOCKCHAIN</strong>{" "}
                  <small className="small-l">premium</small>
                </div>
                <div>
                  <p>
                    Web 3 provides steps to reinvent development that brings
                    innovative solution in different sectors.We develop apps on
                    blockchain
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HeroTwo;
