import { render, screen, cleanup } from "@testing-library/react";
import { beforeEach, afterEach, expect, test } from "vitest";

import AddTaskForm from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
beforeEach(() => {
	render(
		<QueryClientProvider client={queryClient}>
			<AddTaskForm />
		</QueryClientProvider>,
	);
});
afterEach(cleanup);

// submission

test.todo("Users can submit a new task", async () => {});

test.todo("Users can submit multiple new tasks sequentially", () => {});

test.todo("Pressing enter on the keyboard submits a task", () => {});

test.todo("Trims whitespace before submission", async () => {});

test.todo("Submit button is disabled while a task is being added", () => {});

//successful submission

test.todo("Input is cleared on successful submission", async () => {});
test.todo("Submit button is re-enabled after submission", () => {});

//frontend validation

test("Users receive an error on trying to submit an empty form", async () => {
	const submitButton = screen.getByRole("button");

	submitButton.click();

	await expect(screen.findByText("Please enter a task"));
});

test.todo(
	"Input is not cleared on submit if there is a validation error",
	async () => {},
);

test.todo(
	"Frontend Validation messages disappear after a successful submission",
	() => {},
);

//API error handling

test.todo("Error messages appear when the API returns an error", () => {});

test.todo("Input is not cleared if the API returns an error", async () => {});
test.todo(
	"API error messages disappear after a successful submission",
	() => {},
);

test.todo("Has no accessibility violations", () => {});
