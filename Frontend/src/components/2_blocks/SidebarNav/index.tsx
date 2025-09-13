import { Link } from "@tanstack/react-router";
import TaskifyLogo from "../../../assets/TaskifyLogo";
import Notification from "../../1_elements/Notification";

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
