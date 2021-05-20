import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Welcome, Contact, Review, History, Practice, Audioinput, Mic, Signup, Signin, Footer} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
            <Practice />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/exercise">
            <Header />
            <Practice />
            <Footer />
          </Route>
          <Route exact path="/audioinput">
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
