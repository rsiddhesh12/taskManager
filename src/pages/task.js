import React, { useState, useEffect } from 'react';
import './task.css';
import {setTask, getTasks} from '../utils/utils'
import notDone from '../images/notDone.png'
import checkMark from '../images/checkmark.png'
import deleteIcon from '../images/delete.png'

const Task = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks){
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    setTask(tasks);
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
      setNewTask('');
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Tasks</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button className="button" onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map(task => (
         <div key={task.id} className="task-item">
         <span
           className={`task-text ${task.done ? 'done' : ''}`}
           onClick={() => toggleTaskStatus(task.id)}
         >
           {task.text}
         </span>
         <span 
           className={`task-status ${task.done ? 'done' : ''}`}
           onClick={() => toggleTaskStatus(task.id)}
         >
           {/* Display images based on task status */}
           <img 
             src={task.done ? checkMark : notDone} 
             alt={task.done ? 'Completed' : 'Not Completed'}
             className="task-status-icon"
           />
         </span>
         <button className="icon-button delete" onClick={() => deleteTask(task.id)}>
           <img src={deleteIcon} alt="Delete" className="delete-icon" />
         </button>
       </div>       
        ))}
      </div>
    </div>
  );
};

export default Task;
