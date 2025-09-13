import { Link, Outlet } from "@tanstack/react-router";
import { Button } from "../../1_elements/Button";
import { useReducer } from "react";

const initialState = {
	personalInfo: { name: "", email: "", password: "" },
	displaySettings: { lighting: "light", mascot: "" },
	communicationPreferences: {
		notifications: true,
		method: "",
		frequency: "",
	},
	completedSections: {
		personalInfo: false,
		displaySettings: false,
		communicationPreferences: false,
		contract: false,
	},
};

function reducer(state, action) {
	if (action.type === "updateLogin") {
		return {
			...state,
			personalInfo: action.payload,
		};
	}
}

const Register = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<div className="col-span-12">
				<h1>Register</h1>
			</div>
			<div className="grid gap-8 grid-cols-12 col-span-12">
				<div className="bg-white rounded-xl p-8 flex flex-col gap-2 col-span-4">
					<Link
						to="/register/personalinfo"
						className="bg-grey-200 flex justify-between p-2"
					>
						<p>Personal information</p>
					</Link>
					<Link
						to="/register/displaySettings"
						className="bg-grey-200 flex justify-between p-2"
					>
						<p>Display settings</p>
					</Link>
					<Link
						to="/register/communicationPreferences"
						className="bg-grey-200 flex justify-between p-2"
					>
						<p>Communication Preferences</p>
					</Link>
					<Link
						to="/register/contract"
						className="bg-grey-200 flex justify-between p-2"
					>
						<p>Contract</p>
					</Link>
					<Button>Submit registration</Button>
				</div>
				<div className="col-span-8">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Register;
