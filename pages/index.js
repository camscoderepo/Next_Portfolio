import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   
}))

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <Hero />
            <Paper elevation={3} />
        </div>
    );
}  

export default Home;