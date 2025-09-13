import { createFileRoute } from "@tanstack/react-router";
import DisplaySettings from "../../components/4_pages/Register/Tabs/DisplaySettings";

export const Route = createFileRoute("/register/displaySettings")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DisplaySettings />;
}
