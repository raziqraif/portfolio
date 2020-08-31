import * as React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

interface NavBarProps{
}

interface NavBarState{
}

const navbarStyle = {
    maxWidth: "900px"
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky={"top"}>
                <Container style={navbarStyle}>
                    <Navbar.Brand href="/">
                        {"<raziqraif>"}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href={"http://bit.ly/raziq-resume"} target={"_blank"}>Resume</Nav.Link>
                            <Nav.Link href={"#about"}>About</Nav.Link>
                            <Nav.Link href={"#projects"}>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        );
    }
}

