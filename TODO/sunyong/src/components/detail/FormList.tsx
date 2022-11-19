import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

import { useRecoilValue, useRecoilState } from 'recoil'
import { postItem } from 'recoil/atoms'
import { itemPost } from 'apis/api';


//달력
import DatePicker from 'react-datepicker';  // DatePicker 라는 컴포넌트도 가져오깅
import "react-datepicker/dist/react-datepicker.css"; 	// 스타일 맥이기
import { ko } from "date-fns/esm/locale";

const FormList : React.FC= () => {

    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());

    const [todo, setTodo] = useRecoilState(postItem);

    const del = (data: number) => {
        setTodo(todo.filter((a) => {
            return a.id !== data
        }))
    }

    return (
        <>
            <div>
                {/* <ReDatePicker
                    placeholderText="날짜를 선택해주세요"
                    selected={startDate}
                    onChange={setStartDate}
                    showPopperArrow={false}
                    locale={ko} // 한글로 변경
                    dateFormat="yyyy.MM.dd" // 시간 포맷 변경
                    minDate={new Date()}
                /> */}
            </div>
            <Sort className='array'>
                {
                    todo?.map((a : any) => {
                        return (
                            <ItemBox key={a.id}>
                                {a.title}
                                <p><MdDelete
                                    onClick={() => { del(a.id) }}
                                /></p>
                            </ItemBox>
                        )
                    })
                }
            </Sort>

            <ButtonArray className='array'>
            <Back className='array' 
            onClick={()=> {navigate('/')}}
            >
                <h2>돌아가기</h2>
            </Back>
            <Add className='array'
            onClick={()=> {itemPost(todo)}}
            >
                <h2>생성하기</h2>
            </Add>
            </ButtonArray>
        </>
    )
}

const Sort = styled.div`
    flex-direction: column;
`

const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 80%;
    height: 8rem;
    padding: 0px 2rem;
    margin-top: 3rem;

    border-radius: 2rem;
    box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.25);
    font-size: 2rem;
    font-weight: 800; 

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;

    }
    p {
        cursor: pointer;
    }
    
`

const ReDatePicker = styled(DatePicker)`
    width: 80%;
    height: 7rem;
    border-radius: 2rem;
    padding: 0px 2rem;
    border: none;
    box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.25);
    margin: 2rem 0px 0px 6.4rem;

    :focus{
    outline: 1px solid #EFF5F5;
    }
`

const ButtonArray = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10rem;
    cursor: pointer;
`

const Back = styled.div`
    width: 50%;
    height: 20rem;
    
`
const Add = styled.div`
    width: 50%;
    height: 20rem;
  
`

export default FormList