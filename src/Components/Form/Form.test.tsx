import { render, screen, userEvent } from "../../utils/test-utils";
import Form from "./Form";

describe("Form Components", () => {
	const mockProps = {
		handleSubmit: vi.fn(),
		handleChange: vi.fn(),
		input: "test",
	};
	it("renders initial todos correctly", () => {
		render(<Form {...mockProps} />);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});
	it("renders on top of screen ", () => {});
	it("on enter adds item to todolist ", () => {});
	it("if user hits enter with nothing in input, it does not add empty todo ", () => {});
	it("adds new todo to bottom of list", () => {});
});
