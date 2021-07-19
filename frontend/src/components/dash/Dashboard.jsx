import React from "react";
import Card from 'react-bootstrap/Card';
import "./Dashboard.css";
import { LinkContainer } from "react-router-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment'

const Dashboard = ()  => {

  const { id } = useParams();
  let streak = [];
  var week = {};
  // const [active, setActive] = useState(false);
  const [final, setFinal] = useState({});
  let history = [];
  const [phonetics, setPhonetics] = useState();
  const [phtext, setPhtext] = useState();

  var active = false
  var today = new Date();
  var fday = today.getDay();
  const data = new Set();
  const card_array = [];
  var poetry, potext, prose, prtext;
 
  console.log(id)
  useEffect(() => {
    console.log("load weekstreak")
    loadWeekstreak();
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/history/${id}`);
    history = result.data;
    var i=0;
    console.log('blah')
    console.log(history)
    history.forEach(function(item){
      card_array[i] = item.card_id;
      i++;
    })
    console.log(card_array)
    if(card_array.includes(6)){
      if(card_array.includes(7)){
        if(card_array.includes(8)){
          setPhtext('Practice Again')
        }
        else{
          setPhtext('View Next')
          setPhonetics(8)
          console.log("hey am 8")
        }
      }
      else{
        setPhtext('View Next')
        setPhonetics(7)
        console.log("hey am 7")
      }
    }
    else{
      setPhtext('View Next')
      setPhonetics(6)
      console.log("hey am 6")
    }
    console.log(phonetics, phtext)
  }

  const loadWeekstreak = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/weekstreak/${id}`);
    streak = result.data;
    console.log(streak)
    streak.forEach(function(item){
      item.date_time = item.date_time.slice(0,10)
      data.add(item.date_time)
    })
    console.log(data)

    for(let i=0; i<=fday; i++){  
      var itr_date = moment().subtract('days', fday-i).format('YYYY-MM-DD');
      if(data.has(itr_date)){
        active = true
        week[i]=active;
      }
      else{
        active=false
        week[i]=active;
      }
      console.log(week)
    }
    setFinal(week)
    console.log(final)
  }

  console.log(history)
  console.log(phonetics, phtext)
  return(<>

<div className="CSS">
  <h3>Hey, Welcome back!</h3>
<center>
  <button style={{backgroundColor: final[0]? "#001457" : "#095a9d"}} type="button" id="0" className="btn btn-circle btn-xl">Sun</button>
  <button style={{backgroundColor: final[1]? "#001457" : "#095a9d"}} type="button" id="1" className="btn btn-circle btn-xl">Mon</button>
  <button style={{backgroundColor: final[2]? "#001457" : "#095a9d"}} type="button" id="2" className="btn btn-circle btn-xl">Tue</button>
  <button style={{backgroundColor: final[3]? "#001457" : "#095a9d"}} type="button" id="3" className="btn btn-circle btn-xl">Wed</button>
  <button style={{backgroundColor: final[4]? "#001457" : "#095a9d"}} type="button" id="4" className="btn btn-circle btn-xl">Thu</button>
  <button style={{backgroundColor: final[5]? "#001457" : "#095a9d"}} type="button" id="5" className="btn btn-circle btn-xl">Fri</button>
  <button style={{backgroundColor: final[6]? "#001457" : "#095a9d"}} type="button" id="6" className="btn btn-circle btn-xl">Sat</button>
  
</center>

<div className="card">
<Row>
<Col>
<Card>
  <Card.Body>
    <Card.Title>Phonetics</Card.Title>
    <br></br>
    <LinkContainer to={`/audioinput/${phonetics}`}>
        <Button className="btn">{phtext}</Button>
    </LinkContainer>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Body>
    <Card.Title>Recitation Poetry</Card.Title>
    <br></br>
    <LinkContainer to={`/audioinput/${history.card_id}`}>
        <Button className="btn">View Next</Button>
    </LinkContainer>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Body>
    <Card.Title>Recitation Prose</Card.Title>
    <br></br>
    <LinkContainer to={`/audioinput/${history.card_id}`}>
        <Button className="btn">View Next</Button>
    </LinkContainer>
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

