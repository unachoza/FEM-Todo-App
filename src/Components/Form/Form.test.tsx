import { render, screen } from "../../utils/test-utils";
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
});
