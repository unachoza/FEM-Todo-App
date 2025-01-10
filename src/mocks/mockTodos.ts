export const mockTodos = [
	{
		id: "123",
		title: "Test Todo 1",
		completed: false,
		toggle: vi.fn(),
		deleteTodo: vi.fn(),
	},
	{
		id: "1234",
		title: "Test Todo 2",
		completed: true,
		toggle: vi.fn(),
		deleteTodo: vi.fn(),
	},
	{
		id: "1236",
		title: "Test Todo 3",
		completed: true,
		toggle: vi.fn(),
		deleteTodo: vi.fn(),
	},
];

export const mockTodoFunctions = {
	addTodo: vi.fn(),
	deleteTodo: vi.fn(),
	updateTodo: vi.fn(),
	toggleTodo: vi.fn(),
};
