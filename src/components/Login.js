// src/components/SignIn.js
import React from 'react';
import { TextField, Button, Typography, Paper, Container } from '@mui/material';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In form submitted');
    // Handle sign in logic here (e.g., API call)
  };

  return (
    <Container 
      component="main" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        padding: 3 
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 3, 
          width: '400px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name *"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email *"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password *"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;
