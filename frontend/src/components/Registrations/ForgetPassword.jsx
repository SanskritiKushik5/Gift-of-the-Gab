import {React, useState, useEffect} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import swal from 'sweetalert';
import axios from "axios";
import './ForgetPassword.css';
import { useParams } from "react-router-dom";

const UserProfile = ({details}) => {
    const { id } = useParams();
    console.log(id)
    console.log(details)
    var user = {
        password:details.password,
    }
    const onInputChange = e => {
		user = {...user,[e.target.name]: e.target.value}
	}
    console.log(user);
    const onSubmit = async (e) => {
		e.preventDefault();
        console.log(user)
		await axios.put(`http://127.0.0.1:8000/api/user_details/${id}/`, user);
        swal({
            title: "Password Updated Successfully!",
            icon: "success",
          });
	}
    return (
    <>
        <Container className="form-box flex mt-5">
            <Container fluid="md">
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group controlId="old password">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control /*onChange={e => onInputChange(e)}*/ name="username" type="username" />
                    </Form.Group>

                    <Form.Group controlId="new password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control onChange={e => onInputChange(e)} name="password" type="password" />
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