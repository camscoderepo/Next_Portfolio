import React from 'react';
import Image from '../components/Image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextInfo from '../components/TextInfo';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 0,
            paddingLeft: 400,
            [theme.breakpoints.down(1280)]: {
                paddingLeft: 0
            },
            paddingTop: 10,
        }
    })
);

export default function Description() {
    const classes = useStyles();
    return (
    <> 
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        About Us
    </Typography> 
    <Grid container className={classes.root}>
        <Grid item xs={6}> 
            <Image />
        </Grid>
        <Grid item xs={6}> 
            <TextInfo />
        </Grid>
    </Grid>
    </>
    )
}