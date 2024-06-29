import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';


function CreateTask({ show , handleClose ,handleShow ,save}) {

  const [taskName , setTaskName ] = useState('');
  const [description , setDescription ] = useState('');

  const handleChange = (e) => {
    const {name , value} = e.target ;
    if(name === 'taskName'){
      setTaskName(value);
    }else{
      setDescription(value);
    }
  }

  const handleSave  = () => {
     let taskObj = {};
     taskObj['Name']  = taskName ;
     taskObj['Description'] = description;
     if(!taskName ){
      toast.error('Title is must to create a Todo task');
     }else if(description.length >= 60){
      toast.error('Description should not be more than 30 characters');
     }else{
      save(taskObj);
      setTaskName('');
      setDescription('');
      toast.success('Todo added successfully !');
     }
    
   }


  return (
    <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <form >
            <div className="form-group mb-3">
                <label className='fw-bold mb-1'>
                    Title :
                </label>
                <input 
                title='Add a task Title'
                type="text" 
                className='form-control'
                name='taskName'
                value={taskName}
                onChange={handleChange}
                placeholder='i.e.,Hw'
                />
            </div>
            <div className="form-group mb-3">
                <label className='fw-bold mb-1'>
                    Description :
                </label>
               <textarea 
               title='Add a task description'
               rows={4} 
               cols={40} 
               className='form-control'
               name='description'
               value={description}
               onChange={handleChange}
               placeholder='i.e.,Do Hw in the evening'
               ></textarea>
            </div>
         </form>
       </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button title='Add Task' variant="primary" onClick={handleSave}>
               Create
            </Button>
        </Modal.Footer>
    </Modal>
  
  )
}

export default CreateTask