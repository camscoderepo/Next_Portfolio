import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      maxWidth: 445,
    },
    media: {
      height: 400,
      paddingTop: '56.25%', // 16:9
    },
  }),
);

export default function Image() {
  const classes = useStyles();
  return (
    <Paper elevation={6} className={classes.root}>
      <CardMedia 
      className={classes.media}
      image="http://baconmockup.com/800/650"
      title="Paella dish"
      />
    </Paper>
  );
}
