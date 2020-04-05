import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      paddingTop: '100px',
      paddingLeft: '10px',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundPosition: 'center',
      
    },
    paper: {
      margin: theme.spacing(4, 6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    paragraph: {
      fontSize: '20px'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function AboutUs() {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} square="true">
              <div className={classes.paper}>
                  {/* <Avatar className={classes.avatar}>
          
                  </Avatar> */}
                  <Typography component="h1" variant="h5">
                      About Us
                  </Typography>
                  <div style={{overflow: 'hidden', textOveflow: 'ellipsis', width: '50%'}}>
                  <p className={classes.paragraph}>
                     This is a paragraph to describe what I am doing and want to accomplish. 
                     I don't know what else to put here to be honest. 
                     I hope everyone out there is having a good time.
                     This is a paragraph to describe what I am doing and want to accomplish. 
                     I don't know what else to put here to be honest. 
                     I hope everyone out there is having a good time.
                     This is a paragraph to describe what I am doing and want to accomplish. 
                     I don't know what else to put here to be honest. 
                     I hope everyone out there is having a good time.
                     This is a paragraph to describe what I am doing and want to accomplish. 
                     I don't know what else to put here to be honest. 
                     I hope everyone out there is having a good time.
                     This is a paragraph to describe what I am doing and want to accomplish. 
                     I don't know what else to put here to be honest. 
                     I hope everyone out there is having a good time.
                  </p>
                  </div>
                  
                  <div>
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                      >
                      Learn more
                      </Button>
                  </div>
              </div>
            </Grid>
        </Grid>
    )
}