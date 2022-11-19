import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface TodoState {
  id: string;
  content: string;
  date: string;
  done: boolean;
}

interface Data {
  content: string;
  date: string;
}

const AddBox: React.FC = () => {
  const navigate = useNavigate();

  const addTodoList = async () => {
    const date = getValues("date");
    const content = getValues("content");
    const todo: TodoState = {
      id: nanoid(),
      done: false,
      content,
      date: date.split("T")[0],
    };
    axios.post("http://localhost:3001/posts", todo).then(() => navigate("/"));
  };

  const {
    register,
    getValues,
    formState: { errors, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({ criteriaMode: "all", mode: "onChange" });

  return (
    <Container onSubmit={handleSubmit(addTodoList)}>
      <TimeInput
        type="datetime-local"
        aria-invalid={!isDirty ? undefined : errors.date ? "true" : "false"}
        {...register("date", {
          required: "날짜를 정해주세요",
        })}
      />
      <TextBox
        placeholder="할 일을 입력해주세요!"
        {...register("content", {
          required: "오늘의 할일을 추가해주세요!",
          maxLength: {
            value: 20,
            message: "할일을 20자 이하로 작성해주세요",
          },
        })}
      />
      <CheckBtn type="submit" disabled={isSubmitting}>
        ✔️
      </CheckBtn>
    </Container>
  );
};

const Container = styled.form`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 150px;
`;
const TimeInput = styled.input`
  height: 40px;
  border-radius: 12px;
  margin: 20px;
  padding: 10px;
`;
const TextBox = styled.input`
  display: block;
  width: 400px;
  height: 30px;
  border-radius: 20px;
  padding: 20px;

  :focus {
    outline: 1px solid #d4a373;
  }
`;

const CheckBtn = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #faedcd;
  border: 0px;
  margin: 10px auto;

  :hover {
    background-color: #d4a373;
  }
`;

export default AddBox;
