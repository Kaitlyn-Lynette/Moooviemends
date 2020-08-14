import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles (() => ({
    title: {
        fontFamily: 'Luckiest Guy',
        fontSize: '3em',
        display: 'flex',
        paddingTop: '40px',
        position: 'absolute',
        left: '20px'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <Typography variant='h1' className={classes.title} {...props}>Moooviemends</Typography>
    )
}


export default Header;