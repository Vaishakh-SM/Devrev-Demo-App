import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Container from "react-bootstrap/Container";
import { Row, Col, Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import YouTube from "react-youtube";
import { Footer } from "../components/footer";
import { CountryDropdown } from "../components/countryDropdown";
import { produceEvent } from "../utils/produce";
import { EVENT_DESCRIPTIONS, EVENT_NAMES } from "../utils/config";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const testimonials = [
  {
    name: "John Doe",
    comment: "Amazing product! It completely changed the way I work.",
  },
  {
    name: "Jane Smith",
    comment: "I've been using this for months now and I'm still impressed!",
  },
  {
    name: "Alice Johnson",
    comment: "Easy to use and incredibly helpful. Highly recommended!",
  },
];

const HomePage = () => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    produceEvent(
      EVENT_NAMES.HOME_PAGE_ENTER,
      EVENT_DESCRIPTIONS.HOME_PAGE_ENTER
    );
  }, []);

  return (
    <div
      style={{
        minHeight: "200vh",
        backgroundColor: "#3AAFA9",
        overflow: "hidden",
      }}
    >
      <Header />
      <Row className="align-items-center" style={{ minHeight: "80vh" }}>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <h1 style={{ fontSize: "100px", color: "white" }}>Hidden</h1>
            <h6>Finding improvements before your users complain</h6>
          </Col>

          <Col className="align-items-center justify-center">
            <Form.Control size="lg" type="text" placeholder="Your email" />
            <Col
              className="align-items-center justify-center"
              style={{ marginTop: "20px" }}
            >
              <CountryDropdown />
            </Col>
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                className="mt-2"
                style={{ backgroundColor: "black", border: "none" }}
                disabled={clicked}
                onClick={() => {
                  produceEvent(
                    EVENT_NAMES.WAITLIST_BUTTON_CLICK,
                    EVENT_DESCRIPTIONS.WAITLIST_BUTTON_CLICK
                  );
                  setTimeout(() => {
                    setClicked(true);
                  }, [2000]);
                }}
              >
                {clicked ? <>Done!</> : <>Join waitlist</>}
              </Button>
            </div>
          </Col>
        </Row>
      </Row>
      <Container style={{ marginTop: "100px" }}>
        <Row
          className="justify-content-center text-center"
          style={{ marginBottom: "30px" }}
        >
          <Col>
            <h1>What do we do</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col>
            <YouTube
              videoId={"vzaXw2ztCqU"}
              opts={opts}
              onPlay={() => {
                produceEvent(
                  EVENT_NAMES.YOUTUBE_PLAY,
                  EVENT_DESCRIPTIONS.YOUTUBE_PLAY
                );
              }}
              onPause={() => {
                produceEvent(
                  EVENT_NAMES.YOUTUBE_PAUSE,
                  EVENT_DESCRIPTIONS.YOUTUBE_PAUSE
                );
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "70px", marginBottom: "100px" }}>
        <Row
          className="justify-content-center text-center"
          style={{ marginBottom: "30px" }}
        >
          <Col>
            <h1>Our Customers</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Text>{testimonial.comment}</Card.Text>
                  <Card.Title>- {testimonial.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default HomePage;
