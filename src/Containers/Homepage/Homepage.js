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
                        Currently users can search for desired <strong>Photos, Videos and GIFs</strong> . So,
                        please navigate accordingly to the desired pages from the navigation bar.
                    </p>

                    


                </Jumbotron>

            </div>
        
    );
};

export default Homepage;