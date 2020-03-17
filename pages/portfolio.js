import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { css } from "@emotion/core";
import { RingLoader } from "react-spinners";
import Meta from "../components/Meta";
import Config from "../config/portfolio";
import Navbar from '../components/Navbar';

 const Portfolio = ({data}) => {
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
        <Meta />
        {isLoading ? (
            <div style={{ height: "640px" }}>
            <RingLoader css={override} size={38} />
            </div>
        ) : (
            <>
            <Navbar></Navbar>
            <div className="container" style={{ overflow: "hidden" }}>
                <Profile Config={Config} />
                <Projects data={data} />
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


Portfolio.getInitialProps = async () => {
    const res = await fetch(
        `https://api.github.com/users/${Config.GITHUB_NAME}/repos`
    );
    const data = await res.json();
    return { data };
};

export default Portfolio;