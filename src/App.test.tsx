import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Card from "./Components/Card/Card";
import { mockTodos } from "./mocks/mockTodos";
import App from "./App";

describe("App Component", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("renders initial todos correctly", () => {
		render(<App />);
		mockTodos.forEach((todo) => {
			render(<Card {...todo} />);
		});
		const checkboxes = screen.getAllByRole("check-item");
		expect(checkboxes).toHaveLength(3);
	});

	it("handles todo deletion", () => {
		render(<App />);
		mockTodos.forEach((todo) => {
			render(<Card {...todo} />);
		});

		const initialTodos = screen.getAllByRole("check-item");
		const deleteButtons = screen.getAllByRole("button", { name: "cross" });

		fireEvent.click(deleteButtons[0]);
		const remainingTodos = screen.getAllByRole("check-item");
		expect(remainingTodos.length).toBe(initialTodos.length - 1);
	});

	it("handles todo completion toggle", () => {
		render(<App />);
		
		const checkboxes = screen.getAllByRole("checkbox");
		fireEvent.click(checkboxes[0]);
		
		const labels = screen.getAllByRole("check-item");
		expect(labels[0]).toHaveStyle({ textDecoration: "line-through" });
	  });
});
