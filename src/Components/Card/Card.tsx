import { ChangeEvent, ChangeEventHandler, FormEvent, SetStateAction } from "react";
import Button from "../Button/Button";
import check from '../../assets/images/icon-check.svg'
import "./Card.css";

interface CardProps {
	id: string;
	title: string;
	completed: boolean;
	deleteTodo: (id: string) => void;
	toggle: (id: string) => void;
}

const Card = ({ id, title, completed, deleteTodo, toggle }: CardProps) => {
	return (
		<div key={id} className="list-item">
			<label className="radio-button"><input type='radio' name='radio' value={title} checked={completed}onChange={() => toggle(id)} /> {title} <span><img src={check} alt="check mark" /></span></label>
			{/* <span>
				<Button onClick={() => deleteTodo(id)} text="X" />
			</span> */}
		</div>
	);
};

export default Card;
