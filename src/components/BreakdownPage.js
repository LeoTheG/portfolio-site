import React, { Component } from 'react';
import Breakdown from './Breakdown';

export default class BreakdownPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            urls: {
                "candle": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/candle/candle_breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/candle/candle.mov",
                    current: "breakdown",
                    title: "Candle",
                    description: "This candle explosion was more difficult than I had thought due to the candle having trouble containing the pyro simulation. After some fiddling with some VDB collision settings, the piece came together quickly. This was modeled in Maya, and effects were done in Houdini. Composited in Nuke."
                },
                "ship": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/shipbreakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/ship2.mov",
                    current: "breakdown",
                    title: "Ship",
                    description: "The scale of this shot extended render times but it was still done in reasonable time. I’m responsible for all aspects except modeling the ship. Everything was done in Houdini and composited in Nuke. "
                },
                "sword": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/sword/sword_breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/sword/sword.mov",
                    current: "breakdown",
                    title: "Sword",
                    description: "This was done by making changes to an existed tool I had. In order to allow me to use materials on the objects, I had to delete the faces as opposed making their opacity 0 like I did on the other scenes. This was done in Houdini and composited in Nuke."
                },
                "tornado": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado_breakdown.mov",
                    current: "breakdown",
                    title: "Tornado",
                    description: "This tornado was made by projecting UV’s on an animated cylinder. While it looks very dense, the simulation times are very quick. Background was filmed by me. All effects were done in Houdini and composited in Nuke."
                },
                "underwater": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater_breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater.mov",
                    current: "breakdown",
                    title: "Underwater",
                    description: "This shot was made using a lot of noise with edge detection and mixing color channels in a 3d scene. Most of this shot was done using Nuke with some additional effects from Houdini."
                },
            }
        }
    }
    click(name){
        return ()=>{
            const obj = JSON.parse(JSON.stringify(this.state.urls))
            obj[name].current = obj[name].current == "breakdown" ? "main" : "breakdown"
            this.setState({urls: obj})
        }
    }
    render() {
        const x = []
        for(const key in this.state.urls){
            x.push(
                <Breakdown 
                    key={key}
                    current={this.state.urls[key].current} 
                    name={key} 
                    video={this.state.urls[key][this.state.urls[key].current]} 
                    click={this.click.bind(this)} 
                    title={this.state.urls[key].title}
                    description={this.state.urls[key].description}
                />
            )
        }
        return (
            <div>
                {x}
            </div>
        );
    }
}