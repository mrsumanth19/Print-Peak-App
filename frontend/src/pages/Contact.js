// src/pages/Contact.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <h2 className="fw-bold mb-3" style={{ color: '#d90429' }}>Contact Us</h2>
      <p style={{ color: '#393E46', fontSize: '1rem' }}>
        We'd love to hear from you! Whether it's a question, feedback, or a custom request — we're here to help.
      </p>
      <p style={{ color: '#393E46' }}>
        📧 <strong>Email:</strong> <a href="mailto:sumanthvanapalli194@gmail.com">sumanthvanapalli194@gmail.com</a>
      </p>
      <p style={{ color: '#393E46' }}>
        🤝 <strong>Connect with us:</strong>
      </p>
      <div className="d-flex gap-4 mt-3">
        <a href="https://www.linkedin.com/in/sumanth-vanapalli" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-lg" style={{ color: '#0A66C2' }}></i>
        </a>
        <a href="https://github.com/mrsumanth19" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-lg" style={{ color: '#171515' }}></i>
        </a>
        <a href="mailto:sumanthvanapalli194@gmail.com">
          <i className="fas fa-envelope fa-lg" style={{ color: '#393E46' }}></i>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
