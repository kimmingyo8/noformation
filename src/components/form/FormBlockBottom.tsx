import { BiCopy, BiTrash } from 'react-icons/bi';
import Toggle from '../common/Toggle';
import { useDispatch } from 'react-redux';
import {
	COPY_BLOCK,
	DELETE_BLOCK,
	SET_REQUIRED,
} from '../../redux/slice/formSlice';
import { useState } from 'react';

interface FormBlockBottomProps {
	blockId: number;
}

const FormBlockBottom = ({ blockId }: FormBlockBottomProps) => {
	const dispatch = useDispatch();
	const [isRequired, setIsRequired] = useState(false);

	const handleCopyBlock = () => {
		dispatch(COPY_BLOCK(blockId));
		setTimeout(() => {
			const element = document.getElementById(`data-${blockId}`);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	};

	const handleDeleteBlock = () => {
		dispatch(DELETE_BLOCK(blockId));
	};

	const handleRequired = () => {
		setIsRequired((prev) => !prev);
		dispatch(SET_REQUIRED({ id: blockId, isRequired: !isRequired }));
	};

	return (
		<div className="flex justify-between mt-3">
			<div className="flex gap-4">
				<button type="button" onClick={handleCopyBlock}>
					<BiCopy size={26} />
				</button>
				<button type="button" onClick={handleDeleteBlock}>
					<BiTrash size={26} />
				</button>
			</div>
			<Toggle onClick={handleRequired} />
		</div>
	);
};

export default FormBlockBottom;
