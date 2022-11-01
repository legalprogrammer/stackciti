import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import fbIcon from "../public/fb1.png";
import twIcon from "../public/tw2.png";
import instaIcon from "../public/insta.png";
import Link from "next/link";
const Contact = () => {
  return (
    <Container id="contact">
      <div>
        <h3>
          Build a 7-figure relationship with <br /> your design
        </h3>
      </div>
      <div>
        <Link href="/contact">
          <button>Start a project</button>
        </Link>
      </div>
      <div className="icons">
        <span>
          <Link
            href="https://twitter.com/legalprogrammer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twIcon} alt="dolu" width={27} height={27} />
          </Link>
        </span>

        <span>
          <Link href="#">
            <Image src={instaIcon} alt="dolu" width={27} height={27} />
          </Link>
        </span>

        <span>
          <Link href="#">
            <Image src={fbIcon} alt="dolu" width={27} height={27} />
          </Link>
        </span>
      </div>
    </Container>
  );
};

export default Contact;
