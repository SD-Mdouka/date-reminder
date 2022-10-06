import React from "react";
import { Col, Row } from "react-bootstrap";

export const DateAction = ({ LangeAr, LangeFr, VideList }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col className="d-flex justify-content-between" sm="8">
        {LangeAr === true && LangeFr === false ? (
          <>
            <button className="btn-style ">مسح الكل </button>
            <button className="btn-style ">عرض البيانات</button>
          </>
        ) : (
          <>
            <button className="btn-style " onClick={() => VideList()}>
              Vide Touts
            </button>
            <button className="btn-style ">Affiche Les Donnes</button>
          </>
        )}
      </Col>
    </Row>
  );
};
