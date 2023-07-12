import { Container, Row, Col } from 'react-bootstrap';

export const Layout = ({children}) => {
  return (
    <Container>
      <Row>
        <Col lg='8'>
            {children}
        </Col>
      </Row>
    </Container>
  );
};
