import React from "react";
import styled from "styled-components";
import DetailBox from "../components/DetailBox";
import Header from "../elem/Header";

const Detail: React.FC = () => {
  return (
    <Container>
      <Header />
      <DetailBox />
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

export default Detail;
