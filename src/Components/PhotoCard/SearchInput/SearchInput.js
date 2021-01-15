import React from 'react';
import classes from './SearchInput.module.css';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchInput = (props) =>{
    return(
        <div>
        <Form inline className="justify-content-center mt-5 py-5">
            <FormControl 
            type="text" 
            onChange={props.onChangeHandler}  
            placeholder={props.placeholder} className="mr-sm-3" onKeyDown={props.onEnterPress}/>
            <Button className={classes.ButtonSpacing}  onClick={props.onClickHandler} variant="outline-success">Search</Button>
        </Form>
        </div>
    );

};


export default SearchInput;