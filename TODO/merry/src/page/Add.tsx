import React from "react";
import styled from "styled-components";
import AddBox from "../components/Add";
import Header from "../elem/Header";

const Add: React.FC = () => {
  return (
    <Container>
      <Header />
      <AddBox />
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

export default Add;
