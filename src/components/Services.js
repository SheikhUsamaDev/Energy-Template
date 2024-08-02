// src/components/Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Typography } from '@mui/material';
import Offer1 from '../images/offer1.png'
import Offer2 from '../images/offer2.png'
import Offer3 from '../images/offer3.png'
import './Services.css';

const Services = () => {
  return (
    <section className="services-section ">
      <Container>
        <Typography variant="h4" component="h3">
          What We Are Offering
        </Typography>
        <Row>
          <Col sm={4}>
            <Card className="service-card">
              <Card.Body>
                <img
                  src={Offer1}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%" }}
                />
                <Card.Title>A Responsible Corporate</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="service-card">
              <Card.Body>
                <img
                  src={Offer2}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%" }}
                />
                <Card.Title>Utility-Scale Solution</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="service-card">
              <Card.Body>
                <img
                  src={Offer3}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%" }}
                />
                <Card.Title>Commercial Solution</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
