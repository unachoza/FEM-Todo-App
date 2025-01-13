import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import ToggleSetting from "./Components/ToggleSetting/ToggleSetting";
import { defaultTodos } from "./mocks/defaultData";
import "./App.css";

type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

type FilterState = "active" | "completed" | "all";

function App() {
	const [completed, setCompleted] = useState<boolean>(false);
	const [input, setInput] = useState<string>("");
	const [filteredState, setFilteredState] = useState<FilterState>("all");
	const [todos, setTodos] = useState<Todo[]>(defaultTodos);

	// const [todos, setTodos] = useState<Todo[]>(() => {
	// 	const localValue = localStorage.getItem("ITEMS");
	// 	if (localValue == null) return defaultTodos;
	// 	return JSON.parse(localValue);
	// });

	// useEffect(() => {
	// 	localStorage.setItem("ITEMS", JSON.stringify(todos));
	// }, [todos]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		addTodo();
		setInput("");
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
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

	const clearCompletedTodos = () => {
		const updatedTodos = todos.filter((todo) => todo.completed === false);
		setTodos(updatedTodos);
	};

	const toggleTodo = (id: string): void => {
		const selectedTodo = todos.filter((todo) => todo.id === id);
		selectedTodo[0].completed = !completed;
		setCompleted((prevState) => !prevState);
	};

	const displayTodos = (filteredState: string): Todo[] => {
		let filteredTodos: Todo[] = todos;
		if (filteredState === "active") {
			return (filteredTodos = todos.filter((todo) => todo.completed === false));
		}
		if (filteredState === "completed") {
			return (filteredTodos = todos.filter((todo) => todo.completed === true));
		}
		if (filteredState === "all") {
			return filteredTodos;
		}
		return (filteredTodos = todos);
	};

	return (
		<>
			<div className="container">
				<div className="header">
					<h1>TODO</h1>
					<ToggleSetting />
				</div>
				<Form handleSubmit={handleSubmit} handleChange={handleInputChange} input={input} />
				<div className="list-container">
					{displayTodos(filteredState)?.map((item) => {
						const { id, title, completed } = item;
						return <Card key={id} id={id} title={title} completed={completed} deleteTodo={deleteTodo} toggle={toggleTodo} />;
					})}
					<div className="list-item controls-container">
						<div className="remaining-todos">{todos.filter((todo) => todo.completed === false).length} items left</div>
						<div className="filter-button-group">
							<Button onClick={() => setFilteredState("all")} text="All" />
							<Button onClick={() => setFilteredState("active")} text="Active" />
							<Button onClick={() => setFilteredState("completed")} text="Completed" />
						</div>
						<Button onClick={() => clearCompletedTodos()} text="Clear Completed" />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
