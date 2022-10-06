import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DateAction } from "./Components/DateAction";
import { DateCount } from "./Components/DateCount";
import { ListPerson } from "./data";
import DateList from "./Components/DateList";

function App() {
  const [LangeAr, setLangeAr] = useState(false);
  const [LangeFr, setLangeFr] = useState(true);
  const [List, setList] = useState(ListPerson);
  //Action Vide
  const VideList = () => {
    setList([]);
  };
  const params = {
    LangeAr,
    LangeFr,
    setLangeAr,
    setLangeFr,
    List,
    setList,
    VideList,
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DateCount {...params} />
        <DateList {...params} />
        <DateAction {...params} />
      </Container>
    </div>
  );
}

export default App;