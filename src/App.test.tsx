import { render, screen } from "@testing-library/react";
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
		const { container } = render(<App />);
		mockTodos.forEach((todo) => {
			render(<Card {...todo} />);
		});
		const checkboxes = container.querySelectorAll(".checkbox");
		expect(checkboxes).toHaveLength(5);
	});
});
