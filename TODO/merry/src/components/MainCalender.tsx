import React, {useState} from "react";
import {Calendar} from "react-calendar";
import "react-calendar/dist/Calendar.css"

const MainCalender : React.FC = () => {
const [value, onChange] = useState(new Date())

return (
    <>

<div className="calendar-container"> 
   <Calendar value={value} onChange={onChange} />
</div>
</>)
}

export default MainCalender