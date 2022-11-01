import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import vector from "../public/aboutvector.png";


const About = () => {
  return (
    <>
      <Head>
        <title> About us - Stack citi</title>
        <meta name="description" content="best website agency in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="about">
        <Row>
          <Col sm>
            <button>About</button>
            <div>
              <h2>We are a creative Agency</h2>
            </div>
            <div>
              <h4>
                A collaborative team of strategists, developers and designers
              </h4>
            </div>
          </Col>
          <Col sm>
            <div className="img">
              <Image src={vector} alt="" width={300} height={300} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
