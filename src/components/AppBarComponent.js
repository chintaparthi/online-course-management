import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './AppBarComponent.css'; // Ensure you create this CSS file for the background and other styles

const AppBarComponent = () => {
  return (
    <div className="background">
      {/* First AppBar for the title */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Course Management System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Second AppBar for Sign In, Sign Up and Profile Icon */}
      <AppBar position="static" style={{ marginBottom: '20px' }}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/signin">
            Sign In
          </Button>
          <Button color="inherit" component={Link} to="/signup" style={{ marginLeft: '10px' }}>
            Sign Up
          </Button>
          <IconButton color="inherit" style={{ marginLeft: 'auto' }}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main content goes here */}
      <div className="content">
        {/* Content such as forms or text will be centered here */}
      </div>
    </div>
  );
};

export default AppBarComponent;
