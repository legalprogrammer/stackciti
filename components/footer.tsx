import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Times from "./time";
import logo from "../public/logo1.png";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <section>
          <div data-aos="fade">
            <Image src={logo} alt="img" width={120} height={50} />
            <Times />
          </div>
          <div>
            <h3 data-aos="fade">Pages</h3>
            <ul>
              <li data-aos="fade">
                <Link href="/">Home</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">About</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">Services</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">Work</Link>
              </li>

              <li data-aos="fade">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 data-aos="fade">Services</h3>
            <ul>
              <li data-aos="fade">
                <Link href="/">branding</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">web development</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">ui & ux design</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">Twitter</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 data-aos="fade">Channels</h3>
            <ul>
              <li data-aos="fade">
                <Link href="/">Facebook</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">instagram</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">whatsapp</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">Twitter</Link>
              </li>
            </ul>
          </div>
        </section>
        <Container id="copyright" data-aos="fade">
          <span> &copy; 2022 Stackciti technologies</span>
        </Container>
        <br />
        <Container id="code" data-aos="fade">
          <br />
          <br />
          <code>built and designed by legalprogrammer</code>
          <br />
          <br />
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
