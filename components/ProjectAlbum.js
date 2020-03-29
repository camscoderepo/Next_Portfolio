import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    aboutContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
}));

const cards = [1, 2, 3]

export default function Album() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <main>
                <div className={classes.aboutContent}>
                    <Container>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Project Layout
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            This is a collection of my most recent deployed projects! Click through them
                            to find out more about my skills!
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    )
}
