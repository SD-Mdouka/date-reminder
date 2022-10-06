import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DateCount } from "./Components/DateCount";
import DateList from "./Components/DateList";
import { ListPerson } from "./data";

function App() {
  const [LangeAr, setLangeAr] = useState(false);
  const [LangeFr, setLangeFr] = useState(true);
  const params = {
    LangeAr,
    LangeFr,
    setLangeAr,
    setLangeFr,
    ListPerson,
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DateCount {...params} />
        <DateList {...params} />
        <Row className="justify-content-center my-2">
          <Col className="d-flex justify-content-between" sm="8">
            {LangeAr === true && LangeFr === false ? (
              <>
                <button className="btn-style ">مسح الكل </button>
                <button className="btn-style ">عرض البيانات</button>
              </>
            ) : (
              <>
                <button className="btn-style ">Vide Touts</button>
                <button className="btn-style ">Affiche Les Donnes</button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
