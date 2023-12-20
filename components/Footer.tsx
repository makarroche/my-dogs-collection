import { Badge, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="ms-5">
      <Row>
        <Col md="auto">
        <div className="vr border border-1 mt-1"></div></Col>
        <Col>
          Made with love, just for fun with blockchain!
        </Col>
        <Col className="text-center fw-bold pill-badge">
            MyDogCollection
        <Badge pill bg="dark ms-1" >
        v1.1
      </Badge></Col>
      </Row>
    </Container>
  );
};

export default Footer;
