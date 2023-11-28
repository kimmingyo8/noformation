interface ToggleProps {
	onClick: React.MouseEventHandler<HTMLInputElement>;
}

const Toggle = ({ onClick }: ToggleProps) => {
	return (
		<div>
			<label className="relative inline-flex items-center cursor-pointer">
				<input type="checkbox" className="sr-only peer" onClick={onClick} />
				<div className="w-11 h-6 peer-focus:outline-none peer-focus:ring peer-focus:ring-lime-300 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-lime-600"></div>
				<span className="text-sm font-medium ms-1 dark:text-gray-300 peer-checked:text-gray-700">
					필수
				</span>
			</label>
		</div>
	);
};

export default Toggle;
