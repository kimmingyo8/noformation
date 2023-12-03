import axios from 'axios';

const notionAuthInstance = (url: string) => {
	return axios.create({
		baseURL: process.env.REACT_APP_BASE_URL + url,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
			'Notion-Version': '2022-06-28',
		},
	});
};

export const notionDatabaseURL = notionAuthInstance('databases');

export const notionPageURL = notionAuthInstance('pages');

export const notionBlockURL = notionAuthInstance('blocks');
