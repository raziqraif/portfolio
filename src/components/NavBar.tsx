import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

const navbarStyle = {
  maxWidth: "1200px",
  //   backgroundColor: "#f6f9fc",
  backgroundColor: "#ffffff",
};

export class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="md"
        bg="white"
        variant="light"
        sticky={"top"}
      >
        <Container style={navbarStyle}>
          <Navbar.Brand href="/">{"raziqraif"}</Navbar.Brand>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
          <Navbar.Collapse className={"justify-content-end"}>
            <Nav>
              {/* <Nav.Link href={"/resume.pdf"} target={"_blank"}>
                Resume
              </Nav.Link> */}
              <Nav.Link href={"#about"}>About</Nav.Link>
              <Nav.Link href={"#experience"}>Experience</Nav.Link>
              <Nav.Link href={"#contact"}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
