import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px' }}>
        <h2>Welcome to your Dashboard!</h2>
        <Button variant="contained" component={Link} to="/profile">Profile</Button>
        <Button variant="contained" component={Link} to="/courses">Courses</Button>
        <Button variant="contained" component={Link} to="/">Logout</Button>
      </div>
    </>
  );
};

export default Dashboard;
