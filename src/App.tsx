import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Components/Form/Form";
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
		setInput("");
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

	const deleteTodo = (id: string) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	return (
		<>
			<h1>Todo</h1>

			<div>Form</div>
			<Form handleSubmit={handleSubmit} handleChange={handleChange} input={input} />
			<div>List of Todos</div>
			<div className="list-container">
				{todos.map((item) => {
					return (
						<div key={item.id} className="list-item">
							{!todos.length && <div className="list-item">no todos</div>}
							<span>o</span>
							{item.title}
							<span>
								<button onClick={() => deleteTodo(item.id)}>X</button>
							</span>
						</div>
					);
				})}
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
