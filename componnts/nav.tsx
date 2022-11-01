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
          <Navbar.Brand href="/">
            <h4 className="navbar logo">StackCiti</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              id="nav-right"
            >
              <Nav.Link href="/" className="navbar mx-4">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="navbar mx-4">
                About
              </Nav.Link>
              <Nav.Link href="/pricing" className="navbar mx-4">
                Price guide
              </Nav.Link>
              <Nav.Link href="/works" className="navbar mx-4">
                latest works
              </Nav.Link>
              <Nav.Link href="/contact" className="navbar mx-4">
                Contact
              </Nav.Link>
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
