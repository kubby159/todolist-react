import React, { useState } from "react";
import Todoitem from "./Todoitem";

import "../scss/todolist/todolist.scss";
function Todolist() {
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);
  const onRemove = (id) => {
    setList(
      list.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const onToggle = (id) => {
    setList(
      list.map((todo) => {
        console.log(todo);
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  function listUp() {
    let newList = {
      id: list.length,
      content: content,
      checked: false,
    };

    setList([newList, ...list]);
    setContent(" ");
  }
  function changeContent(event) {
    setContent(event.target.value);
  }

  return (
    <div>
      <section className="todolist-container">
        <div className="todolist-textarea">
          <div className="todolist-typing">
            <p className="title">Todo-list</p>
            <input
              className="text-input"
              placeholder="Please type your plan"
              onChange={changeContent}
              value={content}
            ></input>
          </div>
          <div className="addList">
            <button className="btn" onClick={listUp}>
              목록추가
            </button>
          </div>
        </div>

        <div className="todolist-show">
          <ul className="todolist-box">
            {list.map((todo) => {
              return (
                <Todoitem todo={todo} onRemove={onRemove} onToggle={onToggle} />
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Todolist;
