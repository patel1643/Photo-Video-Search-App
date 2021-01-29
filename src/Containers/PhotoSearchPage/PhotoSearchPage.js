import React, { Component } from 'react';
import PhotoCard from '../../Components/PhotoCard/PhotoCard/PhotoCard';
import classes from './PhotoSearchPage.module.css';
import axios from 'axios';
import SearchInput from '../../Components/PhotoCard/SearchInput/SearchInput';
import { Spinner } from 'react-bootstrap';


class PhotoSearchPage extends Component{

    state = {
        images:[],
        loaded: false,
        queryString:'',
        loading:false,
        errorOccured:false
    }


    changeHandler = (event) => {
        
        this.setState({queryString: ''+event.target.value});
    }
    
    searchExecuteHandler = () => {  
        this.setState({loading: true});
        let query = this.state.queryString;
        let url = "https://api.pexels.com/v1/search?query="+ query +"&orientation=landscape";  
        const access_token = '563492ad6f91700001000001c5f0fdbccfbc4f36bde43e2f95914b76';  
        axios.get(url, {  
            headers: {  
                'Authorization': `${access_token}`  
            }  
        }).then(data => {
            this.setState({images: data.data.photos,loaded:true, loading:false, errorOccured:false});
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
            
            if (this.state.loaded){
                results = this.state.images.map(image => {
                    return(
                    <PhotoCard key={image.id} sourceLink = {image.src.medium} alt={image.photographer}/>    
                    )
            
                })
            }

            //Checks if the query was valid and returns the error
            if((this.state.images.length===0 && this.state.errorOccured) || (this.state.images.length===0 && this.state.loaded)){
                results = <div className={classes.GeneralDivs}> Sorry your search doesn't match with anything on our database... <br></br>
                Try something else... </div>
            }
            
        return (
            
            <div className={classes.ContainerClass} >
                <SearchInput 
                onChangeHandler={this.changeHandler}  
                onClickHandler={this.searchExecuteHandler}
                placeholder={'Search photos here...'}
                onEnterPress={this.enterPressHandler}/>
                <br></br>
                <div style={{textAlign:'center'}}>{loadingDiv}</div>
                <div style={{textAlign:'center'}}>{results}</div>
            </div>
        )
    }

}

export default PhotoSearchPage;