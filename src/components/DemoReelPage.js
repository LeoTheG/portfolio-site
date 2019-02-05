import React, { Component } from 'react';
import Breakdown from './Breakdown';

export default class DemoReelPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: {
                "lava": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/lava/lavabreakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/lava/lava.mov",
                    current: "breakdown",
                    title: "Falling Lava",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sem. Morbi eu velit fermentum, tincidunt ligula sed, posuere ante. Sed sollicitudin a massa quis vehicula. Cras vitae arcu ligula. Curabitur velit augue, placerat vitae lectus ut, sollicitudin pellentesque eros. Cras quis faucibus est. Phasellus ultricies dolor venenatis sodales rhoncus. Mauris eu risus varius, commodo felis vitae, sollicitudin dui. Aliquam ut volutpat tortor. Etiam vitae ipsum sit amet odio auctor eleifend in a dui. Suspendisse condimentum laoreet massa, nec ullamcorper lorem fermentum a. Nam eu bibendum ipsum. Vivamus pharetra volutpat felis, vitae lacinia lorem molestie at."
                },
                "treegrowth": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/treegrowth/breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/treegrowth/beauty_2.mov",
                    current: "breakdown",
                    title: "Tree Growth",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sem. Morbi eu velit fermentum, tincidunt ligula sed, posuere ante. Sed sollicitudin a massa quis vehicula. Cras vitae arcu ligula. Curabitur velit augue, placerat vitae lectus ut, sollicitudin pellentesque eros. Cras quis faucibus est. Phasellus ultricies dolor venenatis sodales rhoncus. Mauris eu risus varius, commodo felis vitae, sollicitudin dui. Aliquam ut volutpat tortor. Etiam vitae ipsum sit amet odio auctor eleifend in a dui. Suspendisse condimentum laoreet massa, nec ullamcorper lorem fermentum a. Nam eu bibendum ipsum. Vivamus pharetra volutpat felis, vitae lacinia lorem molestie at."
                },
            }
        }
    }
    click(name){
        return ()=>{
            const obj = JSON.parse(JSON.stringify(this.state.videos))
            obj[name].current = obj[name].current == "breakdown" ? "main" : "breakdown"
            this.setState({videos: obj})
        }
    }
    render() {
        const x = []
        for(const key in this.state.videos){
            x.push(
                <Breakdown 
                    key={key}
                    current={this.state.videos[key].current} 
                    name={key} 
                    video={this.state.videos[key][this.state.videos[key].current]} 
                    click={this.click.bind(this)} 
                    title={this.state.videos[key].title}
                    description={this.state.videos[key].description}
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