import { ChangeEvent } from 'react';

interface SelectComponentProps {
	handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	type: string;
}

const SelectComponent = ({
	handleSelectChange,
	type,
}: SelectComponentProps) => {
	return (
		<select
			className="form-select block w-full px-3 py-1.5 text-basetext-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition m-0 focus:text-gray-700 focus:bg-white focus:border-lime-600 focus:outline-none"
			aria-label="설문 문항의 타입 선택"
			onChange={handleSelectChange}
			value={type}
		>
			<option value="short">단답형</option>
			<option value="long">장문형</option>
			<option value="radio">객관식</option>
			<option value="check">체크박스</option>
		</select>
	);
};

export default SelectComponent;
