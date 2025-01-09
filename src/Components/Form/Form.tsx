import { ChangeEventHandler, FormEventHandler } from "react";
import "./Form.css";

interface FormProps {
	handleSubmit: FormEventHandler;
	handleChange: ChangeEventHandler<HTMLInputElement>;
	input: string;
}

const Form = ({ handleSubmit, handleChange, input }: FormProps) => {
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="input">
				<span></span>
				<input id="addTodo" name="addTodo" type="text" value={input} onChange={(e) => handleChange(e)} placeholder="Create a new todo ..." />
			</div>
		</form>
	);
};

export default Form;
