export interface BlockType {
	id: number;
	type: string;
	blockTitle: string;
	isRequired: boolean;
	options?: [
		{
			id: number;
			content: string;
		}
	];
}
