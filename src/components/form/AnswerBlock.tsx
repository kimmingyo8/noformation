import { BlockType } from '../../types';
import Input from '../common/Input';

interface AnswerBlockProps {
	data: BlockType;
}

const AnswerBlock = ({ data }: AnswerBlockProps) => {
	let answerTypeContent;
	switch (data.type) {
		case 'short':
			answerTypeContent = (
				<>
					<Input
						name="type_short"
						className="w-[70%]"
						placeholder="답변을 남겨주세요."
					/>
				</>
			);
			break;
		case 'long':
			answerTypeContent = (
				<>
					<Input name="type_long" placeholder="답변을 남겨주세요." />
				</>
			);
			break;
		case 'radio':
			answerTypeContent = (
				<div className="flex flex-col gap-3">
					{data.options?.map((option, idx) => (
						<label key={idx} htmlFor="type_radio">
							<input
								type="radio"
								id="type_radio"
								name="type_radio"
								className="mr-2"
							/>
							{option.content}
						</label>
					))}
				</div>
			);
			break;
		case 'check':
			answerTypeContent = (
				<div className="flex flex-col gap-3">
					{data.options?.map((option, idx) => (
						<label key={idx} htmlFor="type_check">
							<input
								type="checkbox"
								id="type_check"
								name="type_check"
								className="mr-2"
							/>
							{option.content}
						</label>
					))}
				</div>
			);
			break;
	}

	return (
		<fieldset className="w-full p-6 border shadow-xl border-slate-200 rounded-2xl">
			<p className="pb-2 font-semibold text-lg">{data.blockTitle}</p>
			{answerTypeContent}
		</fieldset>
	);
};

export default AnswerBlock;
