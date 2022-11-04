import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import akeredolu from "../public/clem-onojeghuo-HpEDSZukJqk-unsplash.jpg";
import roche from "../public/jc-gellidon-xDsq3u3ZUqc-unsplash.jpg";

const Works = () => {
  return (
    <Container>
      <div className="work">
        <div className="center">
          <h3>Works</h3>
          <h4>
            Our clients are the companies and <br /> startups who make the world
            go around
          </h4>
        </div>
        <Row>
          <Col className="thumb"sm>
            <div>
              <div className="img-center">
                <Image src={akeredolu} alt="akeredolu" width={300} height={400} />
              </div>
              <div>
                <div className="text-bg">
                  <div className="text">
                    <div>
                      <h2>AKEREDOLU STUDIOS 2021</h2>
                    </div>
                    <Row>
                      <Col>
                        <span>Branding</span>
                      </Col>
                      <Col>
                        <span>Art direction</span>
                      </Col>
                      <Col>
                        <span>Web Design</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="thumb" sm>
            <div>
              <div className="img-center">
                <Image src={roche} alt="roche-wears" width={300} height={400} />
              </div>
              <div>
                <div className="text-bg">
                  <div className="text">
                    <div>
                      <h2>ROCHE WEARS 2022</h2>
                    </div>
                    <Row>
                      <Col>
                        <span>Branding</span>
                      </Col>
                      <Col>
                        <span>Art direction</span>
                      </Col>
                      <Col>
                        <span>Web Design</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Works;
