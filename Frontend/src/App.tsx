import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { NotificationContext } from "./context";
import { useState } from "react";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

const App = () => {
	const notificationHook = useState<string[]>([]);
	return (
		<QueryClientProvider client={queryClient}>
			<NotificationContext.Provider value={notificationHook}>
				<RouterProvider router={router} />
			</NotificationContext.Provider>
		</QueryClientProvider>
	);
};

export default App;
