import React, { Component } from 'react';
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

            if (this.props.current === "main")
                x = (
                    <p style={styles.watch} onClick={this.props.click(this.props.name)}>Watch the breakdown</p>
                )
            else
                y = (
                    <p style={styles.watch} onClick={this.props.click(this.props.name)}>Watch the final composition</p>
                )
        }
        return (
            <Container>

            <Div>
                <Video>
                    <ActualVideo key={this.props.video} style={styles.video}  controls type="video/mov">
                        <source src={this.props.video} />
                    </ActualVideo>
                </Video>
                
                <TitleDescriptionBlock>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.description}</Description>
                    {x}
                    {y}
                </TitleDescriptionBlock>
            </Div>
            <Hr></Hr>
            </Container>
        );
    }
}
const TitleDescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 500px){
        flex-basis: 300px;
        width: 100%;
        margin-left: 20px;
        min-width: 150px;
    }
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
    },
}
const ActualVideo = styled.video`
    width: 900px;
    height: 100%;
    @media (max-width: 500px){
        width: 150px;
        height: 150px;
    }
`

const Video = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
`
const Title = styled.h1`
    text-align: center;
`
const Description = styled.p`
    text-align: center;
    margin: 0 15% 0 15%;
    @media (max-width: 500px){
        margin: 0 0 0 0;
    }
`
const Container = styled.div`
    max-width: 100vw;
`