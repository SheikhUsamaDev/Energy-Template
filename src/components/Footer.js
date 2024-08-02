import React from 'react';
import leaf from '../images/leaf.png';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <div className='footer-sec'>
                <div className='bg-color'>
                    <Container>
                        <div className='footer-card'>
                            <div className='head'>
                                <h2><span className='text-clr'>Learn</span> about Reliable Energy</h2>
                            </div>
                            <div className='paragraph'>
                                <p>Join our email list for more information about this all-in-one solution<br /> can serve your entire business.</p>
                            </div>
                            <div className='input'>
                                <input type='text' />
                                <div className='info-btn'>
                                    <button>GET more info</button>
                                </div>
                            </div>
                            <div className='text'>
                                <p>*please refer to our Privacy Policy for more detail</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <div className='footer'>
                <Container>
                    <Row>
                        <Col md={2} xs={12} className="mb-4">
                            <div className="logo1">
                                <img src={leaf} alt="" width={40} />
                                <h6 style={{ color: 'white' }}>The Energy Co</h6>
                            </div>
                        </Col>
                        <Col md={3} xs={12} className="mb-4">
                            <div className='quick-link'>
                                <h3>Quick Links</h3>
                            </div>
                            <div className='links'>
                                <a href='#'>Home</a>
                                <a href='#'>About Us</a>
                                <a href='#'>Feature</a>
                                <a href='#'>Industries</a>
                                <a href='#'>FAQ</a>
                            </div>
                        </Col>
                        <Col md={3} xs={12} className="mb-4">
                            <div className='quick-link'>
                                <h3>Contact Us</h3>
                            </div>
                            <div className='contact-txt'>
                                <div className='icon' />
                                <p>hello@theenergy.com</p>
                                <div className='icon' />
                                <p>[001]555 5555</p>
                                <div className='icon' />
                                <p>Mon-Fri : 09:00 - 17.00</p>
                            </div>
                        </Col>
                        <Col md={4} xs={12} className="mb-4">
                            <div className='quick-link'>
                                <h3>Subscribe to our Newsletter</h3>
                            </div>
                            <div className='text-input'>
                                <input type='Email' placeholder='Enter Your Email' />
                                <div className='Subscribe-btn'>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                            <div className="d-flex gap-4 pt-4 justify-content-md-start justify-content-center">
                                <i className="fa-brands fa-facebook fa-lg text-white"></i>
                                <i className="fa-brands fa-twitter fa-lg text-white"></i>
                                <i className="fa-brands fa-youtube fa-lg text-white"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;
