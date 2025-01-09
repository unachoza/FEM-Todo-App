import { MouseEventHandler } from "react";
import "./Button.css";

interface ButtonProps {
	text: string | JSX.Element;
	onClick: MouseEventHandler;
}

const Button = ({ text, onClick }: ButtonProps) => {
	return <button role="button" onClick={onClick}>{text}</button>;
};

export default Button;
