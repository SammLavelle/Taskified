import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Input from ".";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";

afterEach(cleanup);

test("Users can type in input fields", async () => {
	render(<Input name="InputName" label="InputLabel" />);
	const inputText = "Hello, World!";

	const inputField = screen.getByRole("textbox") as HTMLInputElement;
	await userEvent.type(inputField, inputText);

	expect(inputField.value).toBe(inputText);
});

test("Input should render the correct placeholder", () => {
	const placeholderText = "Hello, Placeholder!";

	render(
		<Input
			placeholder={placeholderText}
			name="InputName"
			label="InputLabel"
		/>,
	);

	const inputField = screen.getByRole("textbox") as HTMLInputElement;

	expect(inputField.placeholder).toBe(placeholderText);
});

test("Users cannot type in a disabled input", async () => {
	render(<Input disabled name="InputName" label="InputLabel" />);

	const inputField = screen.getByRole("textbox") as HTMLInputElement;

	expect(inputField.disabled).toBe(true);
	expect(inputField.value).toBe("");

	await userEvent.type(inputField, "Attempting to type...");

	expect(inputField.value).toBe("");
});

test("Users cannot type in a readonly input", async () => {
	render(<Input readOnly name="InputName" label="InputLabel" />);

	const inputField = screen.getByRole("textbox") as HTMLInputElement;

	expect(inputField.readOnly).toBe(true);
	expect(inputField.value).toBe("");

	await userEvent.type(inputField, "Attempting to type...");

	expect(inputField.value).toBe("");
});

test("Input has no accessibility violations", async () => {
	render(<Input name="InputName" label="InputLabel" />);

	const inputField = await axe(screen.getByRole("textbox"));

	if (inputField.violations.length > 0) {
		console.log("Violations: ", inputField.violations[0].description);
	}

	expect(inputField.violations.length).toBe(0);
});
