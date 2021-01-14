import React from 'react';
import classes from './Footer.module.css';
import brand from '../../Assets/brand-no-bg.png';
import reactstrap from '../../Assets/react-bootstrap.svg';
const Footer = () =>{
    return(
        <footer  className='fixed-bottom'>
            <div className={classes.FooterText} >
                <p>
                    Made by 
                        <a href='https://parthpatel.tech/'><img width='35' src={brand} alt='Parth Patel'/></a> 
                    with 
                        <a href='https://react-bootstrap.netlify.app/'>
                    <img style={{marginLeft:'10px'}} width='20' src={reactstrap} alt='React-Bootstrap'/>
                        </a>
                </p>
            </div>
        </footer>
        
    );
};

export default Footer;