import React from 'react';
import { Paper, Grid, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        media: {
            display: 'flex',
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            justifyContent: 'center',
            
           
          },
        title: {
            paddingTop: '400px',
            color: 'white',
            fontWeight: 'bold',
            '@media (max-width: 400px)': {
                paddingLeft: '50px'
            }
        },
    }),
);

function Hero() {
    const classes = useStyles();
    return (
   
    <Paper className={classes.media}>
        <div>
            <h1 className={classes.title}>Simple and Smart Solutions</h1>
        </div>
    </Paper>
    
    )
}

export default Hero;
