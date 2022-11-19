import React, { useState } from "react";
import List from "./List";
import { DoIt } from "./Interfaces";
import "./TodoItem.css";

const Card: React.FC = () => {
  const [cardBox, setCardBox] = useState<DoIt[]>([
    { id: "1", createAt: "22-11-18" },
    { id: "2", createAt: "22-11-19" },
  ]);
  return (
    <>
      <div>
        <div className="cardHeader">
          {/* <div>2022-11-19</div>
          <div>목요일</div> */}
          {cardBox.map(item => (
            <div className="cardBox" key={item.id}>
              {item.createAt}
              <List />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
