import React from 'react';
import App from 'next/app';
import MainLayout from '../components/Layouts/MainLayout';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        // const Layout = Component.Layout || DefaultLayout;


        return(
            <MainLayout>
                
                <Component {...pageProps} />

            </MainLayout>
        )
    }
}

export default MyApp;