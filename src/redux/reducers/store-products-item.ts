import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Products {
	id: number;
	name: string;
	type: string;
	collapse: number;
	sections: Section[];
}

interface Section {
	id: number;
	name: string;
	description?: string | null;
	position: number;
	visible?: number;
	images: Image[] | null;
	items: Item[];
}

export interface Item {
	id: number;
	name: string;
	description?: string;
	alcoholic: number;
	price: number;
	position: number;
	visible?: number;
	availabilityType: string;
	sku?: string;
	images?: Image[];
	available: boolean;
	modifiers?: Modifier[];
}

export interface Modifier {
	id: number;
	name: string;
	minChoices: number;
	maxChoices: number;
	items: Items[];
}

export interface Items {
	id: number;
	name: string;
	price: number;
	maxChoices: number;
	position: number;
	visible: number;
	availabilityType: string;
	available: boolean;
}

export interface Image {
	id: number;
	image: string;
}

export interface StoreProductItem {
	products: Products | null;
	loading: boolean,
}

const initialState: StoreProductItem = {
	products: null,
	loading: true,
};

export const storeProduct = (state: RootState) => state.storeProduct;

export const storeProductSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		loading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		store: (state, action: PayloadAction<Products>) => {
			state.products = action.payload;
		},
	},
});

export const { store } = storeProductSlice.actions;
