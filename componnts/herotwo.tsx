import { Container, Row, Col } from "react-bootstrap";

const HeroTwo = () => {
  return (
    <>
      <Container fluid id="services">
        <h1>
          We offer a wide range <br /> of design services.
        </h1>
        <Container fluid className="mb-5 service">
          <Row>
            <Col sm className="cols">
              <div>
                <div>
                  <h2>PRODUCT DESIGN</h2>
                </div>
                <div>
                  <p>
                    We design websites ,apps, and print collateral for some of
                    the world’s most recognized brands
                  </p>
                </div>
              </div>
            </Col>
            <Col sm className="cols">
              <div>
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
            <Col className="cols" sm>
              <div>
                <div>
                  <h2>GRAPHIC DESIGN</h2>
                </div>
                <div>
                  <p>
                    We design websites ,apps, and print collateral for some of
                    the world’s most recognized brands
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="service service-two">
          <Row>
            <Col className="cols" sm>
              <div>
                <div>
                  <h2>APP DEVELOPMENT</h2>
                </div>
                <div>
                  <p>
                    We design websites ,apps, and print collateral for some of
                    the world’s most recognized brands
                  </p>
                </div>
              </div>
            </Col>
            <Col className="premium cols" sm>
              <div>
                <div>
                  <strong>SEO</strong> <small className="small-b">premium</small>
                </div>
                <div>
                  <p>
                    We design websites ,apps, and print collateral for some of
                    the world’s most recognized brands
                  </p>
                </div>
              </div>
            </Col>
            <Col className="premium cols" sm >
              <div>
                <div>
                  <strong>AUTOMATION</strong> <small className="small-l">premium</small>
                </div>
                <div>
                  <p>
                    We design websites ,apps, and print collateral for some of
                    the world’s most recognized brands
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
