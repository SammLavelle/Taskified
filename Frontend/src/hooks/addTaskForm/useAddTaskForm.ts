import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef, useContext } from "react";
import postNewTask from "../../api/postNewTask";
import { NotificationContext } from "../../context";

export interface NewTask {
	name: string;
	dueDate: string | null;
}

export const useAddTaskForm = () => {
	const [errors, setErrors] = useState<string>("");
	const [_, setNotification] = useContext(NotificationContext);
	const formRef = useRef<HTMLFormElement | null>(null);
	const queryClient = useQueryClient();

	const addTaskMutation = useMutation({
		mutationFn: (task: NewTask) => postNewTask(task),
		onError: (error) => {
			setErrors(error.message);
		},
		onSuccess: () => {
			setNotification((prev) => [...prev, "Successfully added task"]);
			setErrors("");
			formRef.current?.reset();
			//TODO - see if I can make this work somehow to reduce api calls.
			// queryClient.setQueryData(["fetchTasks"], (tasks: any) => {
			// 	return [...tasks, newTask];
			// });

			//FOR NOW - I'm switching to invalidate query to uncomplicate the paginated tasks query
			queryClient.invalidateQueries({ queryKey: ["fetchTasks"] });
		},
	});

	const handleSubmitAddTaskForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const name = formData.get("name");

		if (typeof name !== "string" || name.trim() == "") {
			setErrors("Task name is required");
			return;
		}

		const dueDateRaw = formData.get("dueDate");
		const dueDate = dueDateRaw
			? new Date(dueDateRaw as string).toISOString()
			: null;

		const task: NewTask = {
			name,
			dueDate,
		};

		setErrors("");

		addTaskMutation.mutate(task);
	};

	return {
		errors,
		formRef,
		handleSubmitAddTaskForm,
		isLoading: addTaskMutation.isPending,
	};
};
