import { useState } from "react"

const Todo = () => {
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
		<div className="container mt-5">
			<h1 className="text-center">To-Do App</h1>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Add a new task"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
				/>
				<div className="input-group-append">
					<button
						className="btn btn-success mx-3"
						type="button"
						onClick={addTodo}
					>
						Add Todo
					</button>
				</div>
			</div>

			{/* display todos  */}
			{todos.length > 1 ? <h3>Todo List</h3> : <p>No tasks in Todo</p>}

			<ul className="list-group">
				{todos.map((todo, index) => (
					<li
						key={index}
						className="list-group-item d-flex justify-content-between align-items-center"
					>
						{todo}
						<button
							className="btn btn-danger btn-sm"
							onClick={() => removeTodo(index)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todo
