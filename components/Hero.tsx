import React from 'react';
import { Paper, Grid, CardMedia, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        media: {
            display: 'flex',
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            justifyContent: 'center',
            
           
          },
        title: {
            
            // color: 'white',
            // fontWeight: 'bold',
            // '@media (max-width: 400px)': {
            //     paddingLeft: '50px'
            // }
        },
        cardMedia: {
            height: 140,
            paddingTop: '56.25%',
        }
    }),
);

function Hero() {
    const classes = useStyles();
    return (
    <Paper className={classes.media}>
        <CardMedia 
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
        />
    </Paper>
    )
}

export default Hero;
