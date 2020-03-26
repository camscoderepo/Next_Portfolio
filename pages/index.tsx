import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { NextPage } from 'next';
import Image from '../components/Image'
import TextInfo from '../components/TextInfo'

const Home: NextPage<{}> = () => (
    <><Navbar /><Hero /><Image /><TextInfo /></>
);


Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };


  export default Home;