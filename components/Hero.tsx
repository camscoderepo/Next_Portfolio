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
           // backgroundAttachment: 'fixed',
            justifyContent: 'center',
            height: '80vh',
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
    <Grid>
    <Card className={classes.media}>
        <div>
            <h1 className={classes.title}>Simple and Smart Solutions</h1>
        </div>
    </Card>
    </Grid>
    )
}

export default Hero;
