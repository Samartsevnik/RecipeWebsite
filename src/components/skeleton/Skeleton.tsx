import { Layout } from '../layout/Layout.tsx';
import { Container } from 'react-bootstrap';

const Skeleton = () => {
  return (
    <Layout title="Loading" description="Loading the page">
      <Container>
        <h2>Loading...</h2>
      </Container>
    </Layout>
  );
};

export default Skeleton;
