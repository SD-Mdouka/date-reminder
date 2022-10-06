import React from "react";

export const DateCount = ({
  LangeAr,
  LangeFr,
  setLangeAr,
  setLangeFr,
  ListPerson,
}) => {
  return (
    <Row className="justify-content-center my-4">
      <Col className="d-flex justify-content-between" sm="8">
        {LangeAr === true && LangeFr === false ? (
          <>
            <div>لديك{ListPerson.length} مواعيد اليوم</div>
          </>
        ) : (
          <>
            <div>
              Vous avez des rendez-vous {ListPerson.length} pour aujourd’hui
            </div>
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
