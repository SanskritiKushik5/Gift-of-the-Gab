import {React, useState} from 'react'
import {Nav} from 'react-bootstrap';
import {Button, Form, Container} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Signup.css";
import axios from 'axios';

const Signup = () => {
	const [post, setPost] = useState({
		username:'',
            email:'',
            first_name:'',
            last_name:'',
            date_of_birth:'',
            password:'',
            password2:''
	});
	/*const { username, email, first_name, last_name, date_of_birth, password, password2 } = post;*/
	const onInputChange = e => {
		setPost({...post,[e.target.name]: e.target.value})
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://127.0.0.1:8000/api/register/', post);
	}

        return (<>
            <Container fluid className="container-fluid bg">
                <br/>
                <br/>
                <br/>
            <Container className="form-box flex">
                <p className="form-title">Sign Up</p>
                    <Container fluid="md">
                        <Form onSubmit={e => onSubmit(e)}>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={post.username} name="username" type="username" placeholder="Username" />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={post.email} name="email" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="first_name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={post.first_name} name="first_name" type="fname" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group controlId="last_name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={post.last_name} name="last_name" type="lname" placeholder="Last Name" />
                            </Form.Group>

                            <Form.Group controlId="date_of_birth">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={post.date_of_birth} name="date_of_birth" type="date" placeholder="Date of Birth" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={post.password} name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="password2">
                                <Form.Label>Enter the password again</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={post.password2} name="password2" type="password" placeholder="Confirm your password" />
                            </Form.Group>
                        
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Always remember me" />
                            </Form.Group>

                            <center> 
                                <Button className="submitbtn" type="submit">Submit</Button>
                            </center>

                            </Form>

                            <Form.Group controlId="formBasicSignin">
                                <Form.Text className="signin">
                                    <center><p className="text-signup">Already have an account?</p></center>
                                    <LinkContainer to="/signin">
                                        <Nav.Link className="link-signup"><center>Sign In</center></Nav.Link>
                                    </LinkContainer>
                            </Form.Text>
                        </Form.Group>
                    
                </Container>
            </Container>
            <br></br>
        </Container>
    </> )
}

export default Signup