import React from 'react';
import classes from './GifCard.module.css';
import {Spring} from 'react-spring/renderprops';

const GifCard = (props1) =>{
    return(
        <Spring
        from={{ display: 'inline-block'}}
        to={{display: 'inline-block' }}
        >
            {props => (
                <div style={props} >
                <div className={classes.GifContainer} >
                <img width='250px' src={props1.sourceLink} alt='none' />
                </div>
            </div>
            )}
        </Spring>
    )
}
export default GifCard;