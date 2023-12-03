import { createSlice } from '@reduxjs/toolkit';
import { BlockType } from '../../types/index';
import { RootState } from '../store';

const initialState: BlockType[] = [
	{
		id: 0,
		type: 'short',
		blockTitle: '',
		isRequired: false,
		options: [{ id: 0, content: '' }],
	},
];

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		ADD_BLOCK: (state, action) => {
			const newBlock = action.payload;
			const updatedBlock = {
				...newBlock,
				id: state.length,
			};
			state.push(updatedBlock);
		},

		DELETE_BLOCK: (state, action) => {
			const id = action.payload;
			const index = state.findIndex((block) => block.id === id);
			state.length > 1 && state.splice(index, 1);
		},

		COPY_BLOCK: (state, action) => {
			const id = action.payload;
			const currentBlockIndex = state.findIndex((block) => block.id === id);
			if (currentBlockIndex !== -1) {
				const newBlock = { ...state[currentBlockIndex], id: state.length };
				state.splice(currentBlockIndex + 1, 0, newBlock);
			}
		},

		SET_BLOCK_TITLE: (
			state,
			action: { payload: { id: number; blockTitle: string } }
		) => {
			const { id, blockTitle } = action.payload;
			const currentBlock = state.find((item) => item.id === id);
			if (currentBlock) {
				currentBlock.blockTitle = blockTitle;
			}
		},

		SET_BLOCK_TYPE: (state, action) => {
			const { id, type } = action.payload;
			const currentBlock = state.find((item) => item.id === id);
			if (currentBlock) {
				currentBlock.type = type;
				// if (type === 'short' || type === 'long')
				// 	currentBlock.options = [{ id: 0, content: '' }];
			}
		},

		SET_REQUIRED: (state, action) => {
			const { id, isRequired } = action.payload;
			const currentBlock = state.find((block) => block.id === id);
			currentBlock && (currentBlock.isRequired = isRequired);
		},

		ADD_OPTION: (state, action) => {
			const { id, optionId } = action.payload;
			const currentBlock = state.find((item) => item.id === id);
			if (currentBlock && currentBlock.options) {
				currentBlock.options.push({ id: optionId, content: '' });
			}
		},

		DELETE_OPTION: (state, action) => {
			const { id, optionId } = action.payload;
			const currentBlock = state.find((item) => item.id === id);
			if (currentBlock && currentBlock.options) {
				const optionIdx = currentBlock.options.findIndex(
					(option) => option.id === optionId
				);
				currentBlock.options.splice(optionIdx, 1);
			}
		},

		SET_OPTIONS_CONTENT: (state, action) => {
			const { id, optionId, optionContent } = action.payload;
			const currentBlock = state.find((item) => item.id === id);
			if (currentBlock && currentBlock.options) {
				const optionIdx = currentBlock.options.findIndex(
					(option) => option.id === optionId
				);
				currentBlock.options[optionIdx].content = optionContent;
			}
		},
	},
});

export const {
	ADD_BLOCK,
	DELETE_BLOCK,
	COPY_BLOCK,
	SET_BLOCK_TITLE,
	SET_BLOCK_TYPE,
	SET_REQUIRED,
	ADD_OPTION,
	DELETE_OPTION,
	SET_OPTIONS_CONTENT,
} = formSlice.actions;

export const selectForm = (state: RootState) => state.form;
export default formSlice.reducer;
