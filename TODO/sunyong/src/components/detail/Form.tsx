import React from 'react'
import styled from 'styled-components'

import { useState, useRef } from 'react'
import { postItem } from 'recoil/atoms'
import { useRecoilState } from 'recoil'

const Form : React.FC = () => {

  const nextId = useRef(1);

  const [inputs, setInputs] =useState({
    title:'',
    isDone:false, 
    id: 1,
  })

  const [todoList, setTodoList] = useRecoilState(postItem);

  const onChange = (e : any) => {
    const { name, value } = e.target; 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const as = () => {
    if(inputs.title.length === 0) {
      alert('빈칸임')
      return
    }
    if(todoList.length === 10) {
      alert('최대 개수입니다')
      return;
    }
    setTodoList(todoList.concat(inputs))
    setInputs({
      title : '',
      isDone : false,
      id : nextId.current += 1
    })
  }

  return (
    <Test className='array'>
        <input
        name='title'
        type={"text"}
        onChange={onChange}
        />
        <button onClick={()=> {as()}}>추가하기</button>
    </Test>
  )
}

const Test = styled.div`
    margin-top: 2rem;
    background-color: #497174;
    height: 10rem;
    gap: 10rem;

    input {
        width: 30rem;
        height: 4rem;
        border-radius: 1rem;
        border: 2px solid #EFF5F5;
        padding: 0px 1rem;
        :focus{
        outline: 1px solid #EFF5F5;
        }
        :hover {
        border: 1px solid #EFF5F5;
        }
    }

    button {
        width: 6em;
        height: 3rem;
        border-radius: 0.4rem;
        border: 1px solid #EFF5F5;
    }
`

export default Form