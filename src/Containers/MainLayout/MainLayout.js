import React from 'react';
import PhotoSearchPage from '../PhotoSearchPage/PhotoSearchPage';
import VideoSearchPage from '../VideoSearchPage/VideoSearchPage';
import {Route, NavLink, Switch} from 'react-router-dom';
import classes from './MainLayout.module.css';
import {Navbar, Nav} from 'react-bootstrap';


const MainLayout = () => {
    return(
        <div>
            
            <Navbar className="justify-content-center" bg="dark" variant="dark">                    
                    <Nav className={classes.NavigationBar}>
                        <Nav.Item ><Nav.Link as={NavLink} exact to='/'>Home</Nav.Link></Nav.Item>
                        <Nav.Item ><Nav.Link as={NavLink} to='/photos'>Photos</Nav.Link></Nav.Item>
                        <Nav.Item ><Nav.Link as={NavLink} to='/videos'>Videos</Nav.Link></Nav.Item>
                    </Nav>
            </Navbar>
            <Switch>
            <Route path='/' exact render={
                () => <div className={classes.HomepageText}>
                    Welcome to the Photo and Video search app! <br></br>
                    You're on homepage which is unfortunately still under development :( <br></br>
                    Please navigate to search photos and videos from the Navigation bar</div>} />

            <Route path='/photos' component={PhotoSearchPage} />
            <Route path='/videos' component={VideoSearchPage} />
            </Switch>

                
            
        </div>
    ) 
};


export default MainLayout;