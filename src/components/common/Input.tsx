import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	placeholder?: string;
	className?: string;
}

const Input = ({ name, placeholder, className, ...props }: InputProps) => {
	return (
		<label htmlFor={name} className="w-full">
			<input
				type="text"
				id={name}
				name={name}
				placeholder={placeholder}
				className={`w-full text-gray-900 transition duration-300 border-b focus:border-lime-600 focus:outline-none ${className}`}
				{...props}
			/>
		</label>
	);
};

export default Input;
