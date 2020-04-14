import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import RcIf from 'rc-if';
import { Grid, Card, CardContent, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Tags from './Tags'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '190px',
    '@media (max-width: 800px)': {
      marginLeft: '0px'
    }
  },
  projectCard: {
    display: 'block',
    position: 'relative',
    fontSize: '1rem',
    padding: '10px 20px',
    background: '#fff',
    transition: 'all 0.6s',
    height: '300px'
  },
  

}))

export default ({ data }) => {
    const classes = useStyles();
    return(
      <Grid className={classes.root} xs={12}>
      <ul className="project-cards">
        {data.slice(0, data.length).map((i, index) => (
          <Fade bottom duration={1500} delay={100 * index} key={i.id}>
            <Card className={classes.projectCard}>
              <CardContent className="about">
                <p>
                  <span className="project-title">{i.name}</span>
                </p>
                <p>{i.description}</p>
              </CardContent>
              <div style={{ marginBottom: "70px" }}>
                {/* <Tags name={i.name}></Tags> */}
              </div>
              <CardActions className="buttons" style={{ marginBottom: "20px" }}>
                <span>
                  <Button size="small" color="primary" href={i.html_url} target="_blank" className="btn">
                    Repo
                  </Button>
                </span>
                <span>
                  <RcIf if={i.homepage != null}>
                      <Button color="primary" href={i.homepage} target="_blank" className="btn">
                      Demo
                      </Button>
                  </RcIf>
                  <RcIf if={i.homepage == null}>
                    <Button  color="primary" href="/stock" target="_blank" className="btn">More info!</Button>
                  </RcIf>
                  
                </span>
              </CardActions>
            </Card>
          </Fade>
        ))}
      </ul>
      <style jsx>{`
        .projects {
            margin-left: 190px;
          }
          .project-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 20px;
            grid-column-gap: 20px;
            list-style: none;
            position: relative;
            margin-top: 2px;
          }
        .project-card {
     
        }
        .project-card:hover {
          transform: scale(1.09) !important;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
          z-index: 1;
        }
        .project-title {
          margin-left: 10px;
          font-weight: 600;
          font-size: 1.1rem;
        }
        .project-card > p:last-child {
          position: absolute;
          bottom: 10px;
        }
        .buttons {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
        }
        .buttons > span {
          text-align: center;
          display: inline-block;
          width: 50%;
        }
        .buttons > span > .btn {
          text-decoration: none;
          color: blue;
          background: #0080edbd;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          padding: 5px 20px;
        }
        .project-card > p:last-child > span {
          margin: 10px;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .dot {
          height: 10px;
          width: 10px;
          background-color: #0070f399;
          border-radius: 50%;
          display: inline-block;
        }
        @media (max-width: 1265px) {
          .project-card > p:last-child > span {
            margin: 0;
            padding: 5px 5px;
          }
        }
        @media (max-width: 800px) {
          .projects {
            margin-left: 0;
          }
          .project-cards {
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 10px;
            margin-top: 50px;
            padding: 0;
          }
          .project-card {
            width: 100%;
            padding: 0;
          }
          .about {
            padding-left: 20px;
          }
          .project-card > p:last-child {
            width: 100%;
            text-align: center;
          }
          .project-card > p:last-child > span {
            margin: 0;
            margin-right: 10px;
          }
        }
        @media (max-width: 580px) {
          .project-card > p:last-child > span {
            margin: 0;
          }
        }
        @media (max-width: 480px) {
          .project-cards {
            grid-template-columns: repeat(1, 1fr);
            grid-column-gap: 0px;
          }
          .project-card > p:last-child > span {
            margin: 10px;
          }
        }
      `}</style>
    </Grid>
    )
}