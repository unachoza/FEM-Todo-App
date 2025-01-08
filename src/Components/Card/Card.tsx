import "./Card.css";

interface CardProps {
	id: string;
	title: string;
	completed: boolean;
	deleteTodo: (id: string) => void;
}

const Card = ({ id, title, completed, deleteTodo }: CardProps) => {
	return (
		<div key={id} className="list-item">
			<span>{completed}</span>
			{title}
			<span>
				<button onClick={() => deleteTodo(id)}>X</button>
			</span>
		</div>
	);
};

export default Card;
