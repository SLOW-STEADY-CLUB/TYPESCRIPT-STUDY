import React, { useState } from "react";
import styled from "styled-components";
import { ListType } from "./Interfaces";
import trash from "./assets/trash.png";
const List: React.FC = () => {
  const [doList, setDoList] = useState<ListType[]>([
    { list: "타입스크립트 공부하기", listId: "1", status: "done" },
    { list: "자바스크립트 책읽기", listId: "2", status: "ing" },
    { list: "드라이브하기", listId: "3", status: "ing" },
  ]);

  return (
    <div>
      <ul>
        {doList.map(item => (
          <div key={item.listId}>
            <StConent>
              <CheckBox type="checkbox" />
              {item.list}
              <ImgTrash />
            </StConent>
          </div>
        ))}
      </ul>
    </div>
    // <>
    //   {/* map */}
    //   <ul>
    //     <CheckBox type="checkbox" />
    //     <li>타입스크립트 공부하기</li>
    //     <li>자바스크립트 책읽기</li>
    //   </ul>
    // </>
  );
};

const StConent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: orange;
  width: 300px;
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  :checked {
    background-image: url(${trash});
    width: 1em;
    height: 1em;
    /* background: #343d34; */
    background-size: cover;

    /* border: none; */
  }
`;

const ImgTrash = styled.div`
  background-image: url(${trash});
  width: 1em;
  height: 1em;
  /* background-repeat: no-repeat; */
  background-size: cover;
  /* position: absolute;
  right: 0px;
  top: 0; */
`;

export default List;
