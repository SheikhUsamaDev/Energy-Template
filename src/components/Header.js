// src/components/Header.js
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import Banner from '../images/banner.png'
import './Header.css';

const Header = () => {
  return (
    <header className="header-section  text-white">
      <Container>
        <Row>
          <Col>
            <Typography variant="h2" component="h1">
              THE ENERGY CO
            </Typography>
            <Typography variant="h4" component="h2">
              We Invest In The Future Of Planet
            </Typography>
            <Button variant="success">Get a Quote</Button>
          </Col>
          <Col>
            <img
              src={Banner}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
