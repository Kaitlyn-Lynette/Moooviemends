import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {useTheme} from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles ((theme) => ({
    mediaStyle: {
        paddingTop: '150%',
    }
}))


function MovieCard (props) {
    const classes = useStyles ();
    const theme = useTheme ();
    
    return (
    <Card 
    style={cardStyle}>
        <CardMedia
            className={classes.mediaStyle}
            image={props.src}
        />
        <CardContent style={contentStyle}>
        <h4>Director: {props.director}</h4>
        <h4>Genre: {props.genre}</h4>
        <h4>Released: {props.released}</h4>
        </CardContent>
    </Card>
    )
}

const cardStyle = {
    position: 'absolute',
    left: '30%',
    right: '30%',
    top: '363.46px',
    margin: '0px auto',
    backgroundColor: "#FFFF00",
    fontFamily: "Roboto",
    width: "50%",
}

// const mediaStyle = {
//     paddingTop: '150%',
//     height: "250"
// }

const contentStyle = {
    // width: '50%',
    height: '100%',
    // margin: '30px'
}


export default MovieCard;



