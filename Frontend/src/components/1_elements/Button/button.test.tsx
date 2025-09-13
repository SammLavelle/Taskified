import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, test, vi } from "vitest";
import { axe } from "vitest-axe";
import { Button } from ".";

afterEach(cleanup);

test("Button renders with children", () => {
	var buttonText = "Click me!";
	render(<Button>{buttonText}</Button>);

	const button = screen.getByRole("button") as HTMLButtonElement;

	expect(button.textContent).toBe(buttonText);
});

test("Users can click the button", async () => {
	const handleClick = vi.fn();

	render(<Button onClick={handleClick}>Click me</Button>);

	const button = screen.getByRole("button") as HTMLButtonElement;

	await userEvent.click(button);

	expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Users cannot click the button when disabled", async () => {
	const handleClick = vi.fn();

	render(
		<Button onClick={handleClick} disabled>
			Click me
		</Button>,
	);

	const button = screen.getByRole("button") as HTMLButtonElement;

	await userEvent.click(button);

	expect(handleClick).not.toHaveBeenCalled();
});

test("Button has no accessibility violations", async () => {
	render(<Button>Click me</Button>);

	const button = await axe(screen.getByRole("button"));

	if (button.violations.length > 0) {
		console.log("Violations: ", button.violations[0].description);
	}

	expect(button.violations.length).toBe(0);
});
