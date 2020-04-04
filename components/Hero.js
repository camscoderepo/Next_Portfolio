import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    media: {
        height: 600,
        width: '100%',
        padding: '0px'
      }
})

function Hero() {
    const classes = useStyles();
    return (
    
            <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="dummyimage"
            />
 
    )
}

export default Hero;
