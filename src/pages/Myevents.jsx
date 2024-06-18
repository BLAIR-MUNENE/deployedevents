import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "../components/PageNavigation";
import Card from "react-bootstrap/Card";
import { BASE_URL } from "./utils";

function MyEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
      });
  }, []);

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid style={{ width: "18rem", marginTop: "10px" }}>
      <PageNavigation />
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "33px",
          marginTop: "20px",
        }}
      >
        Upcoming Events
      </h1>
      <Row>
        {events.map((events) => (
          <Col key={events.id} sm={12} md={6} lg={4}>
            <Card
              style={{ width: "18rem", marginTop: "10px", objectFit: "cover" }}
            >
              <Card.Img
                variant="top"
                src={events.image || "holder.js/100px180"}
              />
              <Card.Body>
                <Card.Title>{events.title}</Card.Title>
                <Card.Text>{events.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MyEvents;
