import { useLocation, useParams } from 'react-router-dom';
import { getFormDataAPI } from '../../api/form/getForm';
import { useEffect, useState } from 'react';
import { BlockType } from '../../types';
import AnswerBlock from '../../components/form/AnswerBlock';
import Loader from '../../components/common/Loader';

const AnswerPage = () => {
	const { id } = useParams();
	const location = useLocation();

	const [formData, setFormData] = useState<BlockType[]>([]);
	const { title, desc } = location.state || {};

	const fetchFormData = async () => {
		const data = await getFormDataAPI(id as string);
		setFormData(data);
	};

	useEffect(() => {
		fetchFormData();
	}, []);

	return (
		<form>
			{formData.length === 0 ? (
				<Loader />
			) : (
				<>
					<h2 className="text-4xl font-semibold">{title || '제목'}</h2>
					<p className="ml-1 mt-3">{desc || '설명'}</p>
					<div className="flex flex-col gap-10 mt-10 mb-16">
						{formData?.map((data, idx) => (
							<AnswerBlock data={data} key={idx} />
						))}
					</div>
					<button
						className=" mb-20 px-8 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-600 hover:bg-lime-500 focus-visible:outline float-right"
						type="button"
					>
						제출
					</button>
				</>
			)}
		</form>
	);
};

export default AnswerPage;
