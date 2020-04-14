import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { css } from "@emotion/core";





const useStyles = makeStyles((theme ) => ({
    root: {
        width: '100%',
        position: 'absolute',
        
      },
    footer: {
        padding: theme.spacing(3,2),
        marginTop: 'auto',
        height: '100px',
        backgroundImage: 'linear-gradient(to top, #accbee 10%, #1476f2 100%)',
        backgroundColor: 
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    
        animationName: '$this',
        animationDuration: '15s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
    },
    
    '@keyframes this': {
       from : { transform: 'rotate(0deg)'},
       from : { transfrom: 'rotate(360deg)'}
    }
}));

export default function StickyFooter() {
    const classes = useStyles();
 
    
    return (
        <div className={classes.root}>
            <div className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Sticky footer</Typography>
                </Container>
            </div>
        </div>
    )
}