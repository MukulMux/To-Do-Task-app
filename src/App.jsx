import './App.css';
import Header from './Components/Header';
import ToDoParent from "./Components/ToDoParent";
import  Footer from "./Components/Footer";
import { useState,useEffect } from 'react';
import { AddToDo } from './Components/AddToDo';
import {BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import About from './Components/About';


function App() {

  let initialValue = [];
  if(localStorage.getItem("todoList")!==null){
    initialValue = JSON.parse(localStorage.getItem("todoList"))
  }

  const onDelete = (todo)=>{
    setTodoList(todoList.filter((e)=>{
      return e!==todo
    }))
  }

  const addToDo = (title,priority)=>{
    const newAdd = {
      priority : priority,
      title:title,
      id:todoList.length===0 ? 1 :  todoList[todoList.length-1].id+1
    }
    setTodoList([...todoList,newAdd]);
    
  }
  const [todoList,setTodoList] = useState(initialValue);
  useEffect(() => {
    localStorage.setItem("todoList",JSON.stringify(todoList));
  }, [todoList])
  
  return (
    <>
  <Router>
  <Header title="To-Do List" searchBarShow={false} />

  <Routes>
          <Route exact path="/" element={
          <>
              <AddToDo addToDo={addToDo}/>
             <ToDoParent todos={todoList} onDelete={onDelete}/>
             </>
          } >
            
          </Route>
          <Route exact path="/about"
            element={<About/>} />
        
        </Routes>

   
    <Footer/>
  </Router>
    </>
  );
}

export default App;
