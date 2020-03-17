import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import { Link, withStyles } from '@material-ui/core';




function Navbar() {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>{
              <>
              <IconButton edge="start" color="inherit" ariar-label="menu">
                  {/* <MenuIcon /> */}
              </IconButton>
              <Button href="/" color="inherit">Home</Button>
              <Button href="/about" color="inherit">About</Button>
              <Button href="/portfolio" color="inherit">Portfolio</Button>
              <Button href="/contact" color="inherit">Contact</Button>
              </>
        }</Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
}

export default Navbar;
