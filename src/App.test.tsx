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
});
