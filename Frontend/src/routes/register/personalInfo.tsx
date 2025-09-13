import { createFileRoute } from "@tanstack/react-router";
import PersonalInfoTab from "../../components/4_pages/Register/Tabs/PersonalInfo";

export const Route = createFileRoute("/register/personalInfo")({
	component: RouteComponent,
});

function RouteComponent() {
	return <PersonalInfoTab />;
}
