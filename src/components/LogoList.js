import React, { Component } from 'react';
import styled from 'styled-components';

export default class LogoList extends Component{
    render() {
        const x = []
        for(const image in this.props.images){
            x.push(
                <Image key={image}>
                    <img alt="product logo" style={styles.image} src={this.props.images[image]} />
                </Image>
            )
        }
        return (
            <Images>
                {x}
            </Images>
        );
    }
}

const Images = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Image = styled.div`
    flex: 1 0 21%;
    width: 100px;
    height: 100px;
    padding: 5px 5px 5px 5px;
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
    }
`

const styles = {
    image: {
        width: "100%",
        height: "100%"
    }
}