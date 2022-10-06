import React from "react";
import { Col, Row } from "react-bootstrap";

export const DateCount = ({
  LangeAr,
  LangeFr,
  setLangeAr,
  setLangeFr,
  List,
}) => {
  return (
    <Row className="justify-content-center my-5">
      <Col className="d-flex justify-content-between" sm="8">
        {LangeAr === true && LangeFr === false ? (
          <>
            <div>لديك{List.length} مواعيد اليوم</div>
          </>
        ) : (
          <>
            <div>Vous avez des rendez-vous {List.length} pour aujourd’hui</div>
          </>
        )}
        <div>
          <button
            id="BtnFr"
            className="btn-style btn-fr"
            onClick={() => {
              document.body.style.direction = "ltr";
              setLangeAr(false);
              setLangeFr(true);
            }}
          >
            Français
          </button>
          <button
            id="BtnAr"
            className="btn-style btn-ar"
            onClick={() => {
              document.body.style.direction = "rtl";
              setLangeFr(false);
              setLangeAr(true);
            }}
          >
            العربية
          </button>
        </div>
      </Col>
    </Row>
  );
};
