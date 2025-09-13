import { createFileRoute } from "@tanstack/react-router";
import CommunicationPreferences from "../../components/4_pages/Register/Tabs/CommunicationPreferences";

export const Route = createFileRoute("/register/communicationPreferences")({
	component: RouteComponent,
});

function RouteComponent() {
	return <CommunicationPreferences />;
}
