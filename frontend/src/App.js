import {React, useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Welcome, Contact, Review, History, Practice, Audioinput, Signup, Signin, Footer, ScrollToTop, Refresh, Dashboard, UserProfile} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
// import { tokenConfig } from "./auth";

function App() {
  const [cards, setCards] = useState([]);
  const [details, setDetails] = useState({});
  const [historys, setHistorys] = useState([]);
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  } 
  useEffect(() => {
    loadCards();
    loadDetails();
    loadHistorys();
  }, []);
  const loadCards = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/card/");
    setCards(result.data);
  }

  const loadHistorys = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/history/");
    setHistorys(result.data);
  }

  const loadDetails = async () => {
    const accessToken = String(localStorage.getItem('access'));
    const result = await axios.get("http://127.0.0.1:8000/api/current_user/", 
    {headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    }});
    setDetails(result.data);
  }
  return (
    <Router>
      <div className="app">
        <Switch>
          <Refresh>
          <Route exact path="/">
            <Header details={details} />
            <Welcome />
            <br />
            <Review />
            <br />
            <Practice cards={cards}/>
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Header details={details}/>
            <Contact />
            <Footer />
          </Route>
          <ScrollToTop>
          <Route exact path="/exercise">
            <Header details={details}/>
            <Practice cards={cards}/>
            <Footer />
          </Route>
          </ScrollToTop>
          <Route exact path="/audioinput/:id">
            <Header details={details} />
            <Audioinput customer={details.id}/>
            <Footer />
          </Route>
          <Route exact path="/history/:id">
            <Header details={details}/>
            <History />
            <Footer />
          </Route>
          <Route exact path="/dashboard/:id">
            <Header details={details}/>
            <Dashboard details={details}/>
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Header details={details}/>
            <Signup />
            <Footer />
          </Route>
          <Route exact path="/signin">
            <Header details={details} />
            <Signin />
            <Footer />
          </Route>
          <Route exact path="/userprofile/:id">
            <Header details={details}/>
            <UserProfile details={details}/>
            <Footer />
          </Route>
          </Refresh>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
