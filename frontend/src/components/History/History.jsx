import React from 'react';
import "./History.css";
import {Tab, Nav, Col, Row, Card, Button} from 'react-bootstrap';
import img from '../Images/sample.jpg';

const History = () => {
    return (
        <div>
            <div className="row head-bg">
                <div className="container-fluid order-1 col-6 count-left">
                    <h1 className="display-2">450 </h1><h3>Total Minutes Spent</h3>
                </div>
                <div className="container-fluid order-2 col-6 count-right">
                    <h1 className="display-2">28 </h1><h3>Total Exercises Done</h3>
                </div>
            </div>
            <div className="col-10 mx-auto">
                <div className="container-fluid">
                    <h2 align="center">Jan 2021</h2>
                    <br></br>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">21 Jan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">19 Jan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">17 Jan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">12 Jan</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Breathing Exercise 1</Card.Title>
                                                        <Card.Text>
                                                            <p>21 Jan, Mon  15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Breathing Exercise 3</Card.Title>
                                                        <Card.Text>
                                                            <p>21 Jan, Mon  17:32</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Pronounciation Exercise 4</Card.Title>
                                                        <Card.Text>
                                                            <p>19 Jan, Sat  15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Pronounciation Exercise 1</Card.Title>
                                                        <Card.Text>
                                                            <p>17 Jan, Thu 15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Pronounciation Exercise 1</Card.Title>
                                                        <Card.Text>
                                                            <p>12 Jan, Sat 15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <br></br>
                    <h2 align="center">Dec 2020</h2>
                    <br></br>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">21 Dec</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">19 Dec</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">17 Dec</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">12 Dec</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Breathing Exercise 1</Card.Title>
                                                        <Card.Text>
                                                            <p>21 Jan, Mon  15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Breathing Exercise 3</Card.Title>
                                                        <Card.Text>
                                                            <p>21 Jan, Mon  17:32</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Pronounciation Exercise 4</Card.Title>
                                                        <Card.Text>
                                                            <p>19 Jan, Sat  15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Pronounciation Exercise 1</Card.Title>
                                                        <Card.Text>
                                                            <p>17 Jan, Thu 15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Card>
                                            <Row className='no-gutters'>
                                                <Col md={5} lg={5}  >
                                                    <Card.Img src={img} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Pronounciation Exercise 1</Card.Title>
                                                        <Card.Text>
                                                            <p>12 Jan, Sat 15:31</p>
                                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</small>
                                                        </Card.Text>
                                                        <Button className="btn">Practice Again</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    
    )
}

export default History
