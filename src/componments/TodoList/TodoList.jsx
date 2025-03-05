import data from "./data.js";
import "./TodoList.css";
import React from 'react'
import { useState } from "react";
const TodoList = () => {
  const [selected, setSelected] = useState(null);
  const [isMultiselect, setIsMultiselect] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const singleOnClick = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  const multiOnclick = (id) => {
    let newList = [...selectedList];
    const index = newList.indexOf(id);
    console.log(index);
    if (index === -1) {
      newList.push(id);
    } else {
      newList.splice(index, 1);
    }
    setSelectedList(newList);
  };

  return (
    <div className="todo_root">
      <button onClick={() => setIsMultiselect(!isMultiselect)}>
        Enable Multi Selection
      </button>
      {isMultiselect ?
        <><div>Multi Selection is Enabled</div>
          <div>{selectedList}</div></>
        :
        <div>Multi Selection is not Enabled</div>
      }
      <ul className="todo_ul">
        {data.map((item) => (
          <li className="todo_li"
            onClick={
              isMultiselect
                ? () => multiOnclick(item.id)
                : () => singleOnClick(item.id)
            }
            key={item.id}
          >
            <div className="list_title">
              <div>{item.title}</div>
              <div>+</div>
            </div>
            {
              isMultiselect ?
                selectedList.includes(item.id) && (
                  <div className="list_content">{item.content}</div>
                )
                : selected === item.id && (
                  <div className="list_content">{item.content}</div>
                )
            }

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList