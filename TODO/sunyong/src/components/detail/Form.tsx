import React from 'react'
import styled from 'styled-components'

import { useState, useRef } from 'react'
import { postItem } from 'recoil/atoms'
import { useRecoilState } from 'recoil'
import moment from 'moment'

const Form: React.FC = () => {

  //id +1씩 추가
  const nextId = useRef(1);

  const [value, setValue] = useState(new Date());

  //recoil value
  const [todoList, setTodoList] = useRecoilState(postItem);
  console.log(todoList);
  
  
  //날짜 선택 useState
  const [inputs, setInputs] = useState({
    title: '',
    day: moment(value).format('YYYY-MM-DD'),
    isDone: false,
    id: 1,
  })


  //input value
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //recoil value로 추가하기
  const as = () => {
    if (inputs.title.length === 0 || todoList.length === 10) {
      alert('다시 확인해 주세요')
      return
    }
    setTodoList([...todoList, inputs])
    setInputs({
      title: '',
      isDone: false,
      id: nextId.current += 1,
      day: moment(value).format('YYYY-MM-DD')
    })
  }

  return (
    <>
      <div className='array'>
        <CustomInput
          type={'date'}
          name="day"
          onChange={onChange}
        />
      </div>

      <InputForm className='array'>
        <CustomInput
          name='title'
          type={"text"}
          onChange={onChange}
          placeholder="오늘의 TODO를 적어주세요 ! (최대 10개)"
        />
        <button onClick={() => { as() }}>추가하기</button>
      </InputForm>
    </>
  )
}

const InputForm = styled.div`
    margin-top: 2rem;
    height: 10rem;
    gap: 10rem;

    button {
        width: 6em;
        height: 3rem;
        border-radius: 0.8rem;
        border: 1px solid #EFF5F5;
        background-color: #8EC3B0;
        color: white;
        :hover {
          background-color: white;
          color: #8EC3B0;
        }
    }
`

const CustomInput = styled.input`
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
`

export default Form