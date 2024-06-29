import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditTodoTask({ show , handleClose , updateTask , taskObj}) {

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

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {} ;
    tempObj['Name'] = taskName ;
    tempObj['Description'] = description ;
    updateTask(tempObj);
    handleClose();
  }

  useEffect(()=> {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description)
  },[])

  return (
    <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <form >
            <div className="form-group mb-3">
                <label className='fw-bold mb-1'>
                    Title :
                </label>
                <input 
                type="text" 
                className='form-control'
                name='taskName'
                value={taskName}
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label className='fw-bold mb-1'>
                    Description :
                </label>
               <textarea 
               rows={4} 
               cols={40} 
               className='form-control'
               name='description'
               value={description}
               onChange={handleChange}
               ></textarea>
            </div>
         </form>
       </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
               Update
            </Button>
        </Modal.Footer>
    </Modal>
  
  )
}

export default EditTodoTask