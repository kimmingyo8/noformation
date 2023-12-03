import { notionBlockURL } from '../notoinAuthInstance';

export const getFormDataAPI = async (pageId: string) => {
	try {
		const res = await notionBlockURL.get(`${pageId}/children`);
		const strJson = res.data.results[1].code.rich_text[0].plain_text;
		return JSON.parse(strJson);
	} catch (e) {
		console.log(e);
	}
};
