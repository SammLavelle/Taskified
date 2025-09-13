import LinkPanel, { LinkPanelWrapper } from "../../1_elements/LinkPanel";

const Welcome = () => {
	return (
		<>
			<div className="col-span-12 h-auto">
				<h1>Welcome to Taskify</h1>
				<p>The smart task management solution</p>
			</div>
			<div className="col-span-12">
				<LinkPanelWrapper>
					<LinkPanel to="#" disabled title="Sign in" />
					<LinkPanel to="register" title="Register" />
					<LinkPanel to="quickList" title="Quick start" />
				</LinkPanelWrapper>
			</div>
		</>
	);
};

export default Welcome;
