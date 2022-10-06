import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const ListPerson = [
    { id: 1, name: "صلاح مدوكة", date: " الخامسة صباح", img: "dsc09464~2.jpg" },
    { id: 2, name: "صلاح مدوكة", date: " الخامسة صباح", img: "dsc09464~2.jpg" },
    ,
    { id: 3, name: "صلاح مدوكة", date: " الخامسة صباح", img: "dsc09464~2.jpg" },
    ,
    { id: 4, name: "صلاح مدوكة", date: " الخامسة صباح", img: "dsc09464~2.jpg" },
    { id: 5, name: "صلاح مدوكة", date: " الخامسة صباح", img: "dsc09464~2.jpg" },
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
                {ListPerson.map((item) => {
                  return (
                    <>
                      <img src={item.img} className="img-avatar" alt="avatar" />
                      <div className="px-3">
                        <p className="d-inline fs-5">{item.name}</p>
                        <p className="fs-6">{item.date}</p>
                      </div>
                    </>
                  );
                })}
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
