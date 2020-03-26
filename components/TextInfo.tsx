import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles, StylesProvider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row'
        }
    })
})

function TextInfo() {
 const classes = useStyles();
 return (
     <div className={classes.root}>
         <Typography variant="h6">
             Small About me section
         </Typography>
     </div>
 )
}

export default TextInfo;