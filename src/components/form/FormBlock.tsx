import Input from '../common/Input';
import {
	IoIosRadioButtonOff,
	IoMdCheckboxOutline,
	IoMdClose,
} from 'react-icons/io';
import Select from '../common/Select';
import FormBlockBottom from './FormBlockBottom';
import { BlockType } from '../../types';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	ADD_OPTION,
	DELETE_OPTION,
	SET_BLOCK_TITLE,
	SET_BLOCK_TYPE,
	SET_OPTIONS_CONTENT,
} from '../../redux/slice/formSlice';
import { typeDescriptions } from '../../constants/form';

interface FormBlockProps {
	blockData: BlockType;
}

const FormBlock = ({
	blockData: { id, type, blockTitle, options },
}: FormBlockProps) => {
	const [optionId, setOptionId] = useState(1);

	const dispatch = useDispatch();

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		dispatch(SET_BLOCK_TITLE({ id: id, blockTitle: value }));
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		dispatch(SET_BLOCK_TYPE({ id: id, type: value }));
	};

	const handleAddOption = () => {
		dispatch(ADD_OPTION({ id: id, optionId: optionId }));
		setOptionId(optionId + 1);
	};

	const handleChangeOption = (
		e: ChangeEvent<HTMLInputElement>,
		currentOptionId: number
	) => {
		const { value } = e.target;
		dispatch(
			SET_OPTIONS_CONTENT({
				id: id,
				optionId: currentOptionId,
				optionContent: value,
			})
		);
	};

	const handleOptionDelete = () => {
		dispatch(DELETE_OPTION({ id: id, optionId: optionId }));
	};

	return (
		<fieldset className="w-full p-6 border shadow-xl border-slate-200 rounded-2xl">
			<Input
				name="form-block-title"
				placeholder="문항 제목을 입력해주세요."
				className="pb-2 text-lg"
				value={blockTitle}
				onChange={handleTitleChange}
			/>
			<div className="flex items-center justify-between mt-3">
				<p className="text-sm text-gray-500 bor">{typeDescriptions[type]}</p>
				<div className="mb-3 xl:w-96">
					<Select handleSelectChange={handleSelectChange} />
				</div>
			</div>
			{(type === 'check' || type === 'radio') && (
				<ul className="flex flex-col gap-4 my-5">
					{options?.map((option, idx) => (
						<li key={idx} className="flex items-center gap-6">
							{type === 'check' && <IoMdCheckboxOutline size={22} />}
							{type === 'radio' && <IoIosRadioButtonOff size={22} />}
							<Input
								name="option"
								value={option.content}
								className="max-w-[500px]"
								onChange={(e) => handleChangeOption(e, option.id)}
							/>
							<button type="button" onClick={handleOptionDelete}>
								<IoMdClose
									className=" fill-lime-900 hover:fill-lime-700"
									size={22}
								/>
							</button>
						</li>
					))}
					<li className="flex items-center gap-6">
						{type === 'check' && <IoMdCheckboxOutline size={22} />}
						{type === 'radio' && <IoIosRadioButtonOff size={22} />}
						<button
							type="button"
							className="border-b text-lime-700 border-b-lime-600"
							onClick={handleAddOption}
						>
							옵션 추가
						</button>
					</li>
				</ul>
			)}
			<FormBlockBottom blockId={id} />
		</fieldset>
	);
};

export default FormBlock;
