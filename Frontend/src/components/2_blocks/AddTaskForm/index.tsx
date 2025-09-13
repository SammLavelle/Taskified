import { useAddTaskForm } from "../../../hooks/addTaskForm/useAddTaskForm";
import { Button } from "../../1_elements/Button";
import Input from "../../1_elements/Input";

const AddTaskForm = () => {
	const addTaskForm = useAddTaskForm();

	return (
		<>
			<form
				ref={addTaskForm.formRef}
				onSubmit={addTaskForm.handleSubmitAddTaskForm}
				className="flex flex-col gap-6"
			>
				{addTaskForm.errors && (
					<p className="text-red-600 font-medium">
						{addTaskForm.errors}
					</p>
				)}
				<Input
					label="Task"
					name="name"
					placeholder="Important thing..."
					required
				/>
				<Button
					type="submit"
					className="w-full"
					disabled={addTaskForm.isLoading}
				>
					Add Task
				</Button>
			</form>
		</>
	);
};

export default AddTaskForm;
