import classNames from "classnames";

interface PanelProps {
	children: React.ReactNode;
	className?: string;
	heading?: string;
	headerColor?: string;
}
const Panel = ({
	children,
	className,
	heading,
	headerColor = "bg-grey-200",
}: PanelProps) => {
	return (
		<div
			className={classNames(
				"rounded-lg bg-white overflow-hidden",
				className,
			)}
		>
			{heading && (
				<div className={classNames("w-full px-4 py-2  ", headerColor)}>
					<h2 className="text-lg">{heading}</h2>
				</div>
			)}
			<div className="p-4">{children}</div>
		</div>
	);
};

export default Panel;
