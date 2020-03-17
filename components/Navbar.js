import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function Navbar() {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>{/* content */}</Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
}

export default Navbar;
