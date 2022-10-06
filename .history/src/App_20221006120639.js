import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ListPerson } from "./data";

function App() {
  const [LangeAr, setLangeAr] = useState(false);
  const [LangeFr, setLangeFr] = useState(true);

  return (
    <div className="font color-body">
      <Container className="py-5">
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
        <Row className="justify-content-center">
          <Col className="" sm="8">
            <div className="rectangle p-2">
              {ListPerson.length ? (
                ListPerson.map((item) => {
                  return (
                    <div className="d-flex border-bottom mx-3 my-2">
                      <img src={item.img} className="img-avatar" alt="avatar" />
                      <div className="px-3">
                        {LangeAr === true && LangeFr === false ? (
                          <>
                            <p className="d-inline fs-5">{item.name_ar}</p>
                            <p className="fs-6">{item.date_ar}</p>
                          </>
                        ) : (
                          <>
                            <p className="d-inline fs-5">{item.name_fr}</p>
                            <p className="fs-6">{item.date_fr}</p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  {LangeAr === true && LangeFr === false ? (
                    <h2 className="p-5 text-center">لا يوجد مواعد اليوم</h2>
                  ) : (
                    <h2 className="p-5 text-center">
                      Il n’y a pas de dates aujourd’hui
                    </h2>
                  )}
                </>
              )}
            </div>
          </Col>
        </Row>
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
