import React from "react";
import Card from 'react-bootstrap/Card';
import "./Dashboard.css";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const dashboard=()  => {
  return(<>
<div className="CSS">
  <h3>Hey, Welcome back!</h3>
<center>
  <button type="button" class="btn btn-default btn-circle btn-xl"><i class="fa fa-check"></i>
   Sun</button>
  <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-list"></i>
   Mon</button>
  <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-link"></i>
   Tu</button>
  <button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-check"></i>
   Wed</button>
  <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-times"></i>
   Thu</button>
  <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-heart"></i>
   Fri</button>
  <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-heart"></i>
   Sat</button>
</center>
<div className="card">
<Row>
<Col>
<Card>
  <Card.Body>
    <Card.Title>Pronounciation</Card.Title>
    <Card.Text>
    <ProgressBar animated now={45} />
    </Card.Text>
    <br></br>
    <Card.Link href="#">View Next</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Body>
    <Card.Title>Phonetics</Card.Title>
    <Card.Text>
    <ProgressBar animated now={20} />
    </Card.Text>
    <br></br>
    <Card.Link href="#">View Next</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Body>
    <Card.Title>Recitation</Card.Title>
    <Card.Text>
    <ProgressBar animated now={80} />
    </Card.Text>
    <br></br>
    <Card.Link href="#">View Next</Card.Link>
  </Card.Body>
</Card>
</Col>
</Row>
</div>
</div>
</>
  );
};

export default dashboard;