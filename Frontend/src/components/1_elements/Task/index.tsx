export interface taskProps {
	taskId: number;
	name: string;
	isComplete: boolean;
}

const Task = ({ taskId, name, isComplete }: taskProps) => {
	return (
		<div
			key={taskId}
			className="bg-white rounded p-1 flex gap-4 justify-between"
		>
			<label className="flex gap-1 items-center">
				<input type="checkbox" />
				{name}
			</label>
		</div>
	);
};

export default Task;
