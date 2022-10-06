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
              <div className="d-flex border-bottom mx-3">
                <img src="dsc09464~2.jpg" className="img-avatar" alt="avatar" />
                <div className="px-3">
                  <p className="d-inline fs-5">صلاح مدوكة</p>
                  <p className="fs-6">الخامسة صباح</p>
                </div>
              </div>
              <div className="d-flex border-bottom mx-3">
                <img src="dsc09464~2.jpg" className="img-avatar" alt="avatar" />
                <div className="px-3">
                  <p className="d-inline fs-5">صلاح مدوكة</p>
                  <p className="fs-6">الخامسة صباح</p>
                </div>
              </div>
              div className="d-flex border-bottom mx-3">
                <img src="dsc09464~2.jpg" className="img-avatar" alt="avatar" />
                <div className="px-3">
                  <p className="d-inline fs-5">صلاح مدوكة</p>
                  <p className="fs-6">الخامسة صباح</p>
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
