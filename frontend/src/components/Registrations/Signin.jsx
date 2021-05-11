import React from 'react'
import {Nav} from 'react-bootstrap';
import {Button, Form, Container} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Signup.css";

const Signin = () => {
    return (<>
        <Container fluid className="container-fluid bg">
            <br/>
            <br/>
            <br/>
        <Container className="form-box flex">
            <p className="form-title">Sign In</p>
                <Container fluid="md">
                    <Form>

                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Always remember me" />
                        </Form.Group>

                        <center> 
                            <Button className="submitbtn" type="submit">Log In</Button>
                        </center>

                        <Form.Group controlId="formBasicSignin">
                            <Form.Text className="signin">
                                <center><p className="text-signup">Don't have an account?</p></center>
                                <LinkContainer to="/signup">
                                    <Nav.Link className="link-signup"><center>Sign Up</center></Nav.Link>
                                </LinkContainer>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Container>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </Container>
   </> )
}

export default Signin