import { useState } from "react"

function TodoApp() {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState("")

	const addTodo = () => {
		if (newTodo.trim() !== "") {
			setTodos([...todos, newTodo])
			setNewTodo("")
		}
	}

	const removeTodo = index => {
		const updatedTodos = [...todos]
		updatedTodos.splice(index, 1)
		setTodos(updatedTodos)
	}

	return (
		<div className="container">
			<h1>To-Do App</h1>
			<div>
				<input
					type="text"
					placeholder="Add a new task"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
				/>
				<button onClick={addTodo}>Add</button>
			</div>

			{/* display todo items  */}
			<h3>Todo List</h3>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{todo} <button onClick={() => removeTodo(index)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoApp
