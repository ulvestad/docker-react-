import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Hjem from './Hjem'
import OmOss from './OmOss';
import Diverse from './Diverse'
import LoggInn from './LoggInn'
import NotFound404 from './NotFound404'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
    <div className="App">
      <div style={{minHeight: "92vh"}}>
      <Nav/>
      <Switch>
        <Route path="/om-oss" component={OmOss}/>
        <Route path="/diverse" component={Diverse}/>
        <Route path="/logg-inn" component={LoggInn}/>
        <Route path="/" exact component={Hjem}/>
        <Route component={NotFound404}></Route>
      </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
