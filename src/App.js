import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route
            exact path='/'
            render={(props) => 
              <Home/>
            }
            />
            <Route 
              path='/about'
              render={(props) =>
                <About/>
              }
            />
            <Route 
              path='/projects'
              render={(props) =>
                <Projects/>
              }
            />
            <Route 
              path='/contact'
              render={(props) =>
                <Contact/>
              }
            />
          </Switch>
        </Router> 
        <Footer/>
      </div>
    );
  }
}

