import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DemoReel from './DemoReel';

export default class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Navbar bg="light" expand="lg" className="sticky-top">
                <Navbar.Brand href="/">Greg Kalamdaryan</Navbar.Brand>
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
        );
    }
}