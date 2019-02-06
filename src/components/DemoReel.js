import React, { Component } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import Breakdown from './Breakdown';

export default class DemoReel extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={styles.video} >
                    

                <Iframe url="https://player.vimeo.com/video/315374764"
                    max-width="100%!important"
                    height={window.innerHeight * .8 + "px"}
                    allowFullScreen
                    id="video"
                />
            </div>
        );
    }
}

const styles = {
    video: {
        paddingTop: "7%"
    }
}