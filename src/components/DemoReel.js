import React, { Component } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

export default class DemoReel extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <Iframe url="https://player.vimeo.com/video/297450049"
                width="800px"
                height="450px"
                allowFullScreen
                id="video"
            />
            /*
            <iframe id="video" style={video} src={"https://player.vimeo.com/video/297450049"} width={"800"} height={"450"} 
            frameBorder={"0"}
                webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>
                */
        );
    }
}

const video = styled.iframe`
    display: none!important;
    margin: 0 auto!important;
    left: 0!important;
    right: 0!important;
`
