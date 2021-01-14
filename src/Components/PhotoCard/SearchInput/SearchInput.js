import React from 'react';
import classes from './SearchInput.module.css';

const SearchInput = (props) =>{
    return(
        <div className={classes.SearchBarContainer}>
        <input 
        className={classes.SearchBar}
        onChange={props.onChangeHandler} 
        placeholder={props.placeholder} />
        <button 
        className={classes.SearchButton}
        onClick={props.onClickHandler}><i className="fa fa-search  "></i></button>
        </div>
    );

};


export default SearchInput;