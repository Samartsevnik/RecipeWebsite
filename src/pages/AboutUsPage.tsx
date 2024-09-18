import { Layout } from '../components/layout/Layout.tsx';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const AboutUsPage = () => {
  return (
    <Layout
      title="About Us"
      description="Learn more about our team and mission"
    >
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg mt-3">
              Welcome to our website! We are passionate about providing you with
              the best recipes from around the world, and our mission is to make
              cooking enjoyable for everyone, no matter your skill level.
            </p>
            <p className="text-lg">
              Our team works hard to curate, test, and share recipes that are
              not only delicious but also easy to prepare. We believe that
              cooking should be fun, and we want to inspire people to spend more
              time in the kitchen experimenting with different cuisines and
              ingredients.
            </p>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-xl font-bold">
                  Our Mission
                </Card.Title>
                <Card.Text className="mt-2">
                  We aim to bring together a diverse selection of recipes that
                  promote healthy eating, cultural appreciation, and culinary
                  exploration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="max-md:mt-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-xl font-bold">Our Team</Card.Title>
                <Card.Text className="mt-2">
                  Our team of food enthusiasts and chefs work tirelessly to test
                  and perfect each recipe, ensuring they are both authentic and
                  easy to follow.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="max-md:mt-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-xl font-bold">
                  Our Values
                </Card.Title>
                <Card.Text className="mt-2">
                  We believe in sustainability, inclusivity, and the joy of
                  cooking. These values shape everything we do and the recipes
                  we choose to share.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
