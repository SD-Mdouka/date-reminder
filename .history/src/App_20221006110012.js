import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [LangeAr, setLangeAr] = useState(false);
  const [LangeFr, setLangeFr] = useState(true);

  const ListPerson = [
    {
      id: 1,
      name_ar: "صلاح مدوكة",
      date_ar: " الخامسة صباح",
      name_fr: "Salah Mdouka",
      date_fr: "Cinq heures du matin",
      img: "dsc09464~2.jpg",
    },
  ];
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
                  if (!LangeAr) {
                    document.body.style.direction = "ltr";
                    setLangeAr(false);
                    setLangeFr(true);
                    document.getElementById("BtnAr").style.display = "Block";
                    document.getElementById("BtnFr").style.display = "none";
                  } else {
                    document.body.style.direction = "rtl";
                    setLangeFr(false);
                    setLangeAr(true);
                    document.getElementById("BtnFr").style.display = "Block";
                    document.getElementById("BtnAr").style.display = "none";
                  }
                }}
              >
                Français
              </button>
              <button
                id="BtnAr"
                className="btn-style btn-ar"
                onClick={() => {
                  if (!LangeFr) {
                    document.body.style.direction = "rtl";
                    setLangeFr(false);
                    setLangeAr(true);
                    document.getElementById("BtnFr").style.display = "Block";
                    document.getElementById("BtnAr").style.display = "none";
                  } else {
                    document.body.style.direction = "ltr";
                    setLangeAr(false);
                    setLangeFr(true);
                    document.getElementById("BtnAr").style.display = "Block";
                    document.getElementById("BtnFr").style.display = "none";
                  }
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
              {ListPerson.map((item) => {
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
              })}
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
