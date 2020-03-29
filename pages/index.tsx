import React, {useState, useEffect} from 'react';
import Navbar from '../components/Layouts/Navbar';
import Hero from '../components/Hero';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import Description from '../components/Description';
import { CssBaseline } from '@material-ui/core';
import Form from '../components/Form';
import Footer from '../components/Layouts/Footer'


const useStyles = makeStyles((theme: Theme ) => 
    createStyles({
        root: {
         
        }
    })
)


const Home: NextPage<{}> = () => (
    <>
        <CssBaseline />
        <Navbar />
        <Hero />
        {/* <Description /> */}
        <Form />
        <Footer />
    </>
);


Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };


  export default Home;