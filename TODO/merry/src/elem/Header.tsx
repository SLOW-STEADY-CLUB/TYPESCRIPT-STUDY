import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Headers>
      <HeaderText style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Today Do it!
      </HeaderText>
      <AddBtn onClick={() => navigate("/add")}>
        <p>➕</p>
      </AddBtn>
    </Headers>
  );
};

const Headers = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 120px;
  background-color: #faedcd;
  color: #d4a373;
  font-size: 50px;
  font-family: sans-serif;
  font-weight: 900;
  margin-bottom: 50px;

  :hover {
    background-color: #d4a373;
    color: #faedcd;
  }
`;
const HeaderText = styled.p`
  margin-top: 0px;
  position: relative;
  top: 30px;
  left: 20px;
`;

const AddBtn = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #d4a373;
  color: #d4a373;
  position: relative;
  text-align: center;
  top: -90px;
  left: 350px;

  p {
    position: relative;
    top: -42px;
  }

  :hover {
    background-color: #d4a373;
  }
`;
export default Header;
