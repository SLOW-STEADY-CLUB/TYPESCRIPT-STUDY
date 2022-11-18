import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header : React.FC = () => {
    const navigate = useNavigate()

    return (
        <Headers>
        <HeaderText>Today Do it!</HeaderText>
        <AddBtn onClick={()=>navigate("/add")}></AddBtn>
        </Headers>
        )
}

const Headers = styled.div`
    width: 800px;
    height: 120px;
    background-color: #cdb4db;
    color : white;
    font-size: 50px;
    font-family: sans-serif;
    font-weight: 900;
    position: fixed;
    margin-bottom: 50px;
`
const HeaderText = styled.p`
    margin-top: 0px;
    position: relative;
    top:30px;
    left: 20px;
`

const AddBtn = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border : 2px solid #ddd;
    position: relative;
    top:-95px;
    left: 350px;

    :hover {
        background-color: #8338ec;
    }
`
export default Header