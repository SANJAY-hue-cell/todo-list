import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCheckSquare } from "react-icons/fa";
import EditTodoTask from '../modals/EditTodoTask';

function Card({taskObj , index , deleteTask , updateListArray}) {

    const [show , setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const colors = [
        {
            primaryColor : 'rgb(243, 94, 243)' , 
            secondaryColor : 'rgb(175, 9, 175)'
        },
        {
            primaryColor : 'rgb(25, 218, 25)',
            secondaryColor : 'rgb(2, 107, 2)'
        },
        {
          primaryColor : 'lightblue',
          secondaryColor : 'rgb(11, 11, 95)'
        },
        {
          primaryColor : 'orange',
          secondaryColor : 'rgb(117, 78, 5)'
        },
        {
          primaryColor : 'rgb(223, 68, 68)',
          secondaryColor : 'rgba(190, 17, 17)'
        }
        
    ];


    const handleDelete = () => {
        deleteTask(index);
    }

    const updateTask = (obj) => {
        updateListArray(obj , index);
    }


  return (
    <div class="card card-wrapper" style={{width: '18rem'  }}>
    <div  class="card-body">
      <div className='card-top' style={{backgroundColor : colors[index%5].primaryColor}}>
      </div>
      <div   className="task-holder">
        <h5 class="card-title  card-header rounded" >
          {taskObj.Name}
        </h5>
        <h6 style={{color : colors[index%5].secondaryColor}} class="card-subtitle mb-2 px-3 ">
          {taskObj.Description}
        </h6>
        <div className="task-options fixed-bottom ">
           <FaEdit 
           title='Edit Todo Task'
            className='edit-btn'
            size={20}
            onClick={handleShow}
            />
            <RiDeleteBin6Fill 
            title='Delete Todo Task'
            onClick={handleDelete}  
            size={20} 
            className='delete-btn'
            />
        </div>
       
      </div>
     
     
     
    </div>
    <EditTodoTask show={show} handleClose={handleClose} handleShow={handleShow} updateTask={updateTask} taskObj={taskObj}/>
  </div>
  )
}

export default Card