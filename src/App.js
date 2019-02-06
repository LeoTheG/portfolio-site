import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import style from 'bootstrap/dist/css/bootstrap.css';
import DemoReel from './components/DemoReel';
import About from './components/About';
import Contact from './components/Contact';
import Mosaic from './components/Mosaic';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import DemoReelPage from './components/DemoReelPage';
import AboutPage from './components/AboutPage';
import OtherWorksPage from './components/OtherWorksPage';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar />
          <Route exact path="/demo-reel" component={DemoReelPage}/>
          <Route exact path="/other-works" component={OtherWorksPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/" component={Home} />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
