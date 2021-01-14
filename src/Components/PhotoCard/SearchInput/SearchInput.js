import React from 'react';
import classes from './SearchInput.module.css';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchInput = (props) =>{
    return(
        <div>
        <Form inline className="justify-content-center">
            <FormControl 
            type="text" 
            onChange={props.onChangeHandler}  
            placeholder={props.placeholder} className="mr-sm-3 my-5" />
            <Button onClick={props.onClickHandler} variant="outline-success">Search</Button>
        </Form>
        </div>
    );

};


export default SearchInput;