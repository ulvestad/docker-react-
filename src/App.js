import React from 'react';
import './App.css';
import Nav from './Nav';
import Hjem from './Hjem'
import OmOss from './OmOss';
import Diverse from './Diverse'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/om-oss" component={OmOss}/>
        <Route path="/diverse" component={Diverse}/>
        <Route path="" component={Hjem}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
