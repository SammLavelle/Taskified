import { useQuery } from "@tanstack/react-query";
import fetchTasks from "../../api/fetchTasks";

export const useFetchTasks = () => {
	const fetchTasksQuery = useQuery({
		queryKey: ["fetchTasks"],
		queryFn: fetchTasks,
	});

	return fetchTasksQuery;
};
