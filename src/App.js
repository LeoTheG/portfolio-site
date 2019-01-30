import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import style from 'bootstrap/dist/css/bootstrap.css';
import DemoReel from './components/DemoReel';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <DemoReel />
        <About />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default App;
