export default async function fetchTasks() {
	const apiUrl = "http://localhost:5154/tasks";
	const response = await fetch(apiUrl, {
		method: "Get",
	});

	return response.json();
}
