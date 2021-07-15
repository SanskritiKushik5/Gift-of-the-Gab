import {React, useState} from 'react'
import {Nav} from 'react-bootstrap';
import {Button, Form, Container} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import axios from 'axios';

const Signin = ({details}) => {

    let history = useHistory();

    const [post, setPost] = useState({
		username:'',
        password:''
	});

	const onInputChange = e => {
		setPost({...post,[e.target.name]: e.target.value})
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://127.0.0.1:8000/api/login/', post)
        .then(response => {
            const auth_token = response.data["access"]; // get auth_token
            localStorage.setItem('access', auth_token);    // set token in axios header
            console.log(localStorage.getItem('access'))
          });
        setPost({
            username:'',
            password:''
        })
        history.push(`/dashboard/${details.id}`);
	}

    return (<>
        <Container fluid className="container-fluid bg">
            <br/>
            <br/>
            <br/>
        <Container className="form-box flex">
            <p className="form-title">Sign In</p>
                <Container fluid="md">
                    <Form onSubmit={e => onSubmit(e)}>

                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} value={post.username} name="username" type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} value={post.password} name="password" type="password" placeholder="Password" />
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
                    <Form.Group controlId="formBasicSignin">
                            <Form.Text className="signin">
                                <LinkContainer to="/">
                                    <Nav.Link className="link-signup"><center>Forget Password?</center></Nav.Link>
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