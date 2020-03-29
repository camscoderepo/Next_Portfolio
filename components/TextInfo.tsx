import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles, StylesProvider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
    }
 })
);

export default function TextInfo() {
 const classes = useStyles();
 return (
     <div className={classes.heading}>
         <Typography variant="h6">
             Small About me section
             kfjkelkfjkejkfeklklekjfadka
             efjaekfkaelfkaekfljkaklejfjklekjf
             f
             e
             aekflkaekjjlkakf;elk;fkjalekl;fkj;
             elakkljfjklaj;ef;lk;lkkl;jal;fklk;a;flk
         </Typography>
     </div>
 );
}
