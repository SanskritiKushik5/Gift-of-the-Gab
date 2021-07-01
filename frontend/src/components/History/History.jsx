import React from 'react';
import "./History.css";
import axios from "axios";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Hcard from "./Hcard";

const History = () => {
    const [history, setHistory] = useState([]);
    const { id } = useParams();
    const [count, setCount] = useState([]);

    useEffect(() => {
        loadHistory();
    }, []);
    
    const loadHistory = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/history/${id}`);
        setHistory(result.data);
        const output = await axios.get(`http://127.0.0.1:8000/api/count/${id}`);
        setCount(output.data);
    }
    
    var fhistory = [];

    history.forEach(function(item) {
      var existing = fhistory.filter(function(v, i) {
        return v.card_id == item.card_id;
      });
      if (existing.length) {
        var existingIndex = fhistory.indexOf(existing[0]);
        fhistory[existingIndex].date_time = item.date_time.slice(0,10) +" "+ item.date_time.slice(11,16);
      } else {
        if (typeof item.date_time == 'string')
          item.date_time = [item.date_time];
          item.date_time = item.date_time.slice(0,10) +" "+ item.date_time.slice(11,16)
        fhistory.push(item);
      }
    });

    return (
        <div>
            <div className="row head-bg">
                {/* <div className="container-fluid order-1 col-6 count-left">
                    <h1 className="display-2">450 </h1><h3>Total Minutes Spent</h3>
                </div> */}
                <div className="container-fluid order-2 col-6 count-right">
                    <h1 className="display-2">{count.count}</h1><h3>Total Exercises Done</h3>
                </div>
            </div>
            <div className="col-9 mx-auto">
                <div className="container-fluid">
                    <h2 align="center">Recent Activities</h2>
                    <br></br>
                    {fhistory.map((history)=>(
                         <Hcard history={history}/>
                    ))}
                                        {/* <Card>
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
                    <br></br> */}
                    {/* <h2 align="center">Dec 2020</h2>
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
                    </Tab.Container> */}
                </div>
            </div>
        </div>
    
    )
}

export default History
