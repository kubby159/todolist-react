import React from "react";

function Todoitem({ todo, onRemove }) {
  const { id, content } = todo;

  return (
    <li className="todolist-list" key={todo.id}>
      ⭐️ {todo.content}
      <div className="control-list">
        <div className="complete btn-primary">
          <button>완료</button>
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
