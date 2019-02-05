import React, { Component } from 'react';
import styled from 'styled-components';

export default class AboutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Div>
                {/*
                <embed src="/resume.pdf" width="700px" height="650px" />
                */}
                <object data="/resume.pdf" width="700px" height="650px">
                    <p><a href="/resume.pdf">View Resume</a></p>
                </object>
                <img src="/GregsFACE.png" style={styles.image} />
            </Div>
        );
    }
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 5% 0 5%;
`
const PDF = styled.div`
    max-width: 48%;
`

const styles = {
    image: {
        maxWidth: "600px",
        maxHeight: "500px"

    }
}