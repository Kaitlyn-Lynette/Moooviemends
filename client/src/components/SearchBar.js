import React, {Component} from 'react'
import { InputBase, Button, Grid} from '@material-ui/core';


const SearchBar = (props) => {
    return (
        <Grid>
            <InputBase
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            placeholder="Search for a Movie"
            style={inputStyle}
            id="search"
            />
            <br />
            <Button style={btnStyle} onClick={props.handleFormSubmit} {...props}> Search </Button>
        </Grid>
    )
}

const inputStyle = {
    position: 'absolute',
    width: '85%',
    height: '6.8%',
    left: '8.2%',
    right: '6.3%',
    top: '30%',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'borderBox',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginLeft: 'theme.spacing(1)',
    flex: 1,
    justifyContent: 'center',
};

const btnStyle = {
    position: 'absolute',
    width: '44.1%',
    height: '5.4%',
    left: '8.2%',
    right: '47.1%',
    top: '39.8%',
    bottom: '15.9%',
    background: '#BA0FF7',
    borderRadius: '18px',
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px'
}

export default SearchBar;