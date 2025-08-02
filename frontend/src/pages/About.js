// src/pages/About.js
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <h2 className="fw-bold mb-3" style={{ color: '#d90429' }}>About PrintPeak</h2>
      <p style={{ color: '#393E46', fontSize: '1rem', lineHeight: '1.8' }}>
        <strong>PrintPeak</strong> is your one-stop destination for customized t-shirts that reflect your personality, passion, and creativity.
        Whether you're designing for a personal event, a startup, a student group, or just for fun — we help bring your ideas to life with vibrant, high-quality prints.
      </p>
      <p style={{ color: '#393E46', fontSize: '1rem', lineHeight: '1.8' }}>
        We believe in empowering self-expression through fashion. Choose from a range of styles, upload your own designs, or collaborate with us to craft something unique.
        At PrintPeak, your vision becomes wearable art.
      </p>
    </Container>
  );
};

export default About;
