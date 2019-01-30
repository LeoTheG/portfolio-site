import React, { Component, StyleSheet } from 'react';
import styled from 'styled-components';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div id="contact">
                <h1 style={styles.header}>Contact Me</h1>
                <div style={styles.info}>
                    <h2>(818) 370-0033</h2>
                    <h2 style={styles.email}>gregk2013@gmail.com</h2>
                </div>
            </div>
        );
    }
}
const styles = {
    header: {
        display: "flex",
        justifyContent: "left"
    },
    info: {
        display: "flex",
        justifyContent: "space-between"
    },
    email: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }
}
const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
`