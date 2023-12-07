import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Input from '../../components/common/Input';
import FormBlock from '../../components/form/FormBlock';
import FormBottom from '../../components/form/FormBottom';
import { setFormAPI, setDBAPI } from '../../api/form/setForm';
import { useSelector } from 'react-redux';
import { selectForm } from '../../redux/slice/formSlice';
import { BlockType } from '../../types';
import { useNavigate } from 'react-router-dom';
import { setAnswerDBAPI } from '../../api/form/answer';

const NewFormPage = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const blockDatas = useSelector(selectForm);
	const blockRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		name === 'form-title' && setTitle(value);
		name === 'form-desc' && setDesc(value);
	};

	const handleSaveForm = async (e: React.FormEvent) => {
		e.preventDefault();
		const pageId = await setFormAPI({
			title: title,
			desc: desc,
			blockDatas: blockDatas,
			createdAt: new Date().toISOString(),
		});
		await setAnswerDBAPI(pageId, blockDatas);
		navigate(`/answer/${pageId}`, { state: { title, desc } });
	};
	const fetchSetting = async () => {
		await setDBAPI();
	};

	useEffect(() => {
		fetchSetting();
	}, []);

	useEffect(() => {
		if (blockRef.current) {
			blockRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [blockDatas.length]);

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
			{/* 설문 블록 리스트 */}
			<section className="flex flex-col gap-10 mt-10 mb-28">
				{blockDatas.map((blockData: BlockType, idx: number) => (
					<FormBlock ref={blockRef} key={idx} blockData={blockData} />
				))}
			</section>

			<FormBottom handleSaveForm={handleSaveForm} />
		</form>
	);
};

export default NewFormPage;
