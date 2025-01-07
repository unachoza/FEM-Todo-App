import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

function App() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState<Todo[]>([]);
	const [input, setInput] = useState<string>("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		addTodo();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setInput(e.target.value);
	};

	const addTodo = () => {
		const newTodos = [
			...todos,
			{
				id: uuidv4(),
				title: input,
				completed: false,
			},
		];
		setTodos(newTodos);
	};

	return (
		<>
			<h1>Todo</h1>

			<div>Form</div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input id="addTodo" name="addTodo" type="text" value={input} onChange={(e) => handleChange(e)} placeholder="Add New Todo" />
			</form>
			<div>List of Todos</div>
			<div className="list-container">
				<div className="list-item">
					<span>O</span>Read <button>X</button>
				</div>
				<div className="list-item">Sleep</div>
				<div className="list-item">Eat</div>
				<div className="list-item">Drink Water</div>
			</div>
			{/* <div>Footer with controls</div> */}
			<div className="control-container">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
				<button>Clear Completed</button>
			</div>
		</>
	);
}

export default App;
