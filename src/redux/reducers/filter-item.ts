import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Item } from "./store-products-item";

type Products = {
	name: string;
	price: number;
	increase?: number;
	increaseProduct?: string;
}
export interface FilterItem {
	name: string;
	products: Products[];
	total: number;
	increase?: number,
	item: Item | null
	itemType: string;
	increaseProduct?: string;
	amountOrderQuantity: number;
	initialPriceProduct: number
}

const initialState: FilterItem = {
	item: null,
	products: [],
	name: '',
	increase: 0,
	total: 0,
	increaseProduct: '',
	amountOrderQuantity: 0,
	initialPriceProduct: 0,
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
		addProductCart: (state, action: PayloadAction<Item>) => {
			state.item = action.payload;
		},
		storagePriceUniqueProduct: (state, action: PayloadAction<{ price: number, name: string }>) => {
			state.initialPriceProduct = action.payload.price
			state.total = action.payload.price
			state.name = action.payload.name
		},
		increasePartialProduct: (state, action: PayloadAction<{ name: string, price: number }>) => {

			const index = state.products.findIndex(p => p?.name === action.payload.name)

			if (index !== -1) {
				state.products[index].price = action.payload.price;
				state.total = state.products.reduce((total, product) => product.price + total, 0)
			} else {
				state.products.push({
					name: action.payload?.name,
					price: state.initialPriceProduct,
				});
				state.total = state.products.reduce((total, product) => product.price + total, 0)
			}

		},
		chooseItem: (state, action: PayloadAction<{ name: string, increase: number, increaseName: string }>) => {
			const index = state.products.findIndex(p => p?.name === action.payload.name)

			if (index !== -1) {
				state.products[index].increase = action.payload.increase;
				state.products[index].increaseProduct = action.payload.increaseName

			}

			state.total = state.products.reduce((total, product) => product.price + total, 0)
			// state.total = state.initialPriceProduct * state.amountOrderQuantity + (state.increase ?? 0);
		},

		//
		incrementAmountOrderQuantity: (state) => {
			state.amountOrderQuantity += 1;

			state.total = state.initialPriceProduct * state.amountOrderQuantity + (state.increase ?? 0);

			const existingProductIndex = state.products.findIndex(p => p.name === state.name);

			if (existingProductIndex !== -1) {
				state.products[existingProductIndex].price = state.total;
				state.products[existingProductIndex].increaseProduct = state.increaseProduct;
			}

			state.total = state.products.reduce((total, produto) => total + produto.price, 0)
		},




		decrementAmountOrderQuantity: (state) => {
			if (state.amountOrderQuantity <= 0) {
				return;
			}

			state.amountOrderQuantity -= 1
			state.total = state.initialPriceProduct * state.amountOrderQuantity - (state.increase ?? 0);

			// const productIndex = state.products.findIndex(p => p.increase === state.increase);

			// if (productIndex !== -1) {
			// 	state.products[productIndex].price = state.total;
			// }
			state.total = state.products.reduce((total, produto) => produto.price - total, 0)
		},

		storageIncrease: (state, action: PayloadAction<number>) => {
			state.initialPriceProduct = action.payload
			state.total = action.payload
		},
		clearState: (state) => {
			state.total = 0
			state.total = 0
			state.increase = 0
			state.name = ''
			state.products = []
			state.increaseProduct = ''
			state.amountOrderQuantity = 0
			state.initialPriceProduct = 0
		}
	},
});

export const {
	selectItemType,
	addProductCart,
	//
	chooseItem,
	increasePartialProduct,
	//
	clearState,
	incrementAmountOrderQuantity,
	decrementAmountOrderQuantity,
	storagePriceUniqueProduct,
} = filterItemSlice.actions;
