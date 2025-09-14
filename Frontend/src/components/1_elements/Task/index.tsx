export interface taskProps {
	taskId: number;
	name: string;
	isComplete: boolean;
	dueDate?: Date;
}

const Task = ({ taskId, name, isComplete, dueDate }: taskProps) => {
	if (dueDate) {
		const dueDateData = new Date(dueDate);
		console.log(dueDateData.toString()); // Should show local time string
		console.log(dueDateData.toISOString()); // Always UTC string
		console.log(dueDateData.toLocaleString());
	}

	return (
		<div
			key={taskId}
			className="bg-white rounded p-1 flex gap-4 justify-between"
		>
			<label className="flex gap-1 items-center w-full">
				<input type="checkbox" />
				{name}
				{dueDate && (
					<span className="italic ml-auto">
						{new Date(dueDate).toLocaleString()}
					</span>
				)}
			</label>
		</div>
	);
};

export default Task;
