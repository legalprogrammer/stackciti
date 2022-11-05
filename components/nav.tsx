import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar id="navbar" expand="lg">
        <Container fluid id="navbar">
          <Navbar.Brand>
            <Link href="/">
              <h4 className="navbar logo">StackCiti</h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              id="nav-right"
            >
              <Link href="/" id="links">
                <span
                  id="hover-nav"
                  className="nav-link mx-4 mx-4"
                  style={{ cursor: "pointer" }}
                >
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span id="hover-nav" className="nav-link mx-4">
                  About
                </span>
              </Link>
              <Link href="/pricing">
                <span id="hover-nav" className="nav-link mx-4">
                  Price guide
                </span>
              </Link>
              <Link href="/works">
                <span id="hover-nav" className="nav-link mx-4">
                  Latest works
                </span>
              </Link>
              <Link href="/contact">
                <span id="hover-nav" className="nav-link mx-4">
                  Contact
                </span>
              </Link>
            </Nav>
            <div className="btn-container">
              <Link href="/contact">
                <Button>GET STARTED </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;