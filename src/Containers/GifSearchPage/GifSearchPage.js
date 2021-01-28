import React, { Component } from 'react';
import GifCard from '../../Components/GifCard/GifCard';
import classes from './GifSearchPage.module.css';
import axios from 'axios';
import SearchInput from '../../Components/PhotoCard/SearchInput/SearchInput';
import { Spinner } from 'react-bootstrap';


class GifSearchPage extends Component{

    state = {
        gifs:[],
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
        let url = "https://api.giphy.com/v1/gifs/search?q="+query+"&api_key=ynyGkvd0uja0uhacytpqwpoE0WbV7lfw";
        axios.get(url).then(data => {
            console.log(data.data.data);
            this.setState({gifs: data.data.data, loading:false, loaded:true})  
        }).catch(err => {
            console.log(err);
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
                <div className={classes.GeneralDivs} >Loading....</div>
                loadingDiv = <div> <br></br> <Spinner animation="border" /></div>
            }
            
            let results = <div className={classes.GeneralDivs} >Please search something in the search box!</div>
            
            if (this.state.loaded){
                results = this.state.gifs.map(gif => {
                    return(
                    <GifCard key={gif.id} sourceLink={gif.images.downsized_medium.url}/>
                    )
            
                })
            }

           //Checks if the query was valid and returns the error
            if((this.state.gifs.length===0 && this.state.errorOccured) || (this.state.gifs.length===0 && this.state.loaded)){
                results = <div className={classes.GeneralDivs}> Sorry your search doesn't match with anything on our database... <br></br>
                Try something else... </div>
            }
            
        return(
            
            <div className={classes.ContainerClass}>
                <SearchInput 
                onChangeHandler={this.changeHandler}  
                onClickHandler={this.searchExecuteHandler}
                placeholder={'Search GIFs here...'}
                onEnterPress={this.enterPressHandler}/>
                <br></br>
                <div style={{textAlign:'center'}}>{loadingDiv}</div>
                <div style={{textAlign:'center'}}>{results}</div> 
            </div>
        );
    };

};

export default GifSearchPage;