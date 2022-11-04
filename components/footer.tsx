import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <section>
          <div>
            <h1>Stackciti</h1>
            <p>Make your project our next obsession.</p>
          </div>
          <div>
            <h3>Pages</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Work</Link>
              </li>

              <li>
                <Link href="/">Conatct</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="/">branding</Link>
              </li>
              <li>
                <Link href="/">web development</Link>
              </li>
              <li>
                <Link href="/">ui & ux design</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Channels</h3>
            <ul>
              <li>
                <Link href="/">Facebook</Link>
              </li>
              <li>
                <Link href="/">instagram</Link>
              </li>
              <li>
                <Link href="/">whatsapp</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
            </ul>
          </div>
        </section>
        <Container id="copyright">
          <span> &copy; 2022 Stackciti technologies </span>
        </Container>
        <br />
        <Container id="code">
            <code>built and designed by legalprogrammer</code>
          
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
