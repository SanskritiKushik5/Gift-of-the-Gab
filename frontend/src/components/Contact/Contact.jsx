import React from 'react';
import { Form, Button, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
    return (
        <Container className="box">
            <Row className="rowx">
                <p className="title">Contact Us</p>
                <Form>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="msg" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter message"/>
                    </Form.Group>
                    
                    <Button className="btn" type="submit" size="lg" block>
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default Contact
