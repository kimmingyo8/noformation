import { BlockType } from '../../types/index';
import { notionDatabaseURL, notionPageURL } from '../notoinAuthInstance';

interface setFormAPIProps {
	title: string;
	desc: string;
	blockDatas: BlockType[];
	createdAt: string;
}

export const setDBAPI = async () => {
	try {
		const res = await notionDatabaseURL.patch(
			'/' + process.env.REACT_APP_NOTION_ROOT_DATABASE_KEY,
			{
				title: [
					{
						text: {
							content: 'Noformation 설문',
						},
					},
				],
				properties: {
					title: {
						title: {},
					},
					description: { rich_text: {} },
					createdAt: { date: {} },
				},
			}
		);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const setFormAPI = async ({
	title,
	desc,
	blockDatas,
	createdAt,
}: setFormAPIProps) => {
	try {
		const res = await notionPageURL.post('', {
			parent: {
				database_id: process.env.REACT_APP_NOTION_ROOT_DATABASE_KEY,
			},
			properties: {
				title: {
					title: [
						{
							type: 'text',
							text: {
								content: title,
								link: null,
							},
							plain_text: title,
							href: null,
						},
					],
				},
				description: {
					rich_text: [
						{
							type: 'text',
							text: {
								content: desc,
								link: null,
							},
							plain_text: desc,
							href: null,
						},
					],
				},
				createdAt: {
					date: {
						start: createdAt,
						end: null,
					},
				},
			},
			children: [
				{
					object: 'block',
					type: 'heading_2',
					heading_2: {
						rich_text: [{ type: 'text', text: { content: '질문지' } }],
					},
				},
				{
					object: 'block',
					type: 'code',
					code: {
						caption: [],
						rich_text: [
							{
								type: 'text',
								text: {
									content: JSON.stringify(blockDatas),
								},
							},
						],
						language: 'json',
					},
				},
			],
		});
		return res.data.id;
	} catch (err) {
		console.log(err);
	}
};
