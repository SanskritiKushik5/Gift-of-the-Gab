import {Navbar, Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Avatar} from "@material-ui/core";
import "./Header.css"
import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import CheckAuth from '../CheckAuth/CheckAuth'

const Header = ({details}) => {
    var refresh_token=localStorage.getItem('refresh')
    const [seed, setSeed] = useState('');
    const history = useHistory();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 50) );
    });
    const pinky = async () => {
        localStorage.removeItem("refresh");
        await axios.post("http://127.0.0.1:8000/api/logout/");
        
        history.push('/signin');
    }
    //console.log(details)
    // var active = details.is_active
    if(refresh_token!=null){
        
return (
        <>
        {/* <CheckAuth /> */}
            <Navbar expand="lg" variant="dark" bg="primary" className="navbar">
                <LinkContainer to="/">
                    <Navbar.Brand className="ml-xs-2 app-name">Gift of the Gab</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to={`/dashboard/${details.id}`}>
                            <Nav.Link className="link">Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/exercise">
                            <Nav.Link className="link">Exercise</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/history/${details.id}`}>
                            <Nav.Link className="link about-us">History</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="link contact">Contact</Nav.Link>
                        </LinkContainer>
                        
                        <div class="dropdown">
                        <Nav.Link className="link avatar"><Avatar src={`https://avatars.dicebear.com/api/jdenticon/${seed}.svg`}/></Nav.Link>
                                <div class="dropdown-content">
                                
                                    <a href={`/userprofile/${details.id}`} className="dd">Profile</a>
                                    <a href="/" className="dd" onClick={pinky}>Logout</a>
                                </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
else{
    return (
            <>
            {/* <CheckAuth /> */}
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
                            <LinkContainer to="/contact">
                                <Nav.Link className="link contact">Contact</Nav.Link>
                            </LinkContainer>
    
                            <LinkContainer to="/signin">
                                <Nav.Link><Button variant="primary ml-1" >Sign In</Button></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <Nav.Link><Button variant="primary ml-2" >Sign Up</Button></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
}
}

export default Header