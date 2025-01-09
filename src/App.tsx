import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import backgroundImage from "./assets/images/bg-desktop-light.jpg";
import "./App.css";

type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

function App() {
	const [completed, setCompleted] = useState<boolean>(false);
	const [input, setInput] = useState<string>("");

	const [todos, setTodos] = useState<Todo[]>(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue == null) return [];
		return JSON.parse(localValue);
	});

	
	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos));
	}, [todos]);

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

	const deleteTodo = (id: string): void => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const toggleTodo = (id: string): void => {
		console.log("clicked");
		const selectedTodo = todos.filter((todo) => todo.id === id);
		selectedTodo[0].completed = !completed;
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		console.log({ todoIndex });
		console.log(selectedTodo[0]);
		// const updatedTodos = [...todos, !todos[todoIndex].completed]

		setCompleted((prevState) => !prevState);
	};

	return (
		<>
			<div className="container">
				<h1>TODO</h1>
				<Form handleSubmit={handleSubmit} handleChange={handleChange} input={input} />
				<div className="list-container">
					{todos.map((item) => {
						const { id, title, completed } = item;
						return <Card key={id} id={id} title={title} completed={completed} deleteTodo={deleteTodo} toggle={toggleTodo} />;
					})}
				</div>
				<div className="control-container">
					<Button onClick={() => console.log()} text="All" />
					<Button onClick={() => console.log()} text="Active" />
					<Button onClick={() => console.log()} text="Completed" />
					<Button onClick={() => console.log()} text="Clear Completed" />
				</div>
			</div>
		</>
	);
}

export default App;
