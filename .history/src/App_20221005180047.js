import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const ListPerson = [
    { id: 1, name: "", date: "5", img: "" },
    { id: 2, name: "", date: "6", img: "" },
    ,
    { id: 3, name: "", date: "7", img: "" },
    ,
    { id: 4, name: "", date: "5", img: "" },
    { id: 5, name: "", date: "4", img: "" },
  ];
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center my-4">
          <Col className="" sm="8">
            لديك{ListPerson.length} مواعيد اليوم
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="" sm="8">
            <div className="rectangle p-2">
              <div className="d-flex border-bottom mx-3 my-2">
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
