import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import img from '../Images/welcome-page.jpg';
import "./Welcome.css";

const Welcome = () => {
    window.scrollTo(0, 0)
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="col1">
                    <h1 className="display-1">
                        <strong>Welcome!</strong>
                    </h1>
                    <p>Hello! Speech can be a major confidence booster for many people, This project aims on improving your speech through different exercises and add a brighter element to your personality</p>
                </Col>
                <Col xs={12} md={6}>
                    <Image className="homeImg" src={img} alt="home img" fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome