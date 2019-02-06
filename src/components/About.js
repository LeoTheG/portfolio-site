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
                <Spacer>

                <Paragraph>
                    I am Gregory Kalamdaryan and I've been working with VFX for 7 years. I started out with Maya's nParticles and Bifrost engine. During my time at Los Angeles Film School, I moved on to Realflow and eventually HoudiniFX. I have now been using Houdini for 5 years alongside Nuke to build 3D scenes to composite in.
                </Paragraph>
                </Spacer>
            </AboutDiv>
        );
    }
}

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 0 5% 0;
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 20px;
`
const Spacer = styled.div`
    max-width: 800px;
`