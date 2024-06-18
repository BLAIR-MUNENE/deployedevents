import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import { useEffect, useState } from "react";
import { BASE_URL } from "./utils";

function UpComingEvents() {
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
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container fluid style={{ width: "18rem", marginTop: "10px" }}>
      <PageNavigation />
      <>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "33px",
            marginTop: "20px",
          }}
        >
          Upcoming Events
        </h1>
      </>
      {events.map((event) => (
        <Row key={event.id}>
          <Col>
            <Card
              style={{ width: "18rem", marginTop: "10px", objectFit: "fill" }}
            >
              <Card.Img variant="top" src={event.image} />{" "}
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>{" "}
                <Card.Text>{event.description}</Card.Text>{" "}
                <Navbar className="bg-body-tertiary">
                  <Container>
                    <Navbar.Brand href="/book_Event"></Navbar.Brand>
                    <Nav.Item>
                      <NavLink to="/book_Event">
                        <Button variant="dark">Book Event</Button>
                      </NavLink>
                    </Nav.Item>
                  </Container>
                </Navbar>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default UpComingEvents;
