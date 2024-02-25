import React, { useState, useEffect } from "react";
import {
  Container,
  Modal,
  Button,
  Form,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import Header from "../components/header";
import { produceEvent } from "../utils/produce";
import { EVENT_DESCRIPTIONS, EVENT_NAMES } from "../utils/config";

const AboutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [blurBackground, setBlurBackground] = useState(true);

  useEffect(() => {
    produceEvent(
      EVENT_NAMES.ABOUT_PAGE_ENTER,
      EVENT_DESCRIPTIONS.ABOUT_PAGE_ENTER
    );
    setTimeout(() => {
      setShowModal(true); // Show modal after 5 seconds
      setBlurBackground(true); // Blur background when modal is shown
    }, 1000);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setBlurBackground(false); // Remove blur when modal is closed
  };

  const handleEmailSubmit = () => {
    // Here you can implement your logic to handle email submission
    console.log("Submitted email:", email);
    setShowModal(false);
    setBlurBackground(false); // Remove blur when modal is closed
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Sample data for cards
  const cardData = [
    {
      title: "Card 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card 2",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      title: "Card 3",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#3AAFA9",
        minHeight: "100vh",
        filter: blurBackground ? "blur(5px)" : "none",
      }}
    >
      <Header />
      <Container>
        <h1 className="text-center mt-5">About Page</h1>
        <p className="text-center">
          Welcome to our about page. Here you can find more information about
          our company and services.
        </p>

        <Row className="justify-content-center mt-5">
          {cardData.map((card, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Email Popup Modal */}
      <div
        onClick={(e) => {
          console.log(e.target.className);
          if (e.target.className === "fade modal show") {
            produceEvent(
              EVENT_NAMES.OUTSIDE_POPUP_CLICK,
              EVENT_DESCRIPTIONS.OUTSIDE_POPUP_CLICK
            );
          } else {
          }
        }}
      >
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop={false}
          onEntered={() => {
            produceEvent(
              EVENT_NAMES.POPUP_APPEARS,
              EVENT_DESCRIPTIONS.POPUP_APPEARS
            );
          }}
          onExit={() => {
            produceEvent(
              EVENT_NAMES.POPUP_CLOSE,
              EVENT_DESCRIPTIONS.POPUP_CLOSE
            );
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Subscribe to Our Newsletter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Enter your email below to subscribe to our newsletter.</p>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEmailSubmit}>
              Subscribe
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AboutPage;
