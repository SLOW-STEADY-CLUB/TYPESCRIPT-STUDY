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
    const dayList = response.data.map(todo => {
      return (todo.date = todo.date.split("T")[0]);
    });
    const targetDay = dayList.find(x => x === day);
    const dateList = response.data.filter(x => x.date === day);
    setTodoList(dateList);
  };

  useEffect(() => {
    getTodo();
  }, [todoList]);

  const onClickRemoveBtn = id => {
    axios.delete(`http://localhost:3001/posts/${id}`);
    navigate("/");
  };

  const onClickOkBtn = todo => {
    axios.put(`http://localhost:3001/posts/${todo.id}`, {
      id: todo.id,
      content: todo.content,
      date: todo.date,
      done: !todo.done,
    });
  };

  return (
    <div>
      {todoList[0] === undefined && <p>할 일이 없습니다! 추가해주세요! </p>}
      {todoList[0] !== undefined &&
        todoList.map(todo => {
          return (
            <Container key={todo.id} isDone={todo.done}>
              <ContentBox>
                <p>{todo.date}</p>
                <h4>{todo.content}</h4>
              </ContentBox>
              <RemoveBtn onClick={() => onClickOkBtn(todo)}>✓</RemoveBtn>
              <RemoveBtn onClick={() => onClickRemoveBtn(todo.id)}>🗑</RemoveBtn>
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
  background-color: ${props => (props.isDone ? " #ccd5ae" : "#fefae0")};
`;

const ContentBox = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 12px;
  }

  h4 {
    font-size: 20px;
  }
`;

const RemoveBtn = styled.button`
  width: 40px;
  height: 40px;
  font-size: 30px;
  border: 0px;
  background-color: transparent;
`;

export default DetailBox;
