import React from 'react';
import classes from './PhotoCard.module.css';
import { Spring } from 'react-spring/renderprops'
const PhotoCard = (props1) => {
    return(

        <Spring
        from={{opacity:0, marginTop:'-500px', display: 'inline-block'}}
        to={{opacity:1,marginTop:'0',display: 'inline-block' }}
        >
            {props => (
                <div style={props} >
                <div className={classes.PhotoContainer} >
                <img src={props1.sourceLink} alt={props1.alt}/>
                </div>
            </div>
            )}
        </Spring>
    
    );
};


export default PhotoCard;