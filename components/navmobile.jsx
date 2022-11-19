import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Image from "next/image";
import logo from "../public/logo5.png";
import { Button } from "react-bootstrap";

const Mobile = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div id="mobile" data-aos="fade-up">
      <Navbar
        expand="lg"
        variant="dark"
        expanded={expanded}
       
        style={{
          backgroundColor: "#000",
          color: "#fff",
          borderBottom: "1px solid #18181b",
          padding: "30px auto",
        }}
      >
        <Container fluid>
          <Navbar.Brand style={{ color: "#fff" }}>
            <Link href="/">
              <Image src={logo} alt="img" width={120} height={45} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(expanded ? false : "expanded")}
            style={{ color: "#131313" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 move-left"
              style={{ maxHeight: "320px" }}
              navbarScroll
            >
              <Link href="/">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  Home
                </span>
              </Link>
              <Link href="/works">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  Latest works
                </span>
              </Link>
              {/* <Link href="/careers">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  Careers
                </span>
              </Link> */}
              <Link href="/contact">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  Contact
                </span>
              </Link>
              <Link href="/about">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  About
                </span>
              </Link>
              <Link href="/contact">
                <Button className="mx-4 btn-mobile">Get Started </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mobile;
