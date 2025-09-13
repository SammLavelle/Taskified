import { Button, ButtonStyle } from "../../../1_elements/Button";

const Contract = () => {
	return (
		<div className="bg-white rounded-xl p-8">
			<div className="flex gap-4 flex-wrap justify-between items-center">
				<h2>Contract</h2>
				<Button style={ButtonStyle.Outline}>Save</Button>
			</div>
			<form>
				<p>I solemly swear to do things when I said I would.</p>
				<p>Probably.</p>
				<div className="flex gap-4 flex-wrap">
					<Button style={ButtonStyle.Outline}>Back</Button>
					<Button style={ButtonStyle.Solid}>Agree</Button>
				</div>
			</form>
		</div>
	);
};

export default Contract;
