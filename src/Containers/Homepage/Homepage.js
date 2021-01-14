import React from 'react';
import classes from './Homepage.module.css';
import { Jumbotron, Container } from 'react-bootstrap';

const Homepage = () =>{
    return(
            <div className='my-5' >
                <Jumbotron  className={classes.HomepageText}>
                    <h1>Welcome to the Photo and Video search app! </h1>
                   
                    <p>
                        You're on homepage which is unfortunately still under development.
                        Please navigate to search photos and videos from the Navigation bar
                    </p>

                    


                </Jumbotron>

            </div>
        
    );
};

export default Homepage;