import { useParams } from 'react-router-dom';
import { getFormDataAPI } from '../../api/form/getForm';
import { useEffect, useState } from 'react';
import { BlockType } from '../../types';
import AnswerBlock from '../../components/form/AnswerBlock';

const AnswerPage = () => {
	const { id } = useParams();
	const [formData, setFormData] = useState<BlockType[]>([]);

	const fetchFormData = async () => {
		const data = await getFormDataAPI(id as string);
		setFormData(data);
	};

	useEffect(() => {
		fetchFormData();
	}, []);

	return (
		<form>
			{formData?.map((data, idx) => (
				<AnswerBlock key={idx} />
			))}
			<button type="button">제출</button>
		</form>
	);
};

export default AnswerPage;
