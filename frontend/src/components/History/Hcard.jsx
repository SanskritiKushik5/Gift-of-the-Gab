import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Hcard = ({ history }) => {
    var dt = history.date_time
    var mdt = dt.slice(0, 10) + " " + dt.slice(11, 16)
    return (
        <div>
            <Card>
                <Row>
                    <Col lg={5} sm={12}>
                        <Card.Img className="hcardImg" src={history.thumbnail} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{history.exercise_name}</Card.Title>
                            <Card.Text>
                                <p>{mdt}</p>
                                <small>{history.description}</small>
                            </Card.Text>
                            <LinkContainer to={`/audioinput/${history.card_id}`}>
                                <Button className="btn">Practice More</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Hcard
