import React from 'react';
import Image from '../components/Image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextInfo from '../components/TextInfo';
import { Grid, Typography, Paper }from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 0,
            paddingLeft: 100,
            [theme.breakpoints.down(1280)]: {
                paddingLeft: 0,
            },
            paddingTop: 10,
        },
    })
);

export default function Description() {
    const classes = useStyles();
    return (
    <> 
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        About
    </Typography> 
    <Grid container className={classes.root}>
        <Grid item xs={false} sm={4} md={5}>
            <Image />
        </Grid> 
        <Grid item xs={12} sm={8} md={7}> 
            <TextInfo />
        </Grid>
    </Grid>
    </>
    )
}