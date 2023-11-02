import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s', // Add the transition property for the animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale the card on hover
  },
  background: 'grey', // Set the background color to black
  color: 'white', // Set the text color to white
}));

const About = () => {
  // State to track like button status
  const [liked, setLiked] = useState(false);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  // Effect to change the title color when liked state changes
  useEffect(() => {
    if (liked) {
      document.title = 'Liked!';
    } else {
      document.title = 'Not Liked';
    }
  }, [liked]);

  return (
    <div>
        <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">Jio</Typography>
              <Typography variant="body1">
              Reliance Jio Infocomm Limited, doing business as Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Navi Mumbai, Maharashtra, India. It operates a national LTE network with coverage across all 22 telecom circles. Jio offers 4G and 4G+ services all over India and 5G service in many cities. </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">Mobile broadband</Typography>
              <Typography variant="body1">
              The company launched its 4G broadband services throughout India in September 2016. It was slated to release in December 2015 after some reports said that the company was waiting to receive final permits from the government.[15] Jio offers fourth-generation (4G) data and voice services, along with peripheral services like instant messaging and streaming movies and music</Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Add more cards here */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">jio</Typography>
              <Typography variant="body1">
              Jio shares spectrum with Reliance Communications. The sharing deal is for 800 MHz band across seven circles other than the 10 circles for which Jio already owns.</Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;
