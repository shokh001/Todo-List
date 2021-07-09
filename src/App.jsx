import React, { useState } from "react";
import './AppStyle.css'

const App = () => {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const [id, setId] = useState(1)

  const onInputChnage = (e) => {
    setInputValue(e.target.value);
  }

  const addTask = () => {
    if (inputValue !== ' ') {
      setId(id + 1);
      const newObj = { id: id, task: inputValue }
      inputValue && setTodo([...todo, newObj])
      setInputValue('')
    }
  }

  const doneList = (id) => {
    const newTodo = todo.filter((value) => value.id !== id)
    todo.filter((value) => value.id === id && setDone([...done, value]))
    setTodo(newTodo)
  }

  const deletedoneList = (id) => {
    const newDone = done.filter((value) => value.id !== id)
    setDone(newDone)
  }

  return (
    <div className="container">
      <div className='input-group'>
        <input onChange={onInputChnage} type="text" value={inputValue} placeholder='Add to task' />
        <button onClick={addTask} type='submit'>Add</button>
      </div>

      <div className="result">
        <div className="todo">
          <p>Todo List</p>
          {
            todo.map(({ id, task }) => {
              return (
                <div className='list' key={id}>
                  <p>{task}</p>
                  <i onClick={() => doneList(id)} class="fas fa-check"></i>
                </div>
              )
            })
          }
        </div>
        <div className="done">
          <p>Done List</p>
          {
            done.map(({ id, task }) => {
              return (
                <div className='list borderRed' key={id}>
                  <p>{task}</p>
                  <i onClick={() => deletedoneList(id)} class="fas fa-times"></i>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
