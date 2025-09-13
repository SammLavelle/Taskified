import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchTasks from "../../api/fetchTasks";

export const useFetchTasks = (pageNumber: number) => {
	const fetchTasksQuery = useQuery({
		queryKey: ["fetchTasks", pageNumber],
		queryFn: () => fetchTasks(pageNumber),
		placeholderData: keepPreviousData,
	});

	return fetchTasksQuery;
};
