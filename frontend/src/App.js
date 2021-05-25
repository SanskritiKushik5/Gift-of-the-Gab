import {React, useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Welcome, Contact, Review, History, Practice, Audioinput, Mic, Signup, Signin, Footer} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);
  const loadCards = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/card/");
    console.log(result.data)
    setCards(result.data);
  }
  return (
    <Router>
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
            <Mic />
            <Footer />
          </Route>
          <Route exact path="/history">
            <Header />
            <History />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
