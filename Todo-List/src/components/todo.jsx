import React, { useState } from 'react'
import '../App.css'; // or '../index.css' if your css is in src/

const Todo = () => {
  // PART 4 - State for tasks
  const [tasks, settasks] = useState([
    { id: 1, text: "complete assignment5", completed: false }
  ])

  // PART 5 - State for input
  const [newTask, setnewTask] = useState("")
  console.log(newTask)

  // PART 6 - Function 1: handleChange
  const handleChange = (event) => {
    setnewTask(event.target.value)
  }

  // Function 2: handleAdd
  const handleAdd = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false
      }
      settasks([...tasks, newTaskObj])
      setnewTask("")
    }
  }

  // Function 3: handleCheck
  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    settasks(updatedTasks)
  }

  // Function 4: handleDelete
  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    settasks(filteredTasks)
  }

  // PART 7 - UI
  return (
    <div className="todo-container">
      <h1>To do list</h1>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheck(task.id)}
            />
            <span className={task.completed ? "check" : ""}>
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => handleDelete(task.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo