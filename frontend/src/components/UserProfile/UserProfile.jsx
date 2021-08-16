import { React, useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from "axios";
import { useParams } from "react-router-dom";

const UserProfile = ({ details }) => {
    const { id } = useParams();
    console.log(id)
    console.log(details)
    var user = {
        username: details.username,
        email: details.email,
        first_name: details.first_name,
        last_name: details.last_name,
        date_of_birth: details.date_of_birth,
    }
    const onInputChange = e => {
        user = { ...user, [e.target.name]: e.target.value }
    }
    console.log(user);
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        await axios.put(`http://127.0.0.1:8000/api/user_details/${id}/`, user);
        swal({
            title: "Profile Updated Successfully!",
            icon: "success",
        });
    }
    return (
        <>
            <Container className="form-box flex mt-5">
                <Container fluid="md">
                    <Form onSubmit={e => onSubmit(e)}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} name="username" type="username" defaultValue={details.username} />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} name="email" type="email" defaultValue={details.email} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} name="first_name" type="first_name" defaultValue={details.first_name} />
                        </Form.Group>

                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} name="last_name" type="last_name" defaultValue={details.last_name} />
                        </Form.Group>

                        <Form.Group controlId="date_of_birth">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} name="date_of_birth" defaultValue={details.date_of_birth} />
                        </Form.Group>

                        <center>
                            <Button className="submitbtn" type="submit">Save</Button>
                        </center>

                    </Form>
                </Container>
            </Container>
        </>)
}

export default UserProfile