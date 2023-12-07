import { BlockType } from '../../types';
import { notionDatabaseURL } from '../notoinAuthInstance';

export const setAnswerAPI = async () => {
	try {
	} catch (e) {
		console.log(e);
	}
};

export const setAnswerDBAPI = async (
	pageId: string,
	blockDatas: BlockType[]
) => {
	try {
		const properties = blockDatas.reduce(
			(acc, blockData) => {
				let property;
				switch (blockData.type) {
					case 'short':
						property = {
							[blockData.blockTitle]: {
								rich_text: {},
							},
						};
						break;
					case 'long':
						property = {
							[blockData.blockTitle]: {
								rich_text: {},
							},
						};
						break;
					case 'radio':
						property = {
							[blockData.blockTitle]: {
								select: {
									options: blockData.options?.map((option) => {
										return { name: option.content, color: 'green' };
									}),
								},
							},
						};
						break;
					case 'check':
						property = {
							[blockData.blockTitle]: {
								type: 'multi_select',
								multi_select: {
									options: blockData.options?.map((option) => {
										return { name: option.content, color: 'green' };
									}),
								},
							},
						};
						break;
					default:
						break;
				}

				return { ...acc, ...property };
			},
			{
				name: {
					title: {},
				},
			}
		);

		await notionDatabaseURL.post('', {
			parent: {
				type: 'page_id',
				page_id: pageId,
			},
			title: [
				{
					type: 'text',
					text: {
						content: '응답',
						link: null,
					},
				},
			],
			properties: properties,
		});
	} catch (e) {
		console.log(e);
	}
};
