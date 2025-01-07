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
			<input id="addTodo" name="addTodo" type="text" value={input} onChange={(e) => handleChange(e)} placeholder="Add New Todo" />
		</form>
	);
};

export default Form;
