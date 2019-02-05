import React, { Component } from 'react';
import Breakdown from './Breakdown';

export default class BreakdownPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            urls: {
                "candle": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/candle/candle.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/candle/candle_breakdown.mov",
                    current: "breakdown",
                    title: "Candle",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sem. Morbi eu velit fermentum, tincidunt ligula sed, posuere ante. Sed sollicitudin a massa quis vehicula. Cras vitae arcu ligula. Curabitur velit augue, placerat vitae lectus ut, sollicitudin pellentesque eros. Cras quis faucibus est. Phasellus ultricies dolor venenatis sodales rhoncus. Mauris eu risus varius, commodo felis vitae, sollicitudin dui. Aliquam ut volutpat tortor. Etiam vitae ipsum sit amet odio auctor eleifend in a dui. Suspendisse condimentum laoreet massa, nec ullamcorper lorem fermentum a. Nam eu bibendum ipsum. Vivamus pharetra volutpat felis, vitae lacinia lorem molestie at."
                },
                "ship": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/shipbreakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/ship2.mov",
                    current: "breakdown",
                    title: "Ship",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sem. Morbi eu velit fermentum, tincidunt ligula sed, posuere ante. Sed sollicitudin a massa quis vehicula. Cras vitae arcu ligula. Curabitur velit augue, placerat vitae lectus ut, sollicitudin pellentesque eros. Cras quis faucibus est. Phasellus ultricies dolor venenatis sodales rhoncus. Mauris eu risus varius, commodo felis vitae, sollicitudin dui. Aliquam ut volutpat tortor. Etiam vitae ipsum sit amet odio auctor eleifend in a dui. Suspendisse condimentum laoreet massa, nec ullamcorper lorem fermentum a. Nam eu bibendum ipsum. Vivamus pharetra volutpat felis, vitae lacinia lorem molestie at."
                },
                "sword": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/sword/sword_breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/sword/sword.mov",
                    current: "breakdown",
                    title: "Sword",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sem. Morbi eu velit fermentum, tincidunt ligula sed, posuere ante. Sed sollicitudin a massa quis vehicula. Cras vitae arcu ligula. Curabitur velit augue, placerat vitae lectus ut, sollicitudin pellentesque eros. Cras quis faucibus est. Phasellus ultricies dolor venenatis sodales rhoncus. Mauris eu risus varius, commodo felis vitae, sollicitudin dui. Aliquam ut volutpat tortor. Etiam vitae ipsum sit amet odio auctor eleifend in a dui. Suspendisse condimentum laoreet massa, nec ullamcorper lorem fermentum a. Nam eu bibendum ipsum. Vivamus pharetra volutpat felis, vitae lacinia lorem molestie at."
                },
                "tornado": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado_breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado.mov",
                    current: "breakdown",
                    title: "Tornado",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sem. Morbi eu velit fermentum, tincidunt ligula sed, posuere ante. Sed sollicitudin a massa quis vehicula. Cras vitae arcu ligula. Curabitur velit augue, placerat vitae lectus ut, sollicitudin pellentesque eros. Cras quis faucibus est. Phasellus ultricies dolor venenatis sodales rhoncus. Mauris eu risus varius, commodo felis vitae, sollicitudin dui. Aliquam ut volutpat tortor. Etiam vitae ipsum sit amet odio auctor eleifend in a dui. Suspendisse condimentum laoreet massa, nec ullamcorper lorem fermentum a. Nam eu bibendum ipsum. Vivamus pharetra volutpat felis, vitae lacinia lorem molestie at."
                },
                "underwater": {
                    breakdown: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater_breakdown.mov",
                    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater.mov",
                    current: "breakdown",
                    title: "Underwater",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sem. Morbi eu velit fermentum, tincidunt ligula sed, posuere ante. Sed sollicitudin a massa quis vehicula. Cras vitae arcu ligula. Curabitur velit augue, placerat vitae lectus ut, sollicitudin pellentesque eros. Cras quis faucibus est. Phasellus ultricies dolor venenatis sodales rhoncus. Mauris eu risus varius, commodo felis vitae, sollicitudin dui. Aliquam ut volutpat tortor. Etiam vitae ipsum sit amet odio auctor eleifend in a dui. Suspendisse condimentum laoreet massa, nec ullamcorper lorem fermentum a. Nam eu bibendum ipsum. Vivamus pharetra volutpat felis, vitae lacinia lorem molestie at."
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