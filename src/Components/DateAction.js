import React from "react";
import { Col, Row } from "react-bootstrap";

export const DateAction = ({ LangeAr, LangeFr, VideList, ViewData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col className="d-flex justify-content-between" sm="8">
        {LangeAr === true && LangeFr === false ? (
          <>
            <button className="btn-style " onClick={VideList}>
              مسح الكل{" "}
            </button>
            <button className="btn-style " onClick={ViewData}>
              عرض البيانات
            </button>
          </>
        ) : (
          <>
            <button className="btn-style " onClick={VideList}>
              Vide Touts
            </button>
            <button className="btn-style " onClick={ViewData}>
              Affiche Les Donnes
            </button>
          </>
        )}
      </Col>
    </Row>
  );
};
