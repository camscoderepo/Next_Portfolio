import React from 'react';
import { Card, Grid, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        media: {
            display: 'flex',
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            justifyContent: 'center',
            height: '100vh',
          },
        title: {
    
        },
    }),
);

function Hero() {
    const classes = useStyles();
    return (
    <Grid>
    <Card className={classes.media}>
    <h1>Simple and Smart Solutions</h1>
  
    </Card>
    </Grid>
    )
}

export default Hero;
