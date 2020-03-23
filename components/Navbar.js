import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))


function Navbar() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <AppBar className="root" position="fixed">
          <Toolbar>{
              <>
              <IconButton edge="start" className={classes.menuButton} color="inherit" ariar-label="menu">
                   <MenuIcon /> 
              </IconButton>
              <Button href="/" color="inherit">Home</Button>
              <Button href="/about" color="inherit">About</Button>
              <Button href="/personal" color="inherit">Github</Button>
              <Button href="/contact" color="inherit">Contact</Button>
              </>
        }</Toolbar>
        </AppBar>
        <Toolbar />
        <style jsx>
          {`
            @media (max-width: 800px) {

            }
          `}
        </style>
      </React.Fragment>
      
    );
}

export default Navbar;
