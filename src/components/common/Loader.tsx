const Loader = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="flex items-center justify-center space-x-2 animate-pulse">
				<div className="w-8 h-8 rounded-full bg-lime-400"></div>
				<div className="w-8 h-8 rounded-full bg-lime-500"></div>
				<div className="w-8 h-8 rounded-full bg-lime-600"></div>
			</div>
		</div>
	);
};

export default Loader;
