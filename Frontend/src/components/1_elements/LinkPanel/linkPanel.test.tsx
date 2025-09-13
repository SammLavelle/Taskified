import { cleanup, render, screen } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import LinkPanel from ".";
import { createRouter, RouterContextProvider } from "@tanstack/react-router";
import { routeTree } from "../../../routeTree.gen";
import { axe } from "vitest-axe";

afterEach(cleanup);

test("LinkPanel renders a link with the correct href", () => {
	const router = createRouter({ routeTree });
	render(
		<RouterContextProvider router={router}>
			<LinkPanel to="/login" title="Home" />
		</RouterContextProvider>,
	);
	const link = screen.getByRole("link");
	expect(link.getAttribute("href")).toBe("/login");
});

test("LinkPanel does not render a link when disabled", () => {
	const router = createRouter({ routeTree });
	render(
		<RouterContextProvider router={router}>
			<LinkPanel to="#" title="Disabled" disabled />
		</RouterContextProvider>,
	);
	expect(screen.getByText("Disabled")).not.toBeNull;
	expect(screen.queryByRole("link")).toBeNull();
});

test("LinkPanel has no accessibility violations", async () => {
	const router = createRouter({ routeTree });
	const { container } = render(
		<RouterContextProvider router={router}>
			<LinkPanel to="/login" title="Home" />
		</RouterContextProvider>,
	);

	const results = await axe(container);
	if (results.violations.length > 0) {
		console.log("Violations: ", results.violations[0].description);
	}
	expect(results.violations).toHaveLength(0);
});
