import React, { Component } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import styled from 'styled-components';


export default class Works extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Div>

                <Player fluid={false} width={400}>
                    <source id="video-player" src="/beauty_2.mov" />
                </Player>
            </Div>
        );
    }
}

const Div = styled.div`
    padding-top: 5%;
`