import React from "react";

function Todoitem({ todo, onRemove, onToggle }) {
  const { id, content, checked } = todo;
  console.log(content);
  return (
    <li
      className="todolist-list"
      key={todo.id}
      style={{ borderColor: checked ? "#19a84c" : null }}
    >
      <span
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#19a84c" : "#000",
        }}
      >
        {content}
      </span>
      <div className="control-list">
        <div className="complete btn-primary">
          <button onClick={() => onToggle(id)}>
            {/* 완료 */}
            <i
              class="far fa-check-circle"
              style={{ color: checked ? "#19a84c" : null }}
            ></i>
          </button>
        </div>

        <div className="delete btn-primary">
          <button key={todo.id} id={todo.id} onClick={() => onRemove(id)}>
            {/* 삭제 */}
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default Todoitem;
