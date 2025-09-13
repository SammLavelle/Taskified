export default async function postNewTask(name: string) {
	const apiUrl = "http://localhost:5154/tasks";
	const response = await fetch(apiUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});

	if (!response.ok) {
		throw new Error("Unable to add task");
	}

	return response.json();
}
