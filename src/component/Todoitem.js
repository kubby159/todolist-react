import React from "react";

function Todoitem({ todo, onRemove, onToggle }) {
  const { id, content, checked } = todo;
  console.log(content);
  return (
    <li className="todolist-list" key={todo.id}>
      <span
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}
      >
        {content}
      </span>
      <div className="control-list">
        <div className="complete btn-primary">
          <button onClick={() => onToggle(id)}>완료</button>
        </div>

        <div className="delete btn-primary">
          <button key={todo.id} id={todo.id} onClick={() => onRemove(id)}>
            삭제
          </button>
        </div>
      </div>
    </li>
  );
}

export default Todoitem;
