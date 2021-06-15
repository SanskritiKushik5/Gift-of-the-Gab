import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';

const UserProfile = ({details}) => {
return (
    <>
        <Container className="form-box flex mt-3">
            <Container fluid="md">
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control  name="username" type="username" value={details.username} placeholder="Username"/>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" value={details.email} placeholder="email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="first_name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="first_name" type="fname" value={details.first_name} placeholder="First Name" />
                    </Form.Group>

                    <Form.Group controlId="last_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="last_name" type="lname" value={details.last_name} placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group controlId="date_of_birth">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control name="date_of_birth" type="date" value={details.date_of_birth} placeholder="Date of Birth" />
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