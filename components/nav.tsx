import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../public/logo1.png";

const NavBar = () => {
  return (
    <>
      <Navbar id="navbar" expand="lg" data-aos="fade-up">
        <Container fluid id="navbar">
          <Navbar.Brand id="logo-img">
            <Link href="/">
              <Image src={logo} alt="img" width={120} height={50} />
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
              <Link href="/works">
                <span id="hover-nav" className="nav-link mx-4">
                  Latest works
                </span>
              </Link>
              <Link href="/pricing">
                <span id="hover-nav" className="nav-link mx-4">
                  Price guide
                </span>
              </Link>
              <Link href="/contact">
                <span id="hover-nav" className="nav-link mx-4">
                  Contact
                </span>
              </Link>
              <Link href="/about">
                <span id="hover-nav" className="nav-link mx-4">
                  About
                </span>
              </Link>
            </Nav>
            <div className="btn-container">
              <Link href="/contact">
                <Button>Get Started </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
