import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck, FaSave } from 'react-icons/fa';

function TodoItem({ task, onToggle, onDelete, onEdit, onEditToggle }) {
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    onEdit(task.id, editText);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {task.editing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="todo-actions">
            <button onClick={handleSave}><FaSave /></button>
          </div>
        </>
      ) : (
        <>
          <div style={{ flex: 1 }}>
            <span onClick={() => onToggle(task.id)}>{task.text}</span>
            <div className="task-time">
              <small>🕒 Added: {task.createdAt}</small><br />
              {task.updatedAt && <small>✏️ Edited: {task.updatedAt}</small>}
            </div>
          </div>
          <div className="todo-actions">
            <button onClick={() => onEditToggle(task.id)}><FaEdit /></button>
            <button onClick={() => onToggle(task.id)}><FaCheck /></button>
            <button onClick={() => onDelete(task.id)}><FaTrash /></button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
