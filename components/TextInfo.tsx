import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles, StylesProvider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
        display: 'flex',
        flexDirection: 'row'
    }
 })
);

export default function TextInfo() {
 const classes = useStyles();
 return (
     <div className={classes.heading}>
         <Typography variant="h6">
             Small About me section
         </Typography>
     </div>
 );
}
