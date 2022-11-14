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
                    we transform your Perception into an excellent website &
                    application.Simple and effective process for 100%
                    satisfaction
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
                    There are many factors that must be taken into account
                    during the execution phase, such as timelines, budgets.All
                    of these must be managed in order to ensure a successful
                    outcome.
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
                    {` 
                    The launch of the project is always an exciting time. It's
                    when all the hard work and planning comes to fruition and
                    you get to see the results of your labour.`}
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
