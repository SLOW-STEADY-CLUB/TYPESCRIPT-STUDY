import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { itemGet } from 'apis/api'
import { useRecoilState } from 'recoil'
import { itemList } from 'recoil/atoms'

import Calendar from "react-calendar";
import "./Calendar.css"
import { eu } from "date-fns/esm/locale";


const Lists : React.FC = () => {

    const [list, setList] = useRecoilState(itemList);

    const [value, onChange] = useState(new Date());

    console.log(value)

    useEffect(() => {
        itemGet().then((res : any) => {
            setList(res)
        })
    }, [])

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
                        list?.map((a : any) => {
                            return (
                                <Item key={a.id}>
                                    <li>{a.title}</li>
                                    <input 
                                    onClick={()=> {itemGet()}}
                                    type={'checkbox'}
                                    />
                                </Item>
                            )
                        })
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
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        appearance: none;
        border: 1px solid #999;
    }

    input[type="checkbox"]:checked {
        background: #8EC3B0;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0px 1rem;

    height: 5rem;
`
export default Lists