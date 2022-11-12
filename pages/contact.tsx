import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";
import { ContactUs } from "../components/form";
import Link from "next/link";
import mailicon from "../public/mail.svg";
import phoneicon from "../public/phone.svg";
import fbIcon from "../public/fb1.png";
import twIcon from "../public/tw2.png";
import instaIcon from "../public/insta.png";
import Image from "next/image";
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
              <h4 data-aos="fade">Contact Us</h4>
              <div className="socials" data-aos="fade">
                <Link href="mailto:stackcitidesign@gmail.com">
                  <a>
                    <small>
                      <Image
                        src={mailicon}
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </small>
                    &nbsp; &nbsp; &nbsp; stackcitidesign@gmail.com
                  </a>
                </Link>
                <br /> <br />
                <br />
                <Link href="tel:+2349015651795">
                  <a id="tel">
                    <Image src={phoneicon} alt="image" width={30} height={30} />
                    &nbsp; &nbsp; &nbsp;+234 (9015) (6517) 95
                  </a>
                </Link>
                <br />
                <br />
                <br />
                <br />
                <div className="icons">
                  <span data-aos="fade">
                    <Link href="https://twitter.com/legalprogrammer">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image src={twIcon} alt="dolu" width={27} height={27} />
                      </a>
                    </Link>
                  </span>

                  <span data-aos="fade">
                    <Link href="#">
                      <Image
                        src={instaIcon}
                        alt="dolu"
                        width={27}
                        height={27}
                      />
                    </Link>
                  </span>

                  <span data-aos="fade">
                    <Link href="#">
                      <Image src={fbIcon} alt="dolu" width={27} height={27} />
                    </Link>
                  </span>
                </div>
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
