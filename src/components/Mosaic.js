import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default class Mosaic extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    scrollToRef(ref) {
        return () => {
            window.scrollTo(0, ref.offsetTop)
        }
    }
    render() {
        if (window.innerWidth < 500)
            return (
                <div>
                    <Title>
                        Other Works
                </Title>
                    <Images>
                        <div className="mosaic-image mosaic-1" />
                        <div className="mosaic-image mosaic-2" />
                        <div className="mosaic-image mosaic-3" />
                        <div className="mosaic-image mosaic-4" />
                        <div className="mosaic-image mosaic-5" />
                    </Images>
                </div>
            )
        return (
            <div>
                <Title>
                    Other Works
            </Title>
                <Images>
                    <Link to="/other-works?video=cloud">
                        <div className="mosaic-image mosaic-1" />
                    </Link>
                    <Link to="/other-works?video=gears">
                        <div className="mosaic-image mosaic-2" />
                    </Link>
                    <Link to="/other-works?video=lava">
                        <div className="mosaic-image mosaic-3" />
                    </Link>
                    <Link to="/other-works?video=ship">
                        <div className="mosaic-image mosaic-4" />
                    </Link>
                    <Link to="/other-works?video=treegrowth">
                        <div className="mosaic-image mosaic-5" />
                    </Link>
                </Images>
            </div>
        );
    }
}

const Images = styled.div`
    display: flex;
    max-width: 100%;
    overflow-x:hidden;
    justify-content: center;
`

const Title = styled.h1`
    text-align: center;
`