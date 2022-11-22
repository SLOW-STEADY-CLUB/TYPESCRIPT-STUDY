import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { itemDelete, itemGet, itemPut } from 'apis/api'
import { useRecoilState } from 'recoil'
import { itemList } from 'recoil/atoms'
import { MdDelete } from 'react-icons/md';

import Calendar from "react-calendar";
import "./Calendar.css"
import moment from 'moment'

const Lists : React.FC = () => {

    const [list, setList] = useRecoilState(itemList);    
    const [value, onChange] = useState(new Date());
    const [test, setTest] =useState(false)

    const selectDay = moment(value).format("YYYY-MM-DD")
    
    useEffect(() => {
        itemGet().then((res : any) => {
            setList(res)
        })
    }, [test])

    return (
        <>
        <Calendar
        value={value}
        onChange={onChange}
        />
            <Bar className='array'>
                <p>오늘의 TODO 😃</p>
            </Bar>
            <div className='array'>
                <ItemBox>
                {
                    list.length === 0 ? 
                        <Item>
                            <p>오늘의 TODO를 작성해주세요</p>
                        </Item>
                 : <>
                    {
                        list?.map((a : any) => {
                            return (
                                <Item key={a.id}>
                                    <li>{a.title}</li>
                                    <div>
                                         <label
                                        onClick={()=> {itemDelete(a.id); setTest(!test)}}
                                         ><MdDelete /></label>
                                        <input 
                                        onClick={()=> {itemPut(a)}}
                                        type={'checkbox'}
                                        />
                                    </div>
                                </Item>
                            )
                        })
                    }</>
                } 
                </ItemBox>
            </div>
        </>
    )
}

const Bar = styled.div`
    height: 4rem;
    font-size: 1.4rem;
    font-weight: bold;
`

const ItemBox = styled.div`
    width: 90%;
    height: 100%;
    font-size: 1.6rem;
    font-weight: 700;
    box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.25);
    
    input {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        border: 1px solid #999;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0px 1rem;
    height: 5rem;

    p {
        color: gray;
    }

    label {
        cursor: pointer;
    }

    input {
        margin-left: 2rem;
    }
`
export default Lists