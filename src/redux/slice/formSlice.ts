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
			state.push(newBlock);
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
			}
		},
	},
});

export const { ADD_BLOCK, SET_BLOCK_TITLE, SET_BLOCK_TYPE } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;
export default formSlice.reducer;
