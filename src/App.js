import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    if (text.trim() === '') return;
    const now = new Date().toLocaleString();

    setTasks([...tasks, {
      id: Date.now(),
      text,
      completed: false,
      editing: false,
      createdAt: now,
      updatedAt: null
    }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    const updatedTime = new Date().toLocaleString();
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, text: newText, updatedAt: updatedTime, editing: false }
        : task
    ));
  };

  const toggleEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, editing: !task.editing } : task
    ));
  };

  const deleteDoneTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.completed;
    if (filter === 'todo') return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h2>📝 Ritik's To-Do List</h2>
      <TodoInput onAdd={addTask} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('todo')}>Todo</button>
      </div>
      <TodoList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
        onEditToggle={toggleEdit}
      />
      <div className="actions">
        <button onClick={deleteDoneTasks}>Delete done tasks</button>
        <button onClick={deleteAllTasks}>Delete all tasks</button>
      </div>
    </div>
  );
}

export default App;
