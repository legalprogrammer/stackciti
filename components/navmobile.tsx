import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Mobile = () => {
  return (
    <div id="mobile">
      <Navbar
        expand="lg"
        variant="dark"
        style={{
          backgroundColor: "#131313",
          color: "#fff",
          borderBottom: "1px solid #18181b",
          padding: "30px auto",
        }}
      >
        <Container fluid>
          <Navbar.Brand style={{ color: "#fff" }}>
            <Link href="/">
              <h5>STACKCITI</h5>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ color: "#131313" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Link href="/">
                <span className="nav-link">Home</span>
              </Link>
              <Link href="/about">
                <span className="nav-link">About</span>
              </Link>
              <Link href="/pricing">
                <span className="nav-link">Price guide</span>
              </Link>
              <Link href="/works">
                <span className="nav-link">Latest works</span>
              </Link>
              <Link href="/contact">
                <span className="nav-link">Contact</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mobile;
