import { NewTask } from "../hooks/addTaskForm/useAddTaskForm";

export default async function postNewTask(task: NewTask) {
	const apiUrl = "http://localhost:5154/tasks";
	const response = await fetch(apiUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});

	if (!response.ok) {
		throw new Error("Unable to add task");
	}

	return response.json();
}
