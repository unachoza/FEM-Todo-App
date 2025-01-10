import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Card from "./Card";

describe("Card Components", () => {
	const mockProps = {
		id: "1",
		title: "Test Todo",
		completed: false,
		toggle: vi.fn(),
		deleteTodo: vi.fn(),
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("renders card with correct title", () => {
		render(<Card {...mockProps} />);
		expect(screen.getByText("Test Todo")).toBeInTheDocument();
	});

	it("calls deleteTodo with correct id when delete button is clicked", () => {
		render(<Card {...mockProps} />);

		const deleteButton = screen.getByAltText("cross");
		fireEvent.click(deleteButton);

		expect(mockProps.deleteTodo).toHaveBeenCalledTimes(1);
		expect(mockProps.deleteTodo).toHaveBeenCalledWith("1");
	});
	
	it("renders with the correct CSS class", () => {
		const { container } = render(<Card {...mockProps} />);
		expect(container.firstChild).toHaveClass("list-item");
	});

	it("displays completion status css", () => {
		const mockProps = {
			id: "1",
			title: "Test Completed Todo",
			completed: true,
			toggle: vi.fn(),
			deleteTodo: vi.fn(),
		};
		render(<Card {...mockProps} />);
		const listItem = screen.getByText("Test Completed Todo");
		expect(listItem).toHaveStyle({ background: "linear-gradient(293deg, rgba(85, 221, 255, 1) 0%, rgba(192, 88, 243, 1) 100%)" });
	});


	it("maintains proper structure with all elements", () => {
		const { container } = render(<Card {...mockProps} />);
		expect(container.querySelector(".list-item")).toBeInTheDocument();
		expect(container.querySelector("label")).toBeInTheDocument();
		expect(container.querySelector("input")).toBeInTheDocument();
		expect(screen.getByAltText("check mark")).toBeInTheDocument();
		expect(screen.getByAltText("cross")).toBeInTheDocument();
	});

});
