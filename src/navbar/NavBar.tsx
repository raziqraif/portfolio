import * as React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

interface NavBarProps{
}

interface NavBarState{
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Brand href="/">
                    RR
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Projects</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

