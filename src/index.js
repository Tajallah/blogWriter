import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navigation from "./Nav"
import Writer from './Pages/Writer'
import StartPage from "./Pages/StartPage"
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <Navigation />
  <Row>
    <Col xs="2"><br /></Col>
    <Col xs="8">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/Writer" component={Writer} />
          </Switch>
        </div>
      </Router>
    </Col>
    <Col xs="2"><br /></Col>
  </Row>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
