import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      className="mt-auto pt-5 pb-3"
      style={{
        backgroundColor: '#F7F7F7',
        fontFamily: 'Outfit, sans-serif',
        borderTop: '1px solid #ddd',
      }}
    >
      <Container>
        <Row className="text-center text-md-start">
          {/* Company */}
          <Col md={4} sm={12} className="mb-4">
            <h5 className="fw-bold" style={{ color: '#393E46' }}>
              Print<span style={{ color: '#d90429' }}>Peak</span>
            </h5>
            <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
              Your one-stop shop for custom printed apparel. Dream it. Wear it.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={6} className="mb-4">
            <h6 className="fw-bold" style={{ color: '#393E46' }}>Quick Links</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li><a href="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</a></li>
              <li><a href="/products" style={{ textDecoration: 'none', color: '#6c757d' }}>Products</a></li>
              <li><a href="/about" style={{ textDecoration: 'none', color: '#6c757d' }}>About Us</a></li>
              <li><a href="/contact" style={{ textDecoration: 'none', color: '#6c757d' }}>Contact</a></li>
            </ul>
          </Col>

          {/* Social */}
          <Col md={4} sm={6} className="mb-4">
            <h6 className="fw-bold" style={{ color: '#393E46' }}>Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
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
          </Col>
        </Row>

        {/* Bottom Line */}
        <hr />
        <div className="text-center mt-3" style={{ color: '#6c757d', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} <span className="fw-bold" style={{ color: '#d90429' }}>PrintPeak</span>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
