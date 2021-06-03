import {Navbar, Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./Header.css"
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" bg="primary" className="navbar">
                <LinkContainer to="/">
                    <Navbar.Brand className="ml-xs-2 app-name">Gift of the Gab</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/exercise">
                            <Nav.Link className="link">Exercise</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/history">
                            <Nav.Link className="link about-us">History</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="link contact">Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link><Button variant="primary ml-1" >Sign Up</Button></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </>
    )
}

export default Header