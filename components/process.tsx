import { Container, Row, Col } from "react-bootstrap";

const Process = () => {
  return (
    <>
      <Container fluid id="services">
        <h1 data-aos="fade-up">
          A Simple, yet effective <br /> three step process.
        </h1>
        <Container fluid className="mb-5 service">
          <Row>
            <Col sm className="cols">
              <div data-aos="fade-up">
                <div>
                  <h2>PROJECT IDEA</h2>
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
              <div data-aos="fade-up">
                <div>
                  <h2>EXECUTION</h2>
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
            <Col sm className="cols">
              <div data-aos="fade-up">
                <div>
                  <h2>LAUNCH</h2>
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

export default Process;
