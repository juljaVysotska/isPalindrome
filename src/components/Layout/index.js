import { Container, Row, Col } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col lg="9" className="mx-auto my-5">{children}</Col>
      </Row>
    </Container>
  );
};
