import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { NextPage } from 'next';
import Description from '../components/Description';

const Home: NextPage<{}> = () => (
    <><Navbar /><Hero /><Description /></>
);


Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };


  export default Home;