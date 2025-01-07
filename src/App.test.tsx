import { render, screen, userEvent } from "./utils/test-utils";
import App from "./App";

describe("test", () => {
	it("tests vitest", () => {
		expect(true).toBeTruthy();
	});
});

describe("the app", () => {
	it("should have planets here text ", () => {
		render(<App />);
		const message = screen.getByText("Vite + React");
		expect(message).toBeVisible();
	});
	it("should increment count on click", async () => {
		render(<App />);
		userEvent.click(screen.getByRole("button"));
		expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
	});
});
