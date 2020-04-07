import React from 'react';
import { CardMedia, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    media: {
        height: '100vh',
        width: 'auto',
        padding: '10px',
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
