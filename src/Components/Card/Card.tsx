import Button from "../Button/Button";
import check from "../../assets/images/icon-check.svg";
import X from "../../assets/images/icon-cross.svg";
import "./Card.css";

interface CardProps {
	id: string;
	title: string;
	completed: boolean;
	deleteTodo: (id: string) => void;
	toggle: (id: string) => void;
}

const Card = ({ id, title, completed, deleteTodo, toggle }: CardProps) => {

	const icon: JSX.Element = <img src={X} alt="cross"/>
	return (
		<div key={id} className="list-item">
			<label
				style={{
					textDecoration: completed ? "line-through" : "none",
				}}
				className="checkbox"
			>
				<input type="checkbox" name={title} value={title} checked={completed} onChange={() => toggle(id)} /> {title}{" "}
				<span>
					<img src={check} alt="check mark" />
				</span>
			</label>
			<span className="delete-button">
				<Button onClick={() => deleteTodo(id)} text={icon} />
			</span>
		</div>
	);
};

export default Card;
