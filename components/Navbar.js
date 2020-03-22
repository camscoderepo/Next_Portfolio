import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';

function Navbar() {
    return (
      <React.Fragment>
        <AppBar className="" position="fixed">
          <Toolbar>{
              <>
              <IconButton edge="start" color="inherit" ariar-label="menu">
                  {/* <MenuIcon /> */}
              </IconButton>
              <Button href="/" color="inherit">Home</Button>
              <Button href="/about" color="inherit">About</Button>
              <Button href="/personal" color="inherit">Github</Button>
              <Button href="/pricing" color="inherit">Pricing</Button>
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
