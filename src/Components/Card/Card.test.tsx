import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Card from "./Card";

describe("Card Components", () => {
	const mockProps = {
		id: "1",
		title: "Test Todo",
		completed: false,
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

		const deleteButton = screen.getByText("X");
		fireEvent.click(deleteButton);

		expect(mockProps.deleteTodo).toHaveBeenCalledTimes(1);
		expect(mockProps.deleteTodo).toHaveBeenCalledWith("1");
	});

	// it('displays completion status', () => {})

	// it("removes list-item when delete button is clicked", () => { });

	it("renders with the correct CSS class", () => {
		const { container } = render(<Card {...mockProps} />);
		expect(container.firstChild).toHaveClass("list-item");
	});

	it("maintains proper structure with all elements", () => {
		const { container } = render(<Card {...mockProps} />);

		expect(container.querySelector("span")).toBeInTheDocument();
		expect(container.querySelector("button")).toBeInTheDocument();
		expect(screen.getByText("X")).toBeInTheDocument();
	});
	// it("toggle defaults to incomplete / false", () => {});
	// it("clicking toggle to complete has css response", () => {});
	// it("contains same number of lists items and todos remembered in state", () => {})
});
