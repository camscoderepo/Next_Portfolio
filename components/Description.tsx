import React from 'react';
import Image from '../components/Image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextInfo from '../components/TextInfo';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: 100
        }
    })
);

export default function Description() {
    const classes = useStyles();
    return (
    <Grid container spacing={3}>
        <Grid className={classes.root} item xs={6}> 
            <Image />
        </Grid>
        <Grid item xs={6}> 
            <TextInfo />
        </Grid>
    </Grid>
    )
}