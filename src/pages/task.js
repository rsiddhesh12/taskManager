import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo, toggleTodo  } from '../redux/reducers/taskManger';
import './task.css';
import notDone from '../images/notDone.png';
import checkMark from '../images/checkmark.png';
import deleteIcon from '../images/delete.png';
import childComponent from './childComponent/child';

const Task = () => {
  const todos = useSelector((state) => state.todos);
  const [error, setError] = useState('');
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();
    const [dataFromChild, setDataFromChild] = useState('');


    const handleDataFromChild = (data) => {
         setDataFromChild(data);
    };
    const addTask = () => {
      try {
        dispatch(addTodo({
          id: Date.now(),
          text: newTask,
          completed: false,
        }));
        setNewTask('');
        setError(''); // Clear any previous errors
      } catch (e) {
        setError(e.message); // Set error message
      }
    };

    const toggleTaskStatus = (id) => {
      dispatch(toggleTodo({
        id,
      }));    };

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const deleteTaskHandler = (id) => {
      dispatch(removeTodo({
        id,
      }));    };

    return (
        <>
        <div className="container">
            <h1 className="title">Tasks</h1>
            <div className="input-container">
                <input
                    className="input"
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Add a new task"
                    style={{ marginBottom: '5px' }} // Space between input and error message

                />
                <button className="button" onClick={addTask}>Add</button>
                {error && (
                    <p style={{ color: 'red', marginTop: '5px', fontSize: '12px' }}>
                      {error}
                    </p>
                  )}         
             </div>
            <div className="task-list">
                {todos.map(task => (
                    <div key={task.id} className="task-item">
                        <span
                            className={`task-text ${task.completed ? 'done' : ''}`}
                            onClick={() => toggleTaskStatus(task.id)}
                        >
                            {task.text}
                        </span>
                        <span 
                            className={`task-status ${task.completed ? 'done' : ''}`}
                            onClick={() => toggleTaskStatus(task.id)}
                        >
                            <img 
                                src={task.completed ? checkMark : notDone} 
                                alt={task.completed ? 'Completed' : 'Not Completed'}
                                className="task-status-icon"
                            />
                        </span>
                        <button className="icon-button delete" onClick={() => deleteTaskHandler(task.id)}>
                            <img src={deleteIcon} alt="Delete" className="delete-icon" />
                        </button>
                    </div>
                ))}          
            </div>
            
        </div>
        </>
    );
};

export default Task;
