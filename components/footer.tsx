import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <section>
          <div data-aos="fade">
            <h1>Stackciti</h1>
            <p>Make your project our next obsession.</p>
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
                <Link href="/">Conatct</Link>
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
              <li data-aos="fade-up">
                <Link href="/">Facebook</Link>
              </li>
              <li data-aos="fade-up">
                <Link href="/">instagram</Link>
              </li>
              <li data-aos="fade-up">
                <Link href="/">whatsapp</Link>
              </li>
              <li data-aos="fade-up">
                <Link href="/">Twitter</Link>
              </li>
            </ul>
          </div>
        </section>
        <Container id="copyright" data-aos="fade">
          <span> &copy; 2022 Stackciti technologies </span>
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
