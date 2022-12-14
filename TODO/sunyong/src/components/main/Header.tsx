import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';

const Header : React.FC = () => {

  const navigate = useNavigate()

  return (
    <Head className='array'>
      <h2>TODO List</h2>
      <p onClick={() => { navigate(`/createTodo`) }}><BiPlus /></p>
    </Head>
  )
}

const Head = styled.div`
    background-color: #9ED5C5;
    height: 5rem;
    color: white;
    gap: 2rem;
    font-size: 1.6rem;
    
    p {
      font-weight: bold;
      cursor: pointer;
      font-size: 2.6rem;
    }
`

export default Header