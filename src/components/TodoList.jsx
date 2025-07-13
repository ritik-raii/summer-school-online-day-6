import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onToggle, onDelete, onEdit, onEditToggle }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onEditToggle={onEditToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
