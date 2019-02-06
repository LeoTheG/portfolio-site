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
        let x = []
        let y = []
        // prevent arrows for single videos
        if (!(this.props.title === 'Cloudship' || this.props.title === 'Gears' || this.props.title === 'Ship')) {

            if (this.props.current == "main")
                x = (
                    <p style={styles.watch} onClick={this.props.click(this.props.name)}>Watch the breakdown</p>
                    /*
                    <Arrow key={this.props.current + "-" + this.props.name}>
                        <LeftArrow onClick={this.props.click(this.props.name)} size={"40px"} style={styles.arrow} />
                    </Arrow>
                    */
                )
            else
                y = (
                    <p style={styles.watch} onClick={this.props.click(this.props.name)}>Watch the final composition</p>
                    /*
                    <Arrow key={this.props.current + "-" + this.props.name}>
                        <RightArrow onClick={this.props.click(this.props.name)} size={"40px"} style={styles.arrow} />
                    </Arrow>
                    */
                )
        }
        return (
            <div>

            <Div>
                <Video>
                    <video key={this.props.video} style={{width: "900px", height: "100%"}}  controls type="video/mov">
                        <source src={this.props.video} />
                    </video>
                </Video>
                
                <TitleDescriptionBlock>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.description}</Description>
                    {x}
                    {y}
                </TitleDescriptionBlock>
            </Div>
            <Hr></Hr>
            </div>
        );
    }
}
const TitleDescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Hr = styled.hr`
    border: 1px solid #3681f0;
    width: 75%;
`
const Div = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 10% 0 10%;
`
const styles = {
    container: {
        maxWidth: "100%"
    },
    arrow: {
        cursor: "pointer"
    },
    watch: {
        cursor: "pointer", 
        textAlign: "center", 
        textDecoration: "underline",
        marginTop: "10px",
        fontSize: "20px"
    }
}
const Video = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
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