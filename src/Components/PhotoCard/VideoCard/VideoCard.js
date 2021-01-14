import React from 'react';
import {Spring} from 'react-spring/renderprops';
import classes from './VideoCard.module.css';
import HoverVideoPlayer from 'react-hover-video-player';

const VideoCard = (props1) => {
    return(
        <Spring
        from={{opacity:0,  display: 'inline-block'}}
        to={{opacity:1, display: 'inline-block' }}
        >
            {props => (
                <div style={props} >
                <div >
                    <HoverVideoPlayer 
                    className={classes.VideoContainer}
                    videoSrc={props1.sourceLink}
                    pausedOverlay={
                        <img src={props1.imgLink} alt=''/>
                      }
                    />
                </div>
            </div>
            )}
        </Spring>
    
    )
};

export default VideoCard;
