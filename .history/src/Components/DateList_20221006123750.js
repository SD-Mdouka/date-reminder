import React from "react";
import { Col, Row } from "react-bootstrap";

const DateList = ({ LangeAr, LangeFr, List }) => {
  return (
    <Row className="justify-content-center">
      <Col className="" sm="8">
        <div className="rectangle p-2">
          {List.length !== 0 ? (
            List.map((item) => {
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
  );
};

export default DateList;
