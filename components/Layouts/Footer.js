import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { css } from "@emotion/core";





const useStyles = makeStyles((theme ) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
      },
    footer: {
        padding: theme.spacing(3,2),
        marginTop: 'auto',
        height: '100px',
        backgroundImage: 'linear-gradient(to top, #accbee 10%, #1476f2 100%)',
        backgroundColor: 
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        animationName: 'wave',
        animationDuration: '0s',
        animationIterationCount: 'infinite',
        animationDelay: '0s',
        overflow: 'hidden',
    }
}));

export default function StickyFooter() {
    const classes = useStyles();
    const animation = css`
       animation: wave 15s infinite linear;
       @keyframes wave {
        
        from { transform: rotate(0deg);}
        from { transform: rotate(360deg);}
        } 
    `
    
    return (
        <div className={classes.root}>
            <footer css={animation} className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Sticky footer</Typography>
                </Container>
            </footer>
        </div>
    )
}