import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-auto  mb-0">
      <Container>
        <Row>
          <Col md={6} className="mb-3">
            <h5 className="mb-2 font-bold">About Us</h5>
            <p>
              We are a team dedicated to bringing you the best recipes from
              around the world. Explore our site to find new and exciting dishes
              to try.
            </p>
          </Col>
          <Col md={{ span: 3, offset: 3 }} className="mb-3">
            <h5 className="mb-2 font-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={24} color="#1877F2" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={24} color="#1DA1F2" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} color="#f77737" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">Author: Nikita Samartsev</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
