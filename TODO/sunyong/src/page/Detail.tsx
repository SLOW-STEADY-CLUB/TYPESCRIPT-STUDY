import React from 'react'
import {AddHeader, Form, FormList } from 'components/detail'

const Detail : React.FC= () => {
  return (
    <div className='layout'>
        <AddHeader/>
        <Form />
        <FormList />
    </div>
  )
}

export default Detail