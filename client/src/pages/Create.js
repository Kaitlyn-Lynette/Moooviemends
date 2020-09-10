import React, {useState} from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import {Grid, Typography, Input} from '@material-ui/core';
import logo from '../assets/logo.png';
import API from "../utils/API";

export default function Create () {
  
    const [playlist, setPlaylist] = useState({title: "", description:""});

    const handleCreatePlaylist = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setPlaylist(prevState => ({
            ...prevState,
            [name]: value
        }));
        API.createPlaylist(playlist)
            .then((res)=> {
                console.log("I'm listening")
            })
            .catch((err) => {
                console.log(err);
            });
        console.log('this is the playlist object', playlist)
        };
  
    return (
        <Grid 
        container
        style={container}
        justify='center'
        alignItems='center'
        direction='column'
        >
        <Grid item xs={11} lg={10}>
            <img style={logoStyle} src={logo} alt='logo' />
        </Grid>
        <Grid item xs={11} lg={10}>
            <Typography style={actionStyle}>Playlist Title</Typography>
            <Input 
            value={playlist.title}
            style={createBoxStyle}
            name="title"
            onChange={handleCreatePlaylist}
            type="text"
            placeholder="Cartoon movies"
            />
        </Grid>
        <Grid item xs={11} lg={10}>
            <Typography style={descStyle}>Description</Typography> 
            <Input 
            value={playlist.description}
            style={descBoxStyle}
            name="description"
            onChange={handleCreatePlaylist}
            type="text"
            placeholder="Love me some good cartoon movies"
            id="outlined-multiline-static"
            multiline
            rows={4}
            variant="filled"
            />
        </Grid>
        <Grid item xs={11} lg={10}>
            <Buttons 
            style={btnStyle} 
            onClick={handleCreatePlaylist}
            >
                <Typography style={btnFontStyle}>Create</Typography>
            </Buttons>
        </Grid>
        <Grid item xs={11} lg={10}>
            <Header></Header>
        </Grid>
        </Grid>
    )
}

const logoStyle = {
    height: '334px',
    width: '367px',
    left: '30%',
    right: '30%',
    position: 'absolute',
    textAlign: 'center'
}

const actionStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    width: '274px',
    height: '24px',
    left: '12px',
    top: '174px'
}

const descStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    position: 'absolute',
    width: '248px',
    height: '31px',
    left: '12px',
    top: '273px'
}

const createBoxStyle = {
    position: 'absolute',
    width: '312px',
    height: '37px',
    left: '23px',
    top: '206px',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}


const descBoxStyle = {
    position: 'absolute',
    width: '312px',
    height: '103px',
    left: '23px',
    top: '304px',
    background: '#EEEEEE',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

const btnStyle = {
    position: 'absolute',
    width: '118px',
    height: '32px',
    left: '26px',
    top: '430px',
    background: '#BA0FF7',
    borderRadius: '18px',
}

const btnFontStyle = {
    fontFamily: 'Luckiest Guy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '24px'
}

const container = {
    backgroundColor: '#FF5200',
    width: '150vw',
    height: '100vh',
    flewgrow: '1',
    // height: '100%',
  };



