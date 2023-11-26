import { BiCopy, BiTrash } from 'react-icons/bi';
import Toggle from '../common/Toggle';

const FormBlockBottom = () => {
	return (
		<div className="flex justify-between mt-3">
			<div className="flex gap-4">
				<button type="button">
					<BiCopy size={26} />
				</button>
				<button type="button">
					<BiTrash size={26} />
				</button>
			</div>
			<Toggle />
		</div>
	);
};

export default FormBlockBottom;
