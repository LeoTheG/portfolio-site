import React from 'react';
import "video-react/dist/video-react.css"; // import css

const Breakdown = ({videoSrcBreakdown, videoSrcMain, isIFrame, title, description, isBreakdown, onClickView}) => {
	const videoSrc = isBreakdown ? videoSrcBreakdown : videoSrcMain

	const Video = isIFrame ?
				<iframe width="645px" title="Disintegration" style={{width: '100%'}} src={videoSrc} height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
	: <video controls src={videoSrc} style={{width: 645}} />

	return (
		<div style={{width: "100%", display: 'flex', justifyContent: 'center', marginBottom: 20, flexDirection: 'column', alignItems: 'center'}}>
		{Video}
		<div style={{width: 645, color: 'var(--textPrimary)', textAlign: 'center'}}>
		<div style={{fontSize: 24}}>{title}</div>
		<div >{description}</div>
		<div onClick={onClickView} style={{marginTop: 10, textDecoration:"underline", cursor: 'pointer'}}>View {isBreakdown ? "Final Pass" : "Breakdown"}</div>
		</div>
		<hr style={{width: 800, borderTop: '1px solid white'}}/>
		</div>
	)
}

export default Breakdown

// export default class Breakdown extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             showMain: false,
//         }
//     }
//     render() {
//         let x = []
//         let y = []
//         // prevent arrows for single videos
//         if (!(this.props.title === 'Cloudship' || this.props.title === 'Gears' || this.props.title === 'Ship')) {

//             if (this.props.current === "main")
//                 x = (
//                     <p style={styles.watch} onClick={this.props.click(this.props.name)}>Watch the breakdown</p>
//                 )
//             else
//                 y = (
//                     <p style={styles.watch} onClick={this.props.click(this.props.name)}>Watch the final composition</p>
//                 )
//         }
//         return (
//             <Container>

//             <Div>
//                 <Video>
//                     <ActualVideo key={this.props.video} style={styles.video}  controls type="video/mov">
//                         <source src={this.props.video} />
//                     </ActualVideo>
//                 </Video>
                
//                 <TitleDescriptionBlock>
//                     <Title>{this.props.title}</Title>
//                     <Description>{this.props.description}</Description>
//                     {x}
//                     {y}
//                 </TitleDescriptionBlock>
//             </Div>
//             <Hr></Hr>
//             </Container>
//         );
//     }
// }