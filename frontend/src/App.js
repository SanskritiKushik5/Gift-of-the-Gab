import {React, useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Welcome, Contact, Review, History, Practice, Audioinput, Signup, Signin, Footer, ScrollToTop,Dashboard, UserProfile} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
// import { tokenConfig } from "./auth";

function App() {
  const [cards, setCards] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    loadCards();
    loadDetails();
  }, []);
  const loadCards = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/card/");
    setCards(result.data);
  }
  const loadDetails = async () => {
    console.log(localStorage.getItem('access'))
    const accessToken = String(localStorage.getItem('access'))
    const result = await axios.get("http://127.0.0.1:8000/api/current_user/", 
    {headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    }});
    setDetails(result.data);
    console.log(details)
  }
  return (
    <Router>
     <ScrollToTop>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Welcome />
            <br />
            <Review />
            <br />
            <Practice cards={cards}/>
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/exercise">
            <Header />
            <Practice cards={cards}/>
            <Footer />
          </Route>
          <Route exact path="/audioinput/:id">
            <Header />
            <Audioinput />
            <Footer />
          </Route>
          <Route exact path="/history">
            <Header />
            <History />
            <Footer />
          </Route>
          <Route exact path="/dashboard">
            <Header />
            <Dashboard />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Header />
            <Signup />
            <Footer />
          </Route>
          <Route exact path="/signin">
            <Header />
            <Signin />
            <Footer />
          </Route>
          <Route exact path="/userprofile">
            <Header />
            <UserProfile />
            <Footer />
          </Route>
        </Switch>
      </div>
     </ScrollToTop>
    </Router>
  );
}

export default App;
