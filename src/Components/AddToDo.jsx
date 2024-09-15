import React, { useState } from 'react'

export const AddToDo = (props) => {
    const [title,setTitle] = useState("");
    const [priority,setPriority] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !priority){
            alert("Please fill both the fields")
        }
        else{
        props.addToDo(title,priority)
        setPriority("");
        setTitle("");
        }

    }

  return (
    <div className='container my-3'>
        <h5 className='text-center'>Add To-Do tasks</h5>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">To-Do Title</label>
                <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title} id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="priority" className="form-label">Priority</label>
                <input type="text" className="form-control" onChange={(e)=>{setPriority(e.target.value)}}  value={priority} id="Priority"/>
            </div>
 
            <button type="submit" className="btn btn-sm btn-success">Add To-Do Task</button>
</form>
    </div>
  )
}
