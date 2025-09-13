import { validateEmail } from "../../../../helpers/formValidation";
import { Button, ButtonStyle } from "../../../1_elements/Button";
import Input from "../../../1_elements/Input";

const PersonalInfoTab = () => {
	return (
		<div className="bg-white rounded-xl p-8">
			<div className="flex gap-4 flex-wrap justify-between items-center">
				<h2>Personal info</h2>
				<Button style={ButtonStyle.Outline}>Save</Button>
			</div>
			<form>
				<div className="flex flex-col gap-2">
					<Input label="Name" name="name" required />
					<Input
						type="email"
						label="Email"
						name="email"
						required
						validation={validateEmail}
					/>
					<Input type="password" label="Password" name="password" />
				</div>

				<div className="flex gap-4 flex-wrap">
					<Button style={ButtonStyle.Outline}>Back</Button>
					<Button style={ButtonStyle.Solid}>Next</Button>
				</div>
			</form>
		</div>
	);
};

export default PersonalInfoTab;
