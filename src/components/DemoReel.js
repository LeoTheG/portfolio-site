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
            <div>

                <Iframe url="https://player.vimeo.com/video/297450049"
                    width="800px"
                    height="450px"
                    allowFullScreen
                    id="video"
                />
            </div>
        );
    }
}