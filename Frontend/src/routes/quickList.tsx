import { createFileRoute } from "@tanstack/react-router";
import QuickList from "../components/4_pages/QuickList";

export const Route = createFileRoute("/quickList")({
	component: RouteComponent,
});

function RouteComponent() {
	return <QuickList />;
}
