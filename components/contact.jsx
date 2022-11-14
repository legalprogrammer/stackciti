import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import fbIcon from "../public/fb1.png";
import twIcon from "../public/tw2.png";
import instaIcon from "../public/insta.png";
import linkedin from "../public/linkedin1.svg";
import Link from "next/link";
const Contact = () => {
  return (
    <Container id="contact">
      <div data-aos="fade-up">
        <h3>
          Build a 7-figure relationship with <br /> your design
        </h3>
      </div>
      <div data-aos="fade-down">
        <Link href="/contact">
          <button>Start a project</button>
        </Link>
      </div>
      <div className="icons">
        <span data-aos="fade-up">
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

        <span data-aos="fade-up">
          <Link href="#">
            <Link href="https://www.instagram.com/lamiide_">
              <Image
                src={instaIcon}
                alt="dolu"
                width={27}
                height={27}
                title="visit us on instagram"
              />
            </Link>
          </Link>
        </span>

        <span data-aos="fade-up">
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
    </Container>
  );
};

export default Contact;
