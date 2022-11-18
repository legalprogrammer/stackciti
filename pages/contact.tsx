import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";
import { ContactUs } from "../components/form";
import Link from "next/link";
import mailicon from "../public/mail.svg";
import phoneicon from "../public/phone.svg";
import linkedin from "../public/linkedin1.svg";
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
        <title>Contact us - Stack citi technologies </title>
        <meta name="description" content="best website agency" />
        <meta
          name="keywords"
          content="Stackciti technologies,  We are a digital agency with a taste for outstanding products, cleaveland,germany,
           austraila,ohio,texas
           web design agency denver
           best chicago web design agency
           ecommerce web design agency london
           web design agency cleveland
           best web design agency toronto
"
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
                <Link href="mailto:contact@stackciti.com">
                  <a>
                    <small>
                      <Image
                        src={mailicon}
                        alt="image"
                        width={30}
                        height={30}
                        title="email address"
                      />
                    </small>
                    &nbsp; &nbsp; &nbsp; contact@stackciti.com
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
                <Link href="tel:+19034568537">
                  <a id="tel">
                    <Image src={phoneicon} alt="image" width={30} height={30} />
                    &nbsp; &nbsp; &nbsp;+1 (903) (456) (8537)
                  </a>
                </Link>
                <br />
                <br />
                <br />
                <br />
                <div className="icons">
                  <span data-aos="fade">
                    <Link href="https://twitter.com/stackciti_">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src={twIcon}
                          alt="dolu"
                          width={27}
                          height={27}
                          title="visit us on twitter"
                        />
                      </a>
                    </Link>
                  </span>

                  <span data-aos="fade">
                    <Link href="https://www.instagram.com/lamiide_">
                      <Image
                        src={instaIcon}
                        alt="dolu"
                        width={27}
                        height={27}
                        title="visit us on instagram"
                      />
                    </Link>
                  </span>

                  <span data-aos="fade">
                    <Link href="https://www.linkedin.com/company/stackciti-tech/">
                      <Image
                        src={linkedin}
                        alt="linkedin"
                        width={27}
                        height={27}
                        title="visit us on linkedin"
                      />
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
