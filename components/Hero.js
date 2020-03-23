import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    media: {
        height: 500,
      }
})

function Hero() {
    const classes = useStyles();
    return (
        <Card>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image="http://baconmockup.com/800/650"
                title="dummyimage"
            />
        </CardActionArea>
        </Card>
    )
}

export default Hero;
