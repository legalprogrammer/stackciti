import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import vector3 from "../public/vector3.png";
import Workhumbnails from "../components/data/workthumbnails";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";

const Works = () => {

  React.useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);
  
  return (
    <>
      <Head>
        <title> Our works - Stack citi technologies</title>
        <meta name="description" content="best website agency in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="work-container" data-aos="fade-up">
        <Container>
          <Row>
            <Col>
              <div className="img-text">
                <span>works</span>
                <h3>Our works</h3>
              </div>
            </Col>
            <Col>
              <div className="img-container">
                <Image
                  src={vector3}
                  alt="img"
                  className="vector"
                  width={400}
                  height={480}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container id="works">
          <Workhumbnails />
        </Container>
      </div>
    </>
  );
};

export default Works;
