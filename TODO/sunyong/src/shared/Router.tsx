import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Detail } from "page";

const Router : React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createTodo" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Router;
