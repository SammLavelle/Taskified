export default async function fetchTasks(pageNumber: number = 1) {
	const apiUrl = `http://localhost:5154/tasks?pageNumber=${pageNumber}`;
	const response = await fetch(apiUrl, {
		method: "Get",
	});

	return response.json();
}
