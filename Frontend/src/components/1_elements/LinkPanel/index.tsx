import { Link } from "@tanstack/react-router";

interface LinkPanelProps {
	to: string;
	title: string;
	description?: React.ReactNode;
	disabled?: boolean;
}

const LinkPanel = ({
	to,
	title,
	description,
	disabled = false,
}: LinkPanelProps) => {
	if (disabled) {
		return (
			<span className="rounded-xl bg-white p-4 w-full">
				<div className="flex justify-between gap-4 items-center">
					<div>
						<h2 className="text-md font-medium text-grey-500">
							{title}
						</h2>
						<div className="text-grey-500">{description}</div>
					</div>
					<svg
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.1416 12.9922C13.9664 12.9922 14.6347 13.6606 14.6348 14.4854C14.6348 14.9754 14.3977 15.4083 14.0332 15.6807V16.8555C14.0332 17.347 13.6351 17.7451 13.1436 17.7451C12.6521 17.7451 12.2539 17.347 12.2539 16.8555V15.6836C11.8873 15.4115 11.6484 14.977 11.6484 14.4854C11.6485 13.6607 12.3169 12.9923 13.1416 12.9922Z"
							fill="#A3A3A3"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M16.0068 3.43066C17.8305 3.5232 19.2932 4.98589 19.3857 6.80957L19.3896 6.99316V10.333C19.9786 10.8237 20.3545 11.5611 20.3545 12.3877V18.752L20.3516 18.8896C20.2821 20.2573 19.1851 21.3535 17.8174 21.4229L17.6797 21.4268H8.60547L8.46777 21.4229C7.10022 21.3533 6.00409 20.2572 5.93457 18.8896L5.93066 18.752V12.3877C5.93067 11.5705 6.29748 10.8393 6.875 10.3486V6.99707L6.87891 6.81348C6.97488 4.92678 8.53579 3.42699 10.4463 3.42676H15.8232L16.0068 3.43066ZM8.60547 11.3174C8.0517 11.3176 7.59694 11.739 7.54199 12.2783L7.53516 12.3877V18.752C7.53534 19.3427 8.01476 19.8221 8.60547 19.8223H17.6797C18.2705 19.8223 18.7498 19.3428 18.75 18.752V12.3877C18.75 11.8338 18.3285 11.3782 17.7891 11.3232L17.6797 11.3174H8.60547ZM10.4463 5.03125C9.36068 5.03149 8.47996 5.91152 8.47949 6.99707V9.6875H17.7852V6.99316C17.7852 5.90972 16.9067 5.03127 15.8232 5.03125H10.4463Z"
							fill="#A3A3A3"
						/>
					</svg>
				</div>
			</span>
		);
	}
	return (
		<Link to={to} className="rounded-xl bg-white p-4 w-full">
			<div className="flex justify-between gap-4 items-center">
				<div>
					<h2 className="text-md font-medium">{title}</h2>
					<div className="text-grey-700">{description}</div>
				</div>
				<svg
					width="25"
					height="25"
					viewBox="0 0 25 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
					aria-hidden="true"
					role="img"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18.0791 12.4264C18.0791 12.6651 17.9843 12.894 17.8155 13.0628L10.3155 20.5628C9.96402 20.9142 9.39418 20.9142 9.0427 20.5628C8.69123 20.2113 8.69123 19.6414 9.0427 19.29L15.9063 12.4264L9.04271 5.56276C8.69123 5.21129 8.69123 4.64144 9.04271 4.28997C9.39418 3.9385 9.96403 3.9385 10.3155 4.28997L17.8155 11.79C17.9843 11.9588 18.0791 12.1877 18.0791 12.4264Z"
						fill="black"
					/>
				</svg>
			</div>
		</Link>
	);
};

interface LinkPanelWrapperProps {
	children: React.ReactNode;
}

const LinkPanelWrapper = ({ children }: LinkPanelWrapperProps) => {
	return <div className="flex flex-col gap-4 w-full">{children}</div>;
};

export default LinkPanel;
export { LinkPanelWrapper };
