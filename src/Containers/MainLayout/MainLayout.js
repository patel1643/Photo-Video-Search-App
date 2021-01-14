import React from 'react';
import PhotoSearchPage from '../PhotoSearchPage/PhotoSearchPage';
import VideoSearchPage from '../VideoSearchPage/VideoSearchPage';
import {Route, Link} from 'react-router-dom';
import classes from './MainLayout.module.css';
const MainLayout = () => {
    return(
        <div className={classes.Navbar} >
            <nav>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/photos'> Photos </Link></li>
                    <li><Link to='/videos'> Videos </Link></li>
                    </ul>
                    </nav>
                    <Route path='/' exact render={() => <div className={classes.HomepageText}>Welcome to the Photo and Video search app! <br></br>
                                                        You're on homepage which is unfortunately still under development :( <br></br>
                                                        Please navigate to search photos and videos from the Navigation bar</div>} />
                    <Route path='/photos' component={PhotoSearchPage} />
                    <Route path='/videos' component={VideoSearchPage} />

                
            
        </div>
    ) 
};


export default MainLayout;