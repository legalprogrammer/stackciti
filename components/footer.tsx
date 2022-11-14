import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import logo from "../public/logo1.png";
import Clock from "./time";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <section>
          <div data-aos="fade">
            <Image src={logo} alt="img" width={120} height={50} />
            <Clock />
          </div>
          <div>
            <h3 data-aos="fade">Pages</h3>
            <ul>
              <li data-aos="fade">
                <Link href="/">Home</Link>
              </li>
              <li data-aos="fade">
                <Link href="/about">About</Link>
              </li>
              <li data-aos="fade">
                <Link href="/">Services</Link>
              </li>
              <li data-aos="fade">
                <Link href="/works">Work</Link>
              </li>

              <li data-aos="fade">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 data-aos="fade">Services</h3>
            <ul>
              <li data-aos="fade">
                <Link href="#">Design services</Link>
              </li>
              <li data-aos="fade">
                <Link href="#">Web development</Link>
              </li>
              <li data-aos="fade">
                <Link href="#">Web 3/ blockchain</Link>
              </li>
              <li data-aos="fade">
                <Link href="#">App development</Link>
              </li>
              <li data-aos="fade">
                <Link href="#">Artificial intelligence</Link>
              </li>
              <li data-aos="fade">
                <Link href="#">Machine learning</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 data-aos="fade">Channels</h3>
            <ul>
              <li data-aos="fade">
                <Link href="https://www.linkedin.com/company/stackciti-tech/">
                  <a target="_blank" rel="noopener noreferrer">
                    Linkedin
                  </a>
                </Link>
              </li>
              <li data-aos="fade">
                <Link href="https://www.instagram.com/lamiide_">
                  <a target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </Link>
              </li>
              <li data-aos="fade">
                <Link href="https://twitter.com/stackciti_">
                  <a target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </Link>
              </li>
              <li data-aos="fade">
                <Link href="https://wa.me/2347044790780?text=">
                  <a target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Link>
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
