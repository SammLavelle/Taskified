import { createContext } from "react";

export const NotificationContext = createContext<
	[string[], React.Dispatch<React.SetStateAction<string[]>>]
>([[], () => {}]);
