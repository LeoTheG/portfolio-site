import React, { Component } from 'react';
import styled from 'styled-components';

export default class About extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <AboutDiv>
                <h1>About Me</h1>
                <h2>Pretty cool guy who does things</h2>
            </AboutDiv>
        );
    }
}

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
`