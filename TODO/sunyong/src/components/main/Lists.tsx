import React, { useEffect } from 'react'
import styled from 'styled-components'

import { itemGet } from 'apis/api'
import { useRecoilState } from 'recoil'
import { itemList } from 'recoil/atoms'

import "./Calendar.css"


const Lists : React.FC = () => {

    const [list, setList] = useRecoilState(itemList);

    useEffect(() => {
        itemGet().then((res : any) => {
            setList(res)
        })
    }, [])

    return (
        <>
            <Bar className='array'>
                <p>오늘 꼭 해내자 😃</p>
            </Bar>
            <Sort>
                <InProgress className='array'>
                    <p>~ ing</p>
                </InProgress>
                <Done className='array'>
                    <p>Done</p>
                </Done>
            </Sort>
            <Sort>
                <ItemBox>
                    {
                        list?.map((a : any) => {
                            return (
                                <Item key={a.id}>
                                    <p>{a.title}</p>
                                    <input 
                                    onClick={()=> {itemGet()}}
                                    type={'checkbox'}
                                    />
                                </Item>
                            )
                        })
                    }
                </ItemBox>
            </Sort>

        </>
    )
}

const Bar = styled.div`
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    font-weight: bold;
`

const Sort = styled.div`
    display: flex;
`

const InProgress = styled.div`
    width: 50%;
    height: 3rem;
    font-size: 1.4rem;
    font-weight: bold;
`

const Done = styled.div`
    width: 50%;
    height: 3rem;
    font-size: 1.4rem;
    font-weight: bold;
`

const ItemBox = styled.div`
    border: 1px solid red;
    width: 50%;
    height: 100%;
    font-size: 1.6rem;
    font-weight: 700;
    
    input {
        cursor: pointer;
        width: 1.6rem;
        height: 1.6rem;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
   padding: 1rem 0px;
`

export default Lists