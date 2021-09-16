import React, { Component } from 'react';
import Breakdown from './Breakdown';
import styled from 'styled-components';

export default class DemoReelPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            urls: {
				"planetary explosion": {
					main: "https://player.vimeo.com/video/606086990?h=96d7133a41",
					breakdown: "https://player.vimeo.com/video/606111779?h=8200f31954",
					isIFrame: true,
					current: 'main',
					title: "Planetary Explosion",
description: "Using Octane for the ice like shaders was very important to keep render times low here. Most volumes were also kept within houdini but all godrays were done using nuke"


				},
				"volcano": {
					main: "https://player.vimeo.com/video/606038190?h=48f1b3be27",
					breakdown: "https://player.vimeo.com/video/606074390?h=06c79e3938",
					isIFrame: true,
					current: 'main',
					title: "Underwater Volcano",
description: "Used a volcano in Hawaii as inspiration for this. Had to do some extra work in nuke to really make a vibrant afternoon scene."


				},

				"disintegrate": {
					isIFrame: true,
					main: "https://player.vimeo.com/video/606146454?h=825d266591",
					breakdown: "https://player.vimeo.com/video/606161085?h=19b1a8d235",
					current: 'main',
					title: "Metal Disintegration ",
					 description: "My final iteration of the disintegration effect. Really pushing for better lighting and more complex photon maps."
				},
				// "volcano fire"
				// "disintegrate"
                "ocean": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/shipbreakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/ship2.mov",
                    current: "main",
                    title: "Ocean",
                    description: "The scale of this shot extended render times but it was still done in reasonable time. I’m responsible for all aspects except modeling the ship. Everything was done in Houdini and composited in Nuke. "
                },
                "tornado": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado_breakdown.mov",
                    current: "main",
                    title: "Tornado",
                    description: "This tornado was made by projecting UV’s on an animated cylinder. While it looks very dense, the simulation times are very quick. Background was filmed by me. All effects were done in Houdini and composited in Nuke."
                },
                "underwater": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater_breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater.mov",
                    current: "main",
                    title: "Underwater",
                    description: "This shot was made using a lot of noise with edge detection and mixing color channels in a 3d scene. Most of this shot was done using Nuke with some additional effects from Houdini."
                },
            }
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
    }
    click = (name) => {
            const obj = JSON.parse(JSON.stringify(this.state.urls))
            obj[name].current = obj[name].current === "breakdown" ? "main" : "breakdown"
            this.setState({urls: obj})
    }
    render() {
        // const x = []
        // for(const key in this.state.urls){
        //     x.push(
        //         <Breakdown 
        //             key={key}
        //             current={this.state.urls[key].current} 
        //             name={key} 
        //             video={this.state.urls[key][this.state.urls[key].current]} 
        //             click={this.click.bind(this)} 
        //             title={this.state.urls[key].title}
        //             description={this.state.urls[key].description}
        //         />
        //     )
        // }
        return (
            <Div>
               {Object.entries(this.state.urls).map(([key, val]) => 
                <Breakdown 
                    key={val.title}
					isBreakdown={val.current === 'breakdown'}
					videoSrcBreakdown={val.breakdown}
					videoSrcMain={val.main}
					isIFrame={val.isIFrame}
					title={val.title}
					description={val.description}
					onClickView={() => this.click(key)}
                />
				)}
            </Div>
        );
    }
}

const Div = styled.div`
    margin-top: 8%;
    @media (max-width: 500px){
        margin-top: 45%;
    }
`