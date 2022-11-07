import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

const Mobile = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div id="mobile" data-aos="fade-up">
      <Navbar
        expand="lg"
        variant="dark"
        expanded={expanded}
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
            onClick={() => setExpanded(expanded ? false : "expanded")}
            style={{ color: "#131313" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Link href="/">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  About
                </span>
              </Link>
              <Link href="/pricing">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  Price guide
                </span>
              </Link>
              <Link href="/works">
                <span className="nav-link" onClick={() => setExpanded(false)}>
                  Latest works
                </span>
              </Link>
              <Link href="/contact" onClick={() => setExpanded(false)}>
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
