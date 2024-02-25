import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4"
      style={{ position: "relative" }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: hidden@hidden.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Hidden</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
