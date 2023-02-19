import React, { useState } from 'react';
import './Todo.css';

function Task({ task }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
    >
      {task.title}
    </div>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue(' ');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
    >
      {task.title}
      <button style={{ background: 'red' }} onClick={() => removeTask(index)}>
        x
      </button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}
function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: 'Get some juice',
      completed: true,
    },
    {
      title: 'Do your workout',
      completed: true,
    },
    {
      title: 'Play with friends',
      completed: false,
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} removeTask={removeTask} key={index} />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
