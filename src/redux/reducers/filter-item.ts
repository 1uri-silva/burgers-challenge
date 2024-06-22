import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FilterItem {
	itemType: string;
}

const initialState: FilterItem = {
	itemType: "Burgers",
};

export const selectFilterItem = (state: RootState) => state.filter;

export const filterItemSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		selectItemType: (state, action: PayloadAction<string>) => {
			state.itemType = action.payload;
		},
	}
});

export const {
	selectItemType,
} = filterItemSlice.actions;
