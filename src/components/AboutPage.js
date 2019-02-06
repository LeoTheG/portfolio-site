import React, { Component } from 'react';
import styled from 'styled-components';
import LogoList from './LogoList';

export default class AboutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logoImages: [
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/aftereffect.png",
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/houdini.png",
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/maya.png",
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/mocha.png",
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/nuke.png",
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/photoshop.png",
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/realflow.png",
                "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/zbrush.png"
            ]
            
        }
    }
    render() {
        return (
            <Div>
                {/*
                <embed src="/resume.pdf" width="700px" height="650px" />
                */}
                <PDFCombined>

                <PDF>
                <object data="https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Gregory_Resume.pdf" 
                    width="100%" 
                    height="100%"
                >
                    <p><a href="https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Gregory_Resume.pdf">View Resume</a></p>
                </object>
                </PDF>
                <P><a href="https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Gregory_Resume.pdf">Download Resume</a></P>
                </PDFCombined>
                <Image>
                    <img style={styles.image} src="https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/GregsFACE.png"/>
                    <Text>Proficient with:</Text>
                    <LogoList images={this.state.logoImages} />
                </Image>
            </Div>
        );
    }
}
const P = styled.p`
    margin-top: 2%;
    text-align: center;
    @media (max-width: 400px){
        display: none;
    }
`
const PDFCombined = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 650px;
    max-width: 65%;
`
const Text = styled.h1`
    margin: 10px 0 10px 0;
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8% 10% 0 10%;
`
const PDF = styled.div`
    width: 100%;
    height: 100%;
`
const Image = styled.div`
    width: 400px;
    height: 400px;
    @media (max-width: 800px){

        width: 300px;
        height: 300px;
    }
    @media (max-width: 500px){

        width: 200px;
        height: 150px;
    }
`

const styles = {
    image: {
        width: "100%",
        height: "100%",

    }
}