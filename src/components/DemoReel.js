import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class DemoReel extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={styles.video} >
                    

                <Iframe url="https://player.vimeo.com/video/315374764?autoplay=1&loop=1"
                    // max-width="100%!important"
					width="100%"
                    height={window.innerHeight * .8 + "px"}
					// style={{outerWidth: '100%'}}
                    allowFullScreen
                    id="video"
                />
            </div>
        );
    }
}

const styles = {
    video: {
        paddingTop: "7%"
    }
}