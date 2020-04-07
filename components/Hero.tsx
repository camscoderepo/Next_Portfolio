import React from 'react';
import { CardMedia, Grid, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        media: {
            height: '100vh',
            width: 'auto',
            padding: '10px',
          },
        title: {
    
        },
    }),
);

function Hero() {
    const classes = useStyles();
    return (
    <Grid>
    <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title="dummyimage"
    />
    </Grid>
    )
}

export default Hero;
