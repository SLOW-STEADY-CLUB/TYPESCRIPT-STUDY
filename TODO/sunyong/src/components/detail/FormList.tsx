import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil'
import { postItem } from 'recoil/atoms'
import { itemPost } from 'apis/api';
import { Todo } from 'components/TypeList';

// react icons
import { MdDelete } from 'react-icons/md';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { AiFillFileAdd } from 'react-icons/ai';

import Calendar from 'react-calendar';

const FormList: React.FC = () => {

    const navigate = useNavigate();

    const [todo, setTodo] = useRecoilState(postItem);
    const [value, onChange] = useState(new Date());

    let aaa = {day : value.toDateString()}
    console.log(aaa)

    //삭제 함수
    const Del = (data: number) => {
        setTodo(todo.filter((a) => {
            return a.id !== data
        }))
    }

    return (
        <>
            <div>
                <Calendar
                    value={value}
                    onChange={onChange}
                />
            </div>
            <Sort className='array'>
                {
                    todo?.map((a: Todo) => {
                        return (
                            <ItemBox key={a.id}>
                                {a.title}
                                <p><MdDelete
                                    onClick={() => { Del(a.id) }}
                                /></p>
                            </ItemBox>
                        )
                    })
                }
            </Sort>

            <ButtonArray className='array'>
                <Back className='array'
                    onClick={() => { navigate('/') }}
                >
                    <h2><BsFillBackspaceFill /></h2>
                </Back>
                <Add className='array'
                    onClick={() => {
                        itemPost(todo).then((res) => {
                            if (res) {
                                navigate('/')
                            } else {
                                alert('생성에 실패했습니다')
                            }
                        })
                    }}
                >
                    <h2><AiFillFileAdd /></h2>
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

const ButtonArray = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
    cursor: pointer;
    font-size: 1.6rem;

`

const Back = styled.div`
    width: 50%;
    height: 5rem;
`
const Add = styled.div`
    width: 50%;
    height: 5rem;
`

export default FormList;