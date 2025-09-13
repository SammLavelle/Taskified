import { Link } from "@tanstack/react-router";
import Notification from "../../1_elements/Notification";
import TaskifyLogo from "../../../assets/logos/TaskifyLogo";

const SidebarNav = () => {
	return (
		<div className="bg-white py-4 px-8 w-full xl:w-72">
			<Link to="/">
				<TaskifyLogo />
			</Link>
			<Notification />
		</div>
	);
};

export default SidebarNav;
