import React, { ChangeEvent, useState } from 'react';
import Input from '../../components/common/Input';

const NewFormPage = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
	};

	return (
		<form>
			<Input
				name="form-title"
				placeholder="설문지 제목"
				value={title}
				className="p-3 text-4xl font-semibold"
				onChange={onInputChange}
			/>
			<Input
				name="form-desc"
				placeholder="설문지 설명"
				value={desc}
				className="p-3 mt-1 text-sm text-gray-600 "
				onChange={onInputChange}
			/>
		</form>
	);
};

export default NewFormPage;
