import React from 'react';
import Image from '../components/Image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextInfo from '../components/TextInfo';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: 400,
            [theme.breakpoints.down(1200)]: {
                paddingLeft: 0
            },
            paddingTop: 10,
        }
    })
);

export default function Description() {
    const classes = useStyles();
    return (  
    <Grid className={classes.root}  spacing={3}>
        <Grid item xs={6}> 
            <Image />
        </Grid>
        <Grid item xs={6}> 
            <TextInfo />
        </Grid>
    </Grid>
    )
}