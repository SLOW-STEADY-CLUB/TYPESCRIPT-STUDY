import React from 'react'
import styled from 'styled-components';

import Calendar from "react-calendar";


const Calendars : React.FC =() => {
  return (
    <div>
        <CustomCalenar/>
    </div>
  )
}

const CustomCalenar = styled(Calendar)`
  .react-calendar {
    width: 100%;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
}
`

export default Calendars