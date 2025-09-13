import { Button, ButtonStyle } from "../../../1_elements/Button";

const DisplaySettings = () => {
	return (
		<div className="bg-white rounded-xl p-8">
			<div className="flex gap-4 flex-wrap justify-between items-center">
				<h2>Display Settings</h2>
				<Button style={ButtonStyle.Outline}>Save</Button>
			</div>
			<form>
				<label>Mood lighting</label>
				<select>
					<option>Light mode</option>
					<option>Dark mode</option>
				</select>
				<label>Motivational mascot</label>
				<select>
					<option>Goose</option>
					<option>Sheep</option>
				</select>
				<div className="flex gap-4 flex-wrap">
					<Button style={ButtonStyle.Outline}>Back</Button>
					<Button style={ButtonStyle.Solid}>Next</Button>
				</div>
			</form>
		</div>
	);
};

export default DisplaySettings;
