import Input from '../common/Input';
import { IoIosRadioButtonOff } from 'react-icons/io';
import Select from '../common/Select';
import FormBlockBottom from './FormBlockBottom';
import { BlockType } from '../../types';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { SET_BLOCK_TITLE } from '../../redux/slice/formSlice';

interface FormBlockProps {
	blockData: BlockType;
}

const FormBlock = ({
	blockData: { id, type, blockTitle, options },
}: FormBlockProps) => {
	const dispatch = useDispatch();

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		dispatch(SET_BLOCK_TITLE({ id: id, blockTitle: value }));
	};

	return (
		<fieldset className="w-full p-6 border shadow-xl border-slate-200 rounded-2xl">
			<div>
				<Input
					name="form-block-title"
					placeholder="문항 제목을 입력해주세요."
					className="pb-2 text-lg"
					value={blockTitle}
					onChange={handleTitleChange}
				/>
				<div className="flex items-center justify-between mt-3">
					<p className="text-sm text-gray-500 bor">
						객관식으로 답을 선택할 수 있습니다.
					</p>
					<div className="mb-3 xl:w-96">
						<Select />
					</div>
				</div>
				<ul className="flex flex-col gap-4 mt-5">
					<li className="flex items-center gap-6">
						<IoIosRadioButtonOff size={22} />
						<Input name="option" className="max-w-[500px]" />
					</li>
					<li className="flex items-center gap-6">
						<IoIosRadioButtonOff size={22} />
						<button
							type="button"
							className="border-b text-lime-700 border-b-lime-600"
						>
							옵션 추가
						</button>
					</li>
				</ul>
			</div>
			<FormBlockBottom />
		</fieldset>
	);
};

export default FormBlock;
