import { useFetchTasks } from "../../../hooks/useFetchTasks/useFetchTasks";
import Task, { taskProps } from "../../1_elements/Task";

const TaskList = () => {
	const tasks = useFetchTasks();

	if (tasks.isLoading) {
		return "Loading";
	}
	if (tasks.isError) {
		return "Not working.";
	}

	return (
		<div className="flex flex-col gap-4">
			{tasks.data.map((task: taskProps) => (
				<Task
					taskId={task.taskId}
					name={task.name}
					isComplete={task.isComplete}
				/>
			))}
		</div>
	);
};

export default TaskList;
