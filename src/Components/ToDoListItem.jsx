import React from 'react';

function ToDoListItem({ todo, onDelete }) {
  return (
   <>
    <tr>
      {/* Render priority, title, and delete button as table cells */}
      <td>{todo.priority}</td>
      <td>{todo.title}</td>
      <td>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>
          Delete
        </button>
      </td>
    </tr>
    </>
  );
}

export default ToDoListItem;