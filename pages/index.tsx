import React, {useState, useEffect} from 'react';
import Navbar from '../components/Layouts/Navbar';
import Hero from '../components/Hero';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import { CssBaseline } from '@material-ui/core';
import AboutUs from '../components/AboutUs';
import ProjectAlbum from '../components/ProjectAlbum';
import Form from '../components/Form';


const useStyles = makeStyles((theme: Theme ) => 
    createStyles({
        root: {
         
        }
    })
)


const Home: NextPage<{}> = () => (
    <>
        {/* <Navbar /> */}
        <Hero />
        <AboutUs />
        <ProjectAlbum />
        <Form />
    </>
);


Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };


  export default Home;