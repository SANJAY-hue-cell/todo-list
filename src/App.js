import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import './App.css'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=''>
      <Toaster position='bottom-right' toastOptions={{duration : 2000}} />
      <TodoList />
    </div>
  )
}

export default App
