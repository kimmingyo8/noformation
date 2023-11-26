import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../components/common/Input';
import FormBlock from '../../components/form/FormBlock';
import FormBottom from '../../components/form/FormBottom';
import { setDBAPI } from '../../api/form/makeForm';

const NewFormPage = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		name === 'form-title' && setTitle(value);
		name === 'form-desc' && setDesc(value);
	};

	const fetchData = async () => {
		await setDBAPI();
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<form>
			{/* 설문지 타이틀 */}
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
			<section className="flex flex-col gap-10 mt-10 mb-28">
				<FormBlock />
				<FormBlock />
			</section>
			<FormBottom />
		</form>
	);
};

export default NewFormPage;
