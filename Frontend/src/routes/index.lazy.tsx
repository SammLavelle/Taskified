import { createLazyFileRoute } from "@tanstack/react-router";
import Welcome from "../components/4_pages/Welcome";

export const Route = createLazyFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Welcome />;
}
