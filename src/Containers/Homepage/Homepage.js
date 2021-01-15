import React from 'react';
import classes from './Homepage.module.css';
import { Jumbotron } from 'react-bootstrap';

const Homepage = () =>{
    return(
            <div className='my-5' >
                <Jumbotron  className={classes.HomepageText}>
                    <h1>Welcome to the Photo and Video search app! </h1>
                   
                    <p>
                        You're on homepage which is unfortunately still under development.
                        There are a lot more features coming soon! 
                        Currently users can just search for desired photos and videos, so
                        please navigate to search photos and videos from the navigation bar.
                    </p>

                    


                </Jumbotron>

            </div>
        
    );
};

export default Homepage;