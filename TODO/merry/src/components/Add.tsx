import React from "react";
import styled from "styled-components"

const AddBox:React.FC = () => {


    return (
        <Container>
            <TextBox/>
            <CheckBtn>✔️</CheckBtn>
        </Container>
    )
}

const Container = styled.form`
    width: 500px;
    display: flex;
  align-items: center;
  justify-content: center;
 flex-direction: column;

`

const TextBox = styled.textarea`
    display: block;
    width: 400px;
    height: 1300px;
`

const CheckBtn = styled.button`
width: 100px;
height: 100px;
border-radius: 50%;
    background-color: #ffc8dd;
    border: 0px;
    margin: 10px auto;
    
    :hover{
        background-color: #ffafcc;
    }
`

export default AddBox