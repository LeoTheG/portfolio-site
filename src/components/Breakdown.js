import React, { Component } from 'react';
import { FaArrowCircleRight as RightArrow } from 'react-icons/fa';
import { FaArrowCircleLeft as LeftArrow } from 'react-icons/fa';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import styled from 'styled-components';


export default class Breakdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMain: false,
        }
    }
    render() {
        const x = []
        const y = []
        // prevent arrows for single videos
        if (!(this.props.title === 'Cloudship' || this.props.title === 'Gears' || this.props.title === 'Ship')) {

            if (this.props.current == "main")
                x.push(
                    <Arrow key={this.props.current + "-" + this.props.name}>
                        <LeftArrow onClick={this.props.click(this.props.name)} size={"40px"} style={styles.arrow} />
                    </Arrow>
                )
            else
                y.push(
                    <Arrow key={this.props.current + "-" + this.props.name}>
                        <RightArrow onClick={this.props.click(this.props.name)} size={"40px"} style={styles.arrow} />
                    </Arrow>
                )
        }
        return (
            <div style={styles.container}>
                <Video>
                    {x}
                    <video key={this.props.video} className="breakdown-video" controls type="video/mov">
                        <source src={this.props.video} />
                    </video>
                    {y}
                </Video>
                <Title>{this.props.title}</Title>
                <Description>{this.props.description}</Description>
            </div>
        );
    }
}
const styles = {
    container: {
        maxWidth: "100%"
    },
    arrow: {
        cursor: "pointer"
    }
}
const Video = styled.div`
    display: flex;
    justify-content: center;
`
const Arrow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 1% 0 1%;
`
const Title = styled.h1`
    text-align: center;
`
const Description = styled.p`
    text-align: center;
    margin: 0 15% 0 15%;
`