import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import SidebarNav from "../components/2_blocks/SidebarNav";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<div className="flex flex-col xl:flex-row min-h-svh w-full bg-grey-100">
				<SidebarNav />
				<div className="p-6 grid grid-cols-12 gap-6 self-start grow">
					<Outlet />
				</div>
			</div>
		</React.Fragment>
	);
}
