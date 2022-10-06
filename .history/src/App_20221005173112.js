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
      </Container>
      {/* <Button className="btn btn-primary">زرار</Button> */}
    </div>
  );
}

export default App;
