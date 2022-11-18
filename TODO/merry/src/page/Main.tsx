import React from "react";
import MainCalender from "../components/MainCalender";
import Header from "../elem/Header";

const Main : React.FC = () =>{
    return (<div>
        <Header/>
        <MainCalender />
    </div>)
}

export default Main