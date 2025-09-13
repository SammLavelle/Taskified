import { Button, ButtonStyle } from "../../../1_elements/Button";

const CommunicationPreferences = () => {
	return (
		<div className="bg-white rounded-xl p-8">
			<div className="flex gap-4 flex-wrap justify-between items-center">
				<h2>Communication preferences</h2>
				<Button style={ButtonStyle.Outline}>Save</Button>
			</div>
			<form>
				<label>Do you want to receive notifications?</label>
				<select>
					<option>Yes</option>
					<option>No</option>
				</select>
				<label>Preferred method</label>
				<select>
					<option>Text</option>
					<option>Email</option>
				</select>
				<label>Frequency</label>
				<select>
					<option>Daily reminders of incomplete tasks</option>
					<option>Set as a task level</option>
					<option>Lol never</option>
				</select>
				<div className="flex gap-4 flex-wrap">
					<Button style={ButtonStyle.Outline}>Back</Button>
					<Button style={ButtonStyle.Solid}>Next</Button>
				</div>
			</form>
		</div>
	);
};

export default CommunicationPreferences;
