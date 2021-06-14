import {React, useState} from 'react';
import { Form, Button, Container, Row } from "react-bootstrap";
import "./Contact.css";
/*import swal from 'sweetalert';*/
import axios from 'axios';

const Contact = () => {
    const [contact, setContact] = useState({
		name:'',
        email:'',
        message:''
	});

	const onInputChange = e => {
		setContact({...contact,[e.target.name]: e.target.value})
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://127.0.0.1:8000/api/contact/', contact);
        setContact({
            name:'',
            email:'',
            message:''
        })
        /*swal({
            title: "Submitted Successfully!",
            text: "We will reach out to you soon!",
            icon: "success",
          });*/
	}
    return (
        <Container className="box">
            <Row className="rowx">
                <p className="title">Contact Us</p>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control onChange={e => onInputChange(e)} value={contact.name} name="name" type="text" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={e => onInputChange(e)} value={contact.email} name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="message" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange={e => onInputChange(e)} value={contact.message} name="message" as="textarea" rows={3} placeholder="Enter message"/>
                    </Form.Group>
                    
                    <Button type="submit" className="btn" type="submit" size="lg" block>
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default Contact
