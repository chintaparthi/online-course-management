import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAbout, setOpenAbout] = useState(false); // State for About Us modal
  const [feedback, setFeedback] = useState('');

  const handleFeedbackClick = () => {
    setOpenFeedback(true); // Open feedback modal directly
  };

  const handleCloseFeedback = () => {
    setOpenFeedback(false); // Close feedback modal
  };

  const handleFeedbackSubmit = () => {
    // Handle feedback submission logic (e.g., send to server)
    console.log("Feedback submitted:", feedback);
    setFeedback(''); // Clear the feedback
    handleCloseFeedback(); // Close the modal
  };

  const handleContactClick = () => {
    setOpenContact(true); // Open contact info modal
  };

  const handleCloseContact = () => {
    setOpenContact(false); // Close contact info modal
  };

  const handleAboutClick = () => {
    setOpenAbout(true); // Open About Us modal
  };

  const handleCloseAbout = () => {
    setOpenAbout(false); // Close About Us modal
  };

  return (
    <>
      {/* Upper AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            Online Course Management System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Lower AppBar with buttons */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Button color="inherit" component={Link} to="/login" style={{ marginRight: '10px' }}>Sign In</Button>
          <Button color="inherit" component={Link} to="/signup" style={{ marginRight: '10px' }}>Sign Up</Button>
          <Button color="inherit" onClick={handleFeedbackClick} style={{ marginRight: '10px' }}>Feedback</Button>
          <Button color="inherit" onClick={handleContactClick} style={{ marginRight: '10px' }}>Contact</Button>
          <Button color="inherit" onClick={handleAboutClick}>About Us</Button> {/* About Us Button */}
        </Toolbar>
      </AppBar>

      {/* Image Section */}
      <div className="image-container" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <img
          src="https://th.bing.com/th/id/OIP.g9D2GWyLDwZ8kEQxoR5dEQAAAA?w=199&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Ad"
          style={{ width: '600px', height: '500px' }} // Adjust image size here
        />
      </div>

      {/* Feedback Modal */}
      <Dialog open={openFeedback} onClose={handleCloseFeedback}>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <Typography variant="body1">We value your feedback! Please answer the following questions:</Typography>
          <TextField
            autoFocus
            margin="dense"
            label="What did you like about our service?"
            type="text"
            fullWidth
            variant="outlined"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <TextField
            margin="dense"
            label="What can we improve?"
            type="text"
            fullWidth
            variant="outlined"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Any other queries?"
            type="text"
            fullWidth
            variant="outlined"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFeedback} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFeedbackSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Contact Info Modal */}
      <Dialog open={openContact} onClose={handleCloseContact}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <Typography variant="body1">You can reach us at:</Typography>
          <Typography variant="body2">Phone: (123) 456-7890</Typography>
          <Typography variant="body2">Email: support@example.com</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseContact} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* About Us Modal */}
      <Dialog open={openAbout} onClose={handleCloseAbout}>
        <DialogTitle>About Us</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Welcome to the Online Course Management System!</Typography>
          <Typography variant="body2">
            We provide a platform for students and educators to connect and manage courses effectively. Our mission is to enhance learning experiences through quality content and user-friendly interfaces.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAbout} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;
