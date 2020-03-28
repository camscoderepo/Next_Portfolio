import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import Description from '../components/Description';
import Container from '@material-ui/core/Container';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme ) => 
    createStyles({
        root: {
         
        }
    })
)


const Home: NextPage<{}> = () => (
    <Container disableGutters maxWidth="xl">
        <CssBaseline />
        <Navbar />
        <Hero />
        <Description />
    </Container>
);


Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };


  export default Home;