import React from "react";
import styled from "styled-components";
import MainCalender from "../components/MainCalender";
import Header from "../elem/Header";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainCalender />
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 100vh;
  align-items: center;
  background-color: #fefae0;
  margin: auto;
`;

export default Main;
