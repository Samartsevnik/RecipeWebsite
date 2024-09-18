import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { APP_NAME } from '../../constants.ts';

export const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="/" className="inline-flex items-center">
          <img
            src={logo}
            alt="Recipe Website logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <span className="font-bold ml-1 text-2xl">{APP_NAME}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
