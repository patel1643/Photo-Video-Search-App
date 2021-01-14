import axios from 'axios';
import React, { Component } from 'react';
import SearchInput from '../../Components/PhotoCard/SearchInput/SearchInput';
import VideoCard from '../../Components/PhotoCard/VideoCard/VideoCard';
import classes from './VideoSearchPage.module.css';
import Spinner from '../../UI Elements/Spinner/Spinner';


class VideoSearchPage extends Component{
    state = {
        videos: [],
        query:'',
        loaded: false,
        loading: false
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
            console.log(data);
            this.setState({videos: data.data.videos, loading: false});
            console.log(this.state.videos);
        }).catch(err => {
            console.log(err)
        })
    }

    onChangeSearchHandler = (event) => {
        this.setState({query:event.target.value+''});
    };

    render() {
        let videos = <div className={classes.GeneralDivs} >Please search something in the search box!</div>
        let videoLink = ''
        let loadingDiv = null;
        if(this.state.loading){
            loadingDiv = <Spinner />
        }

        if(this.state.videos.length !== 0){
            videos = this.state.videos.map( video => {
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
            })
        }
        
        return(
            <div>
                <SearchInput
                    onChangeHandler={this.onChangeSearchHandler}
                    onClickHandler={this.searchExecuteVideos}
                    placeholder={'Search videos here..'} />
                <div style={{textAlign:'center'}}>{loadingDiv}</div>
                <div style={{textAlign:'center'}}>{videos}</div>
            </div>
            
        );
    }
}

export default VideoSearchPage;