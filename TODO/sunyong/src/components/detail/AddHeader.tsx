import React from 'react'
import styled from 'styled-components'

const AddHeader:React.FC = () => {
  return (
    <Head className='array'>
        <h2>꼭 날짜를 먼저 선택해주세요 !</h2>
    </Head>
  )
}

const Head = styled.div`
    background-color: #9ED5C5;
    height: 5rem;
    color: white;
    font-size: 1.6rem;

    margin-bottom: 3rem;
`

export default AddHeader