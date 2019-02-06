import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DemoReel from './DemoReel';
import styled from 'styled-components';

export default class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Div>
            <Navbar expand="lg" >
                <Navbar.Brand href="/">
                <img style={styles.logo} src="https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Logo.png"/>
                <span>Gregory Kalamdaryan </span><small>VFX Artist</small></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer exact={true} to='/'>
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/demo-reel'>
                            <Nav.Link>Demo Reel</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/other-works'>
                            <Nav.Link>Other Works</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Line></Line>
            </Div>
        );
    }
}

const Line = styled.hr`
    border: 1px solid #3681f0;
    margin-top: 0;
`
const Div = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`
const styles = {
    logo: {
        width: "90px",
        height: "60px"
    }
}