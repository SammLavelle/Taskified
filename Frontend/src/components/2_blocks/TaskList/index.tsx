import { useState } from "react";
import { useFetchTasks } from "../../../hooks/useFetchTasks/useFetchTasks";
import Task, { taskProps } from "../../1_elements/Task";
import { CaretLeft } from "../../../assets/icons/CaretLeft";
import { CaretRight } from "../../../assets/icons/CaretRight";

const TaskList = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const tasks = useFetchTasks(pageNumber);

	if (tasks.isLoading) {
		return "Loading";
	}
	if (tasks.isError) {
		return "Not working.";
	}

	const HandleIncreasePageNumber = () => {
		setPageNumber(pageNumber + 1);
	};

	const HandleDecreasePageNumber = () => {
		setPageNumber(pageNumber - 1);
	};

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				{tasks.data.items.map((task: taskProps) => (
					<Task
						taskId={task.taskId}
						name={task.name}
						isComplete={task.isComplete}
					/>
				))}
			</div>
			<div className="flex justify-between items-center gap-4">
				<button
					onClick={HandleDecreasePageNumber}
					disabled={tasks.data.hasPreviousPage == false}
					className="disabled:opacity-50 hover:text-claret-500"
				>
					<CaretLeft />
				</button>
				<div className="flex items-center justify-center gap-2">
					Page {tasks.data.pageNumber}/{tasks.data.pageCount}
				</div>
				<button
					onClick={HandleIncreasePageNumber}
					disabled={tasks.data.hasNextPage == false}
					className="disabled:opacity-50 hover:text-claret-500"
				>
					<CaretRight />
				</button>
			</div>
		</div>
	);
};

export default TaskList;
