import { useState } from "react";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
	label: React.ReactNode;
	name: string;
	validation?: (value: any) => string | undefined;
};

const Input = ({ label, name, validation, ...props }: InputProps) => {
	const [error, setError] = useState<string | undefined>();

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (validation) {
			const errorMessage = validation(e.target.value);
			setError(errorMessage);
		}
	};

	return (
		<div className="flex flex-col gap-1">
			{label && <label htmlFor={name}>{label}</label>}
			<input
				id={name}
				name={name}
				className="border rounded border-grey-200 py-1 px-2"
				{...props}
				onBlur={handleBlur}
			/>
			{error && <p className="text-red-600">{error}</p>}
		</div>
	);
};

export default Input;
