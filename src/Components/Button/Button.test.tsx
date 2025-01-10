import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import X from "../../assets/images/icon-cross.svg";
import Button from "./Button";

describe("Button componenet", () => {
	it("renders button with correct text", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick} text="Click me" />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent("Click me");
	});

	it("displays image if an image is passed as text", () => {
		const handleClick = vi.fn();
		const icon: JSX.Element = <img src={X} alt="cross" />;
		render(<Button onClick={handleClick} text={icon} />);
		const buttonImage = screen.getByAltText("cross");
		expect(buttonImage).toBeInTheDocument();
	});

	it("triggers onClickHandler when clicked", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick} text="Click me" />);
		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("onMouseHover shows correct css behavior", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick} text="Click me" />);
		const buttonElement = screen.getByRole("button");
		fireEvent.mouseOver(buttonElement);
		expect(buttonElement).toHaveStyle({ fontWeight: "bold" });
	});
});
