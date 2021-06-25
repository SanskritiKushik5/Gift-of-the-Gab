import React from "react";
import Card from 'react-bootstrap/Card';
import "./Dashboard.css";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'
import axios from "axios";

const Dashboard=()  => {

  const [weekstreak, setWeekstreak] = useState([]);

  useEffect(() => {
    loadWeekstreak();
  }, []);
  const loadWeekstreak = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/weekstreak`);
    setWeekstreak(result.data);
  }

  console.log(weekstreak)
  weekstreak.forEach(function(item) {
    item.date_time = item.date_time.slice(0,10)
  });

  console.log(weekstreak)
  var today = new Date();
  const ftoday = JSON.stringify(today).slice(1,11);
  console.log(ftoday)

  // axios.get('http://127.0.0.1:8000/api/weekstreak/')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  return(<>
<div className="CSS">
  <h3>Hey, Welcome back!</h3>
<center>
  <button type="button" class="btn btn-circle btn-xl">Sun</button>
  <button type="button" class="btn btn-circle btn-xl">Mon</button>
  <button type="button" class="btn btn-circle btn-xl">Tu</button>
  <button type="button" class="btn btn-circle btn-xl">Wed</button>
  <button type="button" class="btn btn-circle btn-xl">Thu</button>
  <button type="button" class="btn btn-circle btn-xl">Fri</button>
  <button type="button" class="btn btn-circle btn-xl">Sat</button>
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


export default Dashboard;