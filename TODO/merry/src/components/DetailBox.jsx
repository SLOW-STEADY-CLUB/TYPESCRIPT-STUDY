import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailBox = () => {
  const navigate = useNavigate();
  const { day } = useParams();
  const [todoList, setTodoList] = useState([]);

  const getTodo = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    const dayList = response.data.map((todo) => {
      return (todo.date = todo.date.split("T")[0]);
    });
    const targetDay = dayList.find((x) => x === day);
    const dateList = response.data.find((x) => x.date === day);
    const doList = [dateList];
    setTodoList(doList);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const onClickRemoveBtn = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`);
    navigate("/");
  };

  return (
    <div>
      {todoList[0] === undefined && <p>할 일이 없습니다! 추가해주세요! </p>}
      {todoList[0] !== undefined &&
        todoList.map((todo) => {
          return (
            <Container>
              <ContentBox>
                <p>{todo.date}</p>
                <h4>{todo.content}</h4>
              </ContentBox>
              <button onClick={() => onClickRemoveBtn(todo.id)}>🗑</button>
            </Container>
          );
        })}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ContentBox = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default DetailBox;
