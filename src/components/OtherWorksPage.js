import React, { Component } from 'react';
import Breakdown from './Breakdown';
import styled from 'styled-components';
const queryString = require('query-string');


export default class OtherWorksPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: {
                "lava": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/lava/lavabreakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/lava/lava.mov",
                    current: "main",
                    title: "Falling Lava",
                    description: "This shot was made based off the tutorial by Ben Watts.",
                },
                "treegrowth": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/treegrowth/breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/treegrowth/beauty_2.mov",
                    current: "main",
                    title: "Tree Growth",
                    description: "This tree growth was made off a tool using L-systems. It can also support the look of actual trees and even vines. It used packed objects to allow me to potentially replicate very dense geometry with barely any extra strain on the computer. This was done in Houdini and composited in Nuke."
                },
                "cloud": {
                    breakdown: null,
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/clouds/cloudship.mov",
                    current: "main",
                    title: "Cloudship",
                    description: "This shot was made based off the tutorial by Andreas Vrhovsek.",
                },
                "gears": {
                    breakdown: null,
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/transmog/gears.mov",
                    current: "main",
                    title: "Gears",
                    description: "This shot was made based off the tutorial by Jeff Wolverton."
                },
                "ship": {
                    breakdown: null,
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/transmog/ship.mov",
                    current: "main",
                    title: "Ship",
                    description: "This shot was made based off the tutorial by Jeff Wolverton."
                },
            }
        }
    }
    componentDidMount() {
        window.scrollTo(0,0)
        const parsed = queryString.parse(window.location.search);
        const height = document.body.scrollHeight
        switch(parsed.video){
            case "cloud":
                setTimeout(()=>window.scrollTo(0, height/2.7), 1000)
                break;
            case "gears":
                setTimeout(()=>window.scrollTo(0, height/1.7), 1000)
                break;
            case "lava":
                setTimeout(()=>window.scrollTo(0, 0), 1000)
                break;
            case "ship":
                setTimeout(()=>window.scrollTo(0, height), 1000)
                break;
            case "treegrowth":
                setTimeout(()=>window.scrollTo(0, height/7), 1000)
                break;
            default:
                break;
        }
        //window.scrollTo(0, this.state.videos.cloud.ref.offsetTop)
    }
    click(name) {
        return () => {
            const obj = JSON.parse(JSON.stringify(this.state.videos))
            obj[name].current = obj[name].current === "breakdown" ? "main" : "breakdown"
            this.setState({ videos: obj })
        }
    }
    render() {
        const x = []
        for (const key in this.state.videos) {
            x.push(
                <Breakdown
                    key={key}
                    current={this.state.videos[key].current}
                    name={key}
                    video={this.state.videos[key][this.state.videos[key].current]}
                    click={this.click.bind(this)}
                    title={this.state.videos[key].title}
                    description={this.state.videos[key].description}
                    ref={this.state.videos[key].ref}
                />
            )
        }
        return (
            <Div>
                {x}
            </Div>
        );
    }
}

const Div = styled.div`
    margin-top: 8%;
    max-width: 100vw;
    @media (max-width: 500px){
        margin-top: 45%;
    }
`