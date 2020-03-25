import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { NextPage } from 'next';


const Home: NextPage<{}> = () => (
    <><Navbar /><Hero /></>
);


Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };


  export default Home;