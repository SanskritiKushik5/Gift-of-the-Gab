import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';
const Explore = () => {
    return (
        <div>
    <Container>
        <Row>
            <Col lg={6}>
        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
         width="600px"
         height="450px"
         id="myId"
         className="myClassname"
         display="initial"
        />
        </Col>

        <Col lg={6}>
        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
         width="600px"
         height="450px"
         id="myId"
         className="myClassname"
         display="initial"
        />
        </Col>
        </Row>
        
    </Container>
        </div>
    )
}

export default Explore
