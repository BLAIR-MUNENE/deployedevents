import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/my-events">
            <h1>My Events</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <NavLink to="/my_events" exact activeClassName="active-link">
                <Button variant="dark">Check Events</Button>
              </NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/upcoming-events">
            <h1>Upcoming Events</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <NavLink
                to="/upcoming_events"
                exact
                activeClassName="active-link"
              >
                <Button variant="dark">View Events</Button>
              </NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavigationBar;
