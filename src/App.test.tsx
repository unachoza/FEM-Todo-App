import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { mockTodos, mockTodoFunctions } from "./mocks/mockTodos";
import App from "./App";

describe("App Component", () => {

	beforeEach(() => {
		vi.clearAllMocks();
	  });

	 it("should render initial todos", () => {
		const { container } = render(<App />);
		expect(container.querySelectorAll('.list-item')).toHaveLength(0);
		
	})

});

describe("the app", () => {
	it("should Todo Test", () => {
		render(<App />);
		const message = screen.getByText("Todo");
		expect(message).toBeVisible();
	});
});
