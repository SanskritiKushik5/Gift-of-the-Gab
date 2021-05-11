import React from 'react'
import {Nav} from 'react-bootstrap';
import {Button, Form, Container} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Signup.css";

const Signup = () => {
    return (<>
        <Container fluid className="container-fluid bg">
            <br/>
            <br/>
            <br/>
        <Container className="form-box flex">
            <p className="form-title">Sign Up</p>
                <Container fluid="md">
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicDOB">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="dateofbirth" placeholder="Date of Birth" />
                        </Form.Group>

                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Always remember me" />
                        </Form.Group>

                        <center> 
                            <Button className="submitbtn" type="submit">Submit</Button>
                        </center>

                        <Form.Group controlId="formBasicSignin">
                            <Form.Text className="signin">
                                <center><p className="text-signup">Already have an account?</p></center>
                                <LinkContainer to="/signin">
                                    <Nav.Link className="link-signup"><center>Sign In</center></Nav.Link>
                                </LinkContainer>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Container>
        </Container>
        <br></br>
    </Container>
   </> )
}

export default Signup