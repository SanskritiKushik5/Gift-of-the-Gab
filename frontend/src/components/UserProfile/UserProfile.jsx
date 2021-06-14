import React from 'react';
import {Button,Container, Modal, Form, Nav} from 'react-bootstrap';

const UserProfile = () => {
return (
    <>
    <Container className="form-box flex">
    <Container fluid="md">
    <Form>
    <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control  name="username" type="username" placeholder="Username"/>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="first_name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="first_name" type="fname" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group controlId="last_name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="last_name" type="lname" placeholder="Last Name" />
                            </Form.Group>

                            <Form.Group controlId="date_of_birth">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control name="date_of_birth" type="date" placeholder="Date of Birth" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="password2">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control  name="password2" type="password" placeholder="Confirm your password" />
                            </Form.Group>

                            <center> 
                                <Button className="submitbtn" type="submit">Save</Button>
                            </center>

                            </Form>
                        </Container>
                        </Container>
     </> )
}

export default UserProfile