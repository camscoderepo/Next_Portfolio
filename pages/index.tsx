import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { NextPage } from 'next';
import ProductHowItWorks from '../components/HowItWorks'
import ProductValues from '../components/Values'

const Home: NextPage<{}> = () => (
    <><Navbar /><Hero /><ProductHowItWorks /><ProductValues /></>
);


Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };


  export default Home;