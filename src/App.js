import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav';
import Resume from './Resume';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
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
              path='/resume'
              render={(props) =>
                <Resume/>
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
      </div>
    );
  }
}

