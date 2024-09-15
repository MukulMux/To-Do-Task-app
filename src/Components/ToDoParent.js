import React from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoParent({ todos, onDelete }) {
  return (
    <div className="container todoSec my-3">
      <h3 className="text-center my-3">List of To-Do tasks</h3>
     {  todos.length> 0 ?
         <table className='table'>
         <thead>
           <tr>
             {/* Add table header cells for priority, title, and delete */}
             <th>Priority</th>
             <th>Title</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
           {todos.map((todo) => (
             <ToDoListItem key={todo.id} todo={todo} onDelete={onDelete} />
           ))}
         </tbody>
       </table> : <div className='text-center mt50'> No tasks in the list </div>
     }
    </div>
  );
}

export default ToDoParent;