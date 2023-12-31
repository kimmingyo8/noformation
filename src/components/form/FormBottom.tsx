import { BsPlusCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { ADD_BLOCK } from '../../redux/slice/formSlice';

type FormBottomProps = {
	handleSaveForm: (e: React.FormEvent) => Promise<void>;
};

const newBlockData = {
	id: 0,
	type: 'short',
	blockTitle: '',
	isRequired: false,
	options: [{ id: 0, content: '' }],
};

const FormBottom = ({ handleSaveForm }: FormBottomProps) => {
	const dispatch = useDispatch();

	const handleAddBlock = () => {
		dispatch(ADD_BLOCK(newBlockData));
	};

	return (
		<div className="mt-6 py-3 px-10 w-[50%] fixed bottom-0 left-[40%] flex items-center justify-between gap-x-6 bg-white shadow-xl shadow-lime-600 border-t border-lime-500 rounded-t-2xl">
			<button type="button" onClick={handleAddBlock}>
				<BsPlusCircle
					size={28}
					className="rounded-[50%] fill-lime-900 bg-lime-300 hover:bg-lime-200"
				/>
			</button>
			<button
				type="submit"
				className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-600 hover:bg-lime-500 focus-visible:outline"
				onClick={handleSaveForm}
			>
				Save
			</button>
		</div>
	);
};

export default FormBottom;
