import React, { useEffect, useState } from 'react'
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import toast from 'react-hot-toast';

function TodoList({}) {

    const [show, setShow] = useState(false);
    const [todoList , setTodoList ] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const saveTask = (taskObj) => {
    let tempList = todoList ;
    tempList.push(taskObj);
    localStorage.setItem('todoTaskList' , JSON.stringify(tempList));
    setTodoList(tempList);
    handleClose();
  }

  const deleteTask = (index) => {
    let tempList = [...todoList];
    tempList.splice(index , 1);
    localStorage.setItem('todoTaskList' , JSON.stringify(tempList));
    setTodoList(tempList);
    toast.success('Todo deletion successfull')
  }

  const updateListArray = (obj , index) => {
    let templist = [...todoList];
    templist[index] = obj ;
    localStorage.setItem('todoTaskList' , JSON.stringify(templist))
    setTodoList(templist);
    toast.success('Todo Updated Successfully')
  }

  useEffect(()=>{
    let savedTodo = localStorage.getItem('todoTaskList');
    if(savedTodo){
        let obj = JSON.parse(savedTodo);
        setTodoList(obj);
    }
    
  })

  return (
    <>
    <div className='text-center w-100 pt-5 todo-bg' style={{ height:'200px' }}>
        <h3 className='fw-bold'>
            Todo List
        </h3>
        <button type="button" className='btn btn-primary' onClick={handleShow} >
            Create Task
        </button>
    </div>
    <div className="text-center">
    </div>
    <div className='todo-list-container'>
        {todoList.map((obj , index) => 
         <span>
            <Card index={index} taskObj={obj} deleteTask={deleteTask} updateListArray={updateListArray} />
         </span>
        )}
    </div>
    <CreateTask show={show} handleClose={handleClose} handleShow={handleShow} save={saveTask} />
    </>
  )
}

export default TodoList