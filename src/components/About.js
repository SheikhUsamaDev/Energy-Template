// src/components/About.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Box className="info-box ">
          <h5 className='about-heading'>WE ARE ENERGY CO</h5>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.<br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default About;
