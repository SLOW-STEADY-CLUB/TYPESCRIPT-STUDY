import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./page/Add";
import Detail from "./page/Detail";
import Main from "./page/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
      <Route path="/detail/:day" element={<Detail />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
