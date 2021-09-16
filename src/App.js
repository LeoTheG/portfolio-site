import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import style from 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line no-unused-vars
import Contact from './components/Contact';

import { Route, HashRouter as Router, HashRouter } from 'react-router-dom'
import Home from './components/Home';
import DemoReelPage from './components/DemoReelPage';
import AboutPage from './components/AboutPage';
import OtherWorksPage from './components/OtherWorksPage';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <TopBar />
          <Route exact path="/demo-reel" component={DemoReelPage}/>
          <Route exact path="/other-works" component={OtherWorksPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/" component={Home} />
          <Contact />
        </div>
      </HashRouter>
    );
  }
}

export default App;
