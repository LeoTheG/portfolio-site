import React, { Component } from 'react';
import About from './About';
import Mosaic from './Mosaic';
import DemoReel from './DemoReel';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.myRef = React.createRef()
    }
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div>
                <DemoReel />
                <About />
                <Mosaic />
            </div>
        );
    }
}