import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    media: {
        height: 600,
        width: '100%'
      }
})

function Hero() {
    const classes = useStyles();
    return (
        <Paper>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image="http://baconmockup.com/6000/1550"
                title="dummyimage"
            />
        </CardActionArea>
        </Paper>
    )
}

export default Hero;
