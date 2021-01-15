import React from 'react';
import PhotoSearchPage from '../PhotoSearchPage/PhotoSearchPage';
import VideoSearchPage from '../VideoSearchPage/VideoSearchPage';
import Homepage from '../Homepage/Homepage';
import {Route, NavLink, Switch} from 'react-router-dom';
import classes from './MainLayout.module.css';
import {Navbar, Nav} from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';


const MainLayout = () => {
    return(
        <div>
            
            <Navbar className="justify-content-center fixed-top" bg="dark" variant="dark">                    
                    <Nav className={classes.NavigationBar}>
                        <Nav.Item ><Nav.Link as={NavLink} exact to='/Photo-Video-Search-App/'>Home</Nav.Link></Nav.Item>
                        <Nav.Item ><Nav.Link as={NavLink} to='/Photo-Video-Search-App/photos'>Photos</Nav.Link></Nav.Item>
                        <Nav.Item ><Nav.Link as={NavLink} to='/Photo-Video-Search-App/videos'>Videos</Nav.Link></Nav.Item>
                    </Nav>
            </Navbar>
            <Switch>
            <Route path='/Photo-Video-Search-App/' exact component={Homepage} />
            <Route path='/Photo-Video-Search-App/photos' component={PhotoSearchPage} />
            <Route path='/Photo-Video-Search-App/videos' component={VideoSearchPage} />
            </Switch>
            <Footer/>

                
            
        </div>
    ) 
};


export default MainLayout;