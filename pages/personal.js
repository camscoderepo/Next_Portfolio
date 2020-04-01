import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { css } from "@emotion/core";
import { RingLoader } from 'react-spinners'
import Config from "../config/personal";
import Navbar from '../components/Layouts/Navbar';



const Personal = ({data}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }, []);

    const override = css`
        margin: auto;
        margin-top: 20%;
    `;

    return (
        <>
        {isLoading ? (
            <div style={{ height: "640px" }}>
            <RingLoader css={override} size={38} />
            <Navbar></Navbar>
            </div>
        ) : (
            <>
            <Navbar></Navbar>
            <div className="container" style={{ overflow: "hidden" }}>
                <Profile Config={Config} />
                <Projects data={data}  />
            </div>
            <style jsx>
                {`
            .container {
                display: flex;
                flex-direction: row;
                padding: 20px;
                overflow-x: hidden;
            }
            @media (max-width: 800px) {
                .container {
                flex-direction: column;
                }
            `}
            </style>
            </>
        )}
        </>
    );
};


Personal.getInitialProps = async () => {
    const res = await fetch(
        `https://api.github.com/users/${Config.GITHUB_NAME}/repos`
    );
    const data = await res.json();
    return { data };
};

export default Personal;