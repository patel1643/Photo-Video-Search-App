import axios from 'axios';
import React, { Component } from 'react';
import SearchInput from '../../Components/PhotoCard/SearchInput/SearchInput';
import VideoCard from '../../Components/PhotoCard/VideoCard/VideoCard';
import classes from './VideoSearchPage.module.css';
import {Spinner} from 'react-bootstrap';


class VideoSearchPage extends Component{
    state = {
        videos: [],
        query:'',
        loaded: false,
        loading: false,
        errorOccured: false
    }


    searchExecuteVideos = () =>{
        this.setState({loading: true});
        let url = "https://api.pexels.com/videos/search?query="+this.state.query;  
        const access_token = '563492ad6f91700001000001c5f0fdbccfbc4f36bde43e2f95914b76';  
        axios.get(url, {  
            headers: {  
                'Authorization': `${access_token}`  
            }  
        }).then(data => { 
            this.setState({videos: data.data.videos, loading: false, loaded:true,errorOccured:false});
        }).catch(err => {
            this.setState({errorOccured:true, loaded:false,loading:false})
        })
    }

    enterPressHandler = (e) =>{
        if (e.key === "Enter"){ 
            e.preventDefault();
            this.searchExecuteVideos();
            document.activeElement.blur();
        }   
    }

    onChangeSearchHandler = (event) => {
        this.setState({query:event.target.value+''});
    };

    render() {
        let videos =<div className={classes.GeneralDivs} >Please search something in the search box!</div>
        
        let videoLink = ''
        let loadingDiv = null;
        if(this.state.loading){
            loadingDiv = <Spinner animation="border"/>
        }

        if(this.state.videos.length !== 0){
          let  videosAll = this.state.videos.map( video => {
                video.video_files.map( link => {
                   if (link.height === 720){
                       videoLink = link.link 
                       
                   } 
                   return null
                })
                return(
                    <VideoCard 
                    key={video.id}
                    sourceLink={videoLink}
                    imgLink={video.image} />

                )
            });
            videos = <div><p className={[classes.GeneralDivs , classes.DesktopVersion].join(' ')}>Tip: Please hover on/off videos to play/pause :)</p>
            <p className={[classes.GeneralDivs , classes.MobileVersion].join(' ')}>Tip: Please gently tap on videos to play :)</p> <br></br>{videosAll}
            </div>
        }

        //Checks if the query was valid and returns the error
        if((this.state.videos.length===0 && this.state.errorOccured) || (this.state.videos.length===0 && this.state.loaded)){
            videos = <div className={classes.GeneralDivs}> Sorry your search doesn't match with anything on our database... <br></br>
            Try something else... </div>
        }
        
        return(
            <div className={classes.ContainerClass}>
                <SearchInput
                    onChangeHandler={this.onChangeSearchHandler}
                    onClickHandler={this.searchExecuteVideos}
                    onEnterPress={this.enterPressHandler}
                    placeholder={'Search videos here..'} />
                <div style={{textAlign:'center'}}>{loadingDiv}</div>
                <div style={{textAlign:'center'}}>{videos}</div>
            </div>
            
        );
    }
}

export default VideoSearchPage;