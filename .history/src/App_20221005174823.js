import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
            <div className="rectangle p-2">
              <div className="d-flex">
                <img src="dsc09464~2.jpg" className="img-avatar" />
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-2">
          <Col className="d-flex justify-content-between" sm="8">
            <button className="btn-style p-2">مسح الكل </button>
            <button className="btn-style p-2">عرض البيانات</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
