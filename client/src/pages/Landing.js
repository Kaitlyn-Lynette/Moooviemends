import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import {Grid, Typography } from '@material-ui/core';
import logo from '../assets/logo.png';

export default function Landing () {

    return (
        <Grid 
        container
        style={container}
        justify='center'
        alignItems='center'
        direction='column'
        >
            <Grid item>
                <img style={logoStyle} src={logo} alt='logo' />
            </Grid>
            <Grid item>
                <Header></Header>
            </Grid>
            {/* <Grid item>
                <Typography style={slogan}>Make your moooviemends to your friends</Typography>
            </Grid> */}
        </Grid>)
}

const logoStyle = {
    height: '50%',
    width: '100%',
    position: 'fixed',
    top: '20px',
    left: '0px'
}

const slogan = {
    position: 'absolute',
    width: '297px',
    height: '61px',
    left: '30%',
    right: '30%',
    top: '402px',
    fontFamily: 'Crafty Girls',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '52px',
    textAlign: 'center',
    color: '#000000'

}


const container = {
    backgroundColor: '#FF5200',
    width: '100vw',
    height: '100vh',
    flewgrow: '1',
    // zIndex: '-1',
    // position: 'relative'
  };