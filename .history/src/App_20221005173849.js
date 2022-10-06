import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col className="" sm="8">
            لديك 4 مواعيد اليوم
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="" sm="8">
            <div className="rectangle"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="" sm="8">
            <Button className="btn-style">مسح الكل </Button>
            <Button className="btn-style">عرض البيانات</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
