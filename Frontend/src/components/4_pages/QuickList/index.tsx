import Panel from "../../1_elements/Panel";
import AddTaskForm from "../../2_blocks/AddTaskForm";
import TaskList from "../../2_blocks/TaskList";

const QuickList = () => {
	return (
		<>
			<div className="col-span-12">
				<h1>Quick List</h1>
				<p>
					Write up a quick, temporary, to do list. Once you leave, the
					list will be deleted.
				</p>
			</div>
			<div className="col-span-6">
				<TaskList />
			</div>
			<Panel
				className="col-span-6 self-start sticky top-4"
				heading="Add task"
			>
				<AddTaskForm />
			</Panel>
		</>
	);
};

export default QuickList;
