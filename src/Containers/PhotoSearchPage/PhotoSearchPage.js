import React, { Component } from 'react';
import PhotoCard from '../../Components/PhotoCard/PhotoCard/PhotoCard';
import classes from './PhotoSearchPage.module.css';
import axios from 'axios';
import SearchInput from '../../Components/PhotoCard/SearchInput/SearchInput';
import { Spinner } from 'react-bootstrap';
import {BottomScrollListener} from 'react-bottom-scroll-listener';


class PhotoSearchPage extends Component{

    state = {
        images:[],
        loaded: false,
        queryString:'',
        loading:false,
        errorOccured:false,
        nextPageLinks:null,
        linksVisited:0,
        newImagesLoaded: false
    }

    //Handles the query that is being entered in the input box
    changeHandler = (event) => {
        this.setState({queryString: ''+event.target.value});
    }
    

    // Handles the first API call made by the app
    searchExecuteHandler = () => { 
        //removes all the data from previous search and gives user a new start without reloading... 
        this.setState({loading: true, linksVisited:0, nextPageLinks:null});
        let query = this.state.queryString;
        let url = "https://api.pexels.com/v1/search?query="+ query +"&orientation=landscape";  
        const access_token = '563492ad6f91700001000001c5f0fdbccfbc4f36bde43e2f95914b76';  
        axios.get(url, {  
            headers: {  
                'Authorization': `${access_token}`  
            }  
        }).then(data => {
            let nextLink = data.data.next_page;
            let nextLinkList = [];
            nextLinkList.push(nextLink);
            this.setState(
                        {
                        images: data.data.photos, 
                        loaded:true, 
                        loading:false, 
                        errorOccured:false, 
                        nextPageLinks:nextLinkList
                    });
        }).catch(err => {
            this.setState({loading:false, errorOccured:true});
        })
    };


    //Handles the next page calls or kind of like an infinite scroll function
    nextPageHandler = () => {
        this.setState({loading: true});
        const access_token = '563492ad6f91700001000001c5f0fdbccfbc4f36bde43e2f95914b76';  
            axios.get(this.state.nextPageLinks[this.state.linksVisited], {  
            headers: {  
                'Authorization': `${access_token}`  
            }  
        }).then(data => {
            let oldImages = this.state.images;

            let allLinks = this.state.nextPageLinks;

            let nextLink = ''+data.data.next_page;
            allLinks.push(nextLink);

            let newImages = data.data.photos;
            newImages.map(image => {
                oldImages.push(image);
                return null;
            });
            
            let linkCounter = this.state.linksVisited+1;

            // console.log(oldImages, linkCounter, this.state.nextPageLinks);
            this.setState({images: oldImages,newImagesLoaded:true, loading:false, 
                errorOccured:false, linksVisited:linkCounter, nextPageLinks:allLinks});
        }).catch(err => {
            this.setState({loading:false, errorOccured:true});
        })
    }  
    

    enterPressHandler = (e) =>{
        if (e.key === "Enter"){ 
            e.preventDefault();
            this.searchExecuteHandler();
            document.activeElement.blur();
        }   
    }


    render(){
        let loadingDiv = null;
            if(this.state.loading){
                // <div className={classes.GeneralDivs} >Loading....</div>
                loadingDiv = <div> <br></br> <Spinner animation="border" /></div>
            }
            
            let results = <div className={classes.GeneralDivs} >Please search something in the search box!</div>
            
            if (this.state.loaded || this.state.newImagesLoaded
                ){
                let counter = 0
                results = this.state.images.map(image => {
                    // creates a unique id for each element
                    counter +=1;
                    let id = image.id + "_" + counter;
                    return(
                    <PhotoCard key={id} sourceLink = {image.src.medium} alt={image.photographer}/>    
                    )

            
                })
            }

            //Checks if the query was valid and returns the error
            if((this.state.images.length===0 && this.state.errorOccured) || (this.state.images.length===0 && this.state.loaded)){
                results = <div className={classes.GeneralDivs}> Sorry your search doesn't match with anything on our database... <br></br>
                Try something else... </div>
            }
            
        return (
            
            <div onScroll={this.infiniteScrollHandler} className={classes.ContainerClass}>
                <SearchInput 
                onChangeHandler={this.changeHandler}  
                onClickHandler={this.searchExecuteHandler}
                placeholder={'Search photos here...'}
                onEnterPress={this.enterPressHandler}/>
                <br></br>
                <div  style={{textAlign:'center'}}>{results}</div>
                <div style={{textAlign:'center'}}>{loadingDiv}
                {/* Handles the scroll action and triggers a function when user scrolls at the end of page */}
                <BottomScrollListener onBottom={this.nextPageHandler} />
                </div>
                
            </div>
        )
    }

}

export default PhotoSearchPage;