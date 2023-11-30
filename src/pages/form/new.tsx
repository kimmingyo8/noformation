import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Input from '../../components/common/Input';
import FormBlock from '../../components/form/FormBlock';
import FormBottom from '../../components/form/FormBottom';
import { MakeFormAPI, setDBAPI } from '../../api/form/makeForm';
import { useSelector } from 'react-redux';
import { selectForm } from '../../redux/slice/formSlice';
import { BlockType } from '../../types';

const NewFormPage = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const blockDatas = useSelector(selectForm);
	console.log(blockDatas);
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		name === 'form-title' && setTitle(value);
		name === 'form-desc' && setDesc(value);
	};

	const handleSaveForm = async (e: React.FormEvent) => {
		e.preventDefault();
		const pageId = await MakeFormAPI({
			title: title,
			desc: desc,
			blockDatas: blockDatas,
		});
	};

	const fetchSetting = async () => {
		await setDBAPI();
	};

	useEffect(() => {
		fetchSetting();
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
				{blockDatas.map((blockData: BlockType, idx: number) => (
					<FormBlock key={blockData.id} blockData={blockData} />
				))}
			</section>
			<FormBottom handleSaveForm={handleSaveForm} />
		</form>
	);
};

export default NewFormPage;
