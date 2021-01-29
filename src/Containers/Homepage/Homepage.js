import React from 'react';
import classes from './Homepage.module.css';
import { Jumbotron } from 'react-bootstrap';
import Particles from 'react-particles-js';



const Homepage = () =>{
    return(
            <div style={{  display: "flex",
                justifyContent: "center", verticalAlign:"center"}} className='my-5'>
                
                <Jumbotron  className={classes.HomepageText}>
                    
                    <h1>Welcome to the Photo and Video search app! </h1>
                
                    <p>
                        You're on homepage which is unfortunately still under development.
                        There are a lot more features coming soon! 
                        Currently users can search for desired <strong>Photos, Videos and GIFs</strong> . So,
                        please navigate accordingly to the desired pages from the navigation bar.
                    </p>
                </Jumbotron>
                <p className={classes.Footnote} > <strong> Tip: </strong>Tap anywhere on the screen to add more background particles <b>☺️</b></p>
                <Particles 
                canvasClassName={classes.particles}
        params={{
            "particles": {
              "number": {
                "value": 40,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
              },
              "size": {
                "value": 1.5
              },
              "opacity": {
                "value": .6,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 0,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              size: {
                "value": 15.5,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 0,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 100,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                  "enable": false,
                  "rotateX": 1200,
                  "rotateY": 1200
                }
              }
            },
          
          
          
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": false
              },
              "modes": {
                "grab": {
                  "distance": 200,
                  "line_linked": {
                    "opacity": 0.5
                  }
                },
                "bubble": {
                  "distance": 300,
                  "size": 20,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 140,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 10
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": false
          }} 
      />          
             </div>
    );
};

export default Homepage;