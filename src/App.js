import React, { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');

  const addTodo = () => {
    if (newTodo === '') {
      alert('Input is empty.');
    } else {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedTodo(todos[index]);
  };

  const saveEditing = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editedTodo;
    setTodos(newTodos);
    setEditingIndex(null);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col bg-slate-800">
      <h1 className="text-white text-7xl">Todo App React</h1>
      <div className="input p-10 w-10/12">
        <input
          className="px-8 py-3 text-left outline-none border-none sm:w-full"
          type="text"
          placeholder="Type Todo . . ."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="px-6 py-3 bg-green-500 text-white font-bold cursor-pointer sm:w-full"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="w-4/6 flex justify-center items-center flex-col">
        {todos.map((todo, index) => (
          <li
            className="w-full text-slate-800 bg-white px-6 py-3 my-2 rounded-sm relative"
            key={index}
          >
            {index === editingIndex ? (
              <input
                className="px-2 py-1 rounded-sm border-2 outline-1"
                type="text"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    saveEditing(index);
                  }
                }}
              />
            ) : (
              <>
                {index} - {todo}
                <i
                  className="bx bx-edit absolute right-[2.25rem] top-2 font-bold text-2xl cursor-pointer"
                  onClick={() => startEditing(index)}
                ></i>
              </>
            )}
            <i
              className="bx bxs-x-circle text-red-500 absolute right-2 top-2 font-bold text-2xl cursor-pointer"
              onClick={() => removeTodo(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
