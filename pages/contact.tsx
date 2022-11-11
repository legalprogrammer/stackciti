import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";
import { ContactUs } from "../components/form";
import Link from "next/link";

const Contact = () => {
  React.useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);
  return (
    <>
      <Head>
        <title>Contact us - Stack citi </title>
        <meta name="description" content="best website agency" />
        <meta
          name="keywords"
          content="Stackciti,  We are a digital agency with a taste for outstanding products, cleaveland,germany, austraila,ohio,texas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-aos="fade-up" id="contact-page">
        <Container>
          <h3>
            If you are interested in a new project or collaboration, we’d love
            to hear from you.
          </h3>
          <Row>
            <Col sm>
              <h4>Contact Us</h4>
              <div>
                <Link href="mailto:stackcitidesign@gmail.com">
                  <a>stackcitidesign@gmail.com</a>
                </Link>
                <br /> <br />
                <Link href="tel:+2349015651795">
                  <a>+234 (9015) (6517) 95</a>
                </Link>
              </div>
            </Col>
            <Col sm>
              <ContactUs />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
