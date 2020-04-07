import React from 'react';

import { CardMedia, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    media: {
        height: '80vh',
        width: '100%',
        padding: '10px',
        objectFit: 'cover'
      }
})

function Hero() {
    const classes = useStyles();
    return (
    <>
    <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title="dummyimage"
    />
    </>
    )
}

export default Hero;
