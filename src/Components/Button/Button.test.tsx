import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button componenet", () => {

	it("renders button with correct text", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick} text="Click me" />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent("Click me");
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
		expect(buttonElement).toHaveStyle({ border: "solid #3a6976aa" });
	});
});
