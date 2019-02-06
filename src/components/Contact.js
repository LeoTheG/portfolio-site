import React, { Component} from 'react';
import styled from 'styled-components';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Div>

            <div id="contact">
                <h2 style={styles.header}>Contact Me</h2>
                <Text>

                <div style={styles.info}>
                    <h3>(818) 370-0033</h3>
                    <h3>gregk2013@gmail.com</h3>
                </div>
                </Text>
            </div>
            </Div>
        );
    }
}
const styles = {
    header: {
        display: "flex",
        justifyContent: "left",
        marginLeft: "1%",
        marginRight: "1%",
        marginBottom: "0px"
    },
    info: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "1%",
        marginRight: "1%",
    },
}
const Div = styled.div`
    padding-top: 5px;
    width: 100%;
    background-color: black;
    bottom: 0px;
    margin-top: 5%;
`

const Text = styled.div`
    h3 {
        font-size: 20px;
    }
`