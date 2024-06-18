import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function PageNavigation() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Brand href="/my_events">My Events</Navbar.Brand>
          <Navbar.Brand href="/upcoming_events">Upcoming Events</Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PageNavigation;
