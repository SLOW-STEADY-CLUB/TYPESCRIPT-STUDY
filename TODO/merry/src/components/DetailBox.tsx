import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TodoState } from "../elem/interface";

const DetailBox: React.FC = () => {
  const navigate = useNavigate();
  const { day } = useParams();
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState(false);

  const getTodo = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    const dateList = response.data.filter((x: TodoState) => x.date === day);
    setTodoList(dateList);
  };

  const onClickRemoveBtn = (id: string) => {
    axios.delete(`http://localhost:3001/posts/${id}`);
  };

  const onClickOkBtn = (todo: TodoState) => {
    axios.put(`http://localhost:3001/posts/${todo.id}`, {
      id: todo.id,
      content: todo.content,
      date: todo.date,
      done: !todo.done,
    });
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      {todoList[0] === undefined && (
        <h1 style={{ marginLeft: "150px" }}>
          할 일이 없습니다! 추가해주세요!{" "}
        </h1>
      )}
      {todoList[0] !== undefined &&
        todoList.map((todo: TodoState) => {
          return (
            <Container key={todo.id} done={todo.done}>
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

const Container = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${props => (props.done ? "#ccd5ae" : "#fefae0")};
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
