import axios from "axios";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

const MainCalender = () => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const [dot, setDot] = useState([]);

  const getTodo = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    const res = response.data.map((todo) => {
      return (todo.date = todo.date.split("T")[0]);
    });
    setDot(res);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <CalendarContainer>
      <Calendar
        value={value}
        onChange={onChange}
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        onClickDay={(date) => {
          navigate(`/detail/${moment(date).format("YYYY-MM-DD")}`);
        }}
        showNeighboringMonth={false}
        tileContent={({ date, view }) => {
          if (dot.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return <Dot></Dot>;
          }
        }}
      />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  max-width: 700px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;

  .react-calendar {
    width: 600px;
    max-width: 100%;
    height: 500px;
    background: #fefae0;
    border: 0px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    font-size: large;
  }

  .react-calendar__tile--active {
    background: #e9edc9;
    color: black;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #e9edc9;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 35px 15px;
    background: none;
    text-align: center;
    line-height: 16px;
    font-size: large;
  }
`;

const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: #ccd5ae;
  border-radius: 50%;
  display: flex;
  margin-left: 1px;
`;
export default MainCalender;
