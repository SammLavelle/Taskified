import { Key, useContext } from "react";
import { NotificationContext } from "../../../context";
import { ButtonStyle, IconButton } from "../Button";

const Notification = () => {
	const [notifications, setNotifications] = useContext(NotificationContext);

	const removeNotification = (index: Key) => {
		setNotifications((prev) => prev.filter((_, i) => i != index));
	};
	return (
		<div className="flex flex-col gap-2">
			{notifications.map((notification: string, index: Key) => (
				<div
					key={index}
					className="flex gap-4 bg-red-100 rounded-lg p-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903zm15.229-7.679c.18.721.05 1.446-.304 2.035l.97.584c.504-.838.688-1.869.433-2.892-.255-1.024-.9-1.848-1.739-2.351l-.582.97c.589.355 1.043.934 1.222 1.654zm.396-4.346l-.597.995c1.023.616 1.812 1.623 2.125 2.874.311 1.251.085 2.51-.53 3.534l.994.598c.536-.892.835-1.926.835-3-.001-1.98-1.01-3.909-2.827-5.001zm-16.73 2.692l-.582-.97c-.839.504-1.484 1.327-1.739 2.351-.255 1.023-.071 2.053.433 2.892l.97-.584c-.354-.588-.484-1.314-.304-2.035.179-.72.633-1.299 1.222-1.654zm-4.444 2.308c0 1.074.299 2.108.835 3l.994-.598c-.615-1.024-.841-2.283-.53-3.534.312-1.251 1.101-2.258 2.124-2.873l-.597-.995c-1.817 1.092-2.826 3.021-2.826 5z" />
					</svg>
					<p>
						{notification} - {index}
					</p>
					<IconButton
						style={ButtonStyle.Outline}
						onClick={() => removeNotification(index)}
						className="ml-auto"
					>
						<svg
							clip-rule="evenodd"
							fill-rule="evenodd"
							stroke-linejoin="round"
							stroke-miterlimit="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							width="16px"
						>
							<path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
						</svg>
					</IconButton>
				</div>
			))}
		</div>
	);
};

export default Notification;
