import React, { Component } from 'react';
import styled from 'styled-components';

export default class Mosaic extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <Images>
                <div className="mosaic-image mosaic-1"/>
                <div className="mosaic-image mosaic-2"/>
                <div className="mosaic-image mosaic-3"/>
                <div className="mosaic-image mosaic-4"/>
                <div className="mosaic-image mosaic-5"/>
            </Images>
        );
    }
}

const Images = styled.div`
    display: flex;
    max-width: 100%;
    overflow-x:hidden;
    justify-content: center;
`