import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>

      {/* Add new task */}
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 flex-1 rounded-l"
        />
        <button onClick={addTask} className="bg-purple-600 text-white p-2 rounded-r">
          Add
        </button>
      </div>

      {/* Render the task list */}
      <ul className="mt-4">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
          ))
        ) : (
          <p className="text-gray-700">No tasks yet!</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
