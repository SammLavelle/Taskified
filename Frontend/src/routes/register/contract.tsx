import { createFileRoute } from "@tanstack/react-router";
import Contract from "../../components/4_pages/Register/Tabs/Contract";

export const Route = createFileRoute("/register/contract")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Contract />;
}
