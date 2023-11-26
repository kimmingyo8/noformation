import { notionDatabaseURL } from '../notoinAuthInstance';

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
				},
			}
		);
		return res;
	} catch (err) {
		console.log(err);
	}
};
