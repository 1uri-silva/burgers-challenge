import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Item } from "./store-products-item";

export interface Modifier {
  id: number;
  name: string;
  price: number
}

export interface Product {
  id: number;
  name: string;
  price: number;
  total: number
  amountOrder: number
  modifiers?: Modifier | undefined
}

type ProductState = {
  total: number;
  item: Item | null;
  products: Product[];
  tmpProduct: { [key: number]: Product };
};

const initialState: ProductState = {
  total: 0,
  item: null,
  products: [],
  tmpProduct: {},
};

export const cartProductSelect = (state: RootState) => state.cart;

export const cartProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectItemAction: (state, action: PayloadAction<Item>) => {
      state.item = action.payload;
      state.tmpProduct = {
        [action.payload.id]: {
          amountOrder: 1,
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          total: action.payload.price,
        }
      }
    },

    addItemProductToCartAction: (state, action: PayloadAction<number>) => {

      const index = state.products.findIndex(p => p.id === action.payload)

      if (index !== -1) {
        state.products[index].amountOrder += 1

        state.products[index].modifiers = state.tmpProduct[action.payload].modifiers
          ? state.tmpProduct[action.payload].modifiers
          : undefined

        state.products[index].total = state.products[index].price
          * state.products[index].amountOrder
          + (state.products[index]?.modifiers?.price ?? 0)

        state.total = state.products.reduce((total, product) => total + product.total, 0);
      } else {
        state.products = [...state.products, state.tmpProduct[action.payload]];
      }

      state.total = state.products.reduce((total, product) => total + product.total, 0)
    },

    addModifierAction: (state, action: PayloadAction<{ items?: Modifier, id?: number }>) => {
      if (action.payload.id) {
        state.tmpProduct[action.payload.id].modifiers = action.payload.items
        state.tmpProduct[action.payload.id].total =
          state.tmpProduct[action.payload.id].price * state.tmpProduct[action.payload.id].amountOrder
          + (state.tmpProduct[action.payload.id]?.modifiers?.price ?? 0);
      }

      state.total = state.products.reduce((total, product) => total + product.total, 0);

    },

    incrementAmountOderAction: (state, action: PayloadAction<{ id: number, count: number }>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);

      if (index !== -1) {
        state.products[index].amountOrder = action.payload.count;

        state.products[index].total =
          state.products[index].price * state.products[index].amountOrder +
          (state.products[index]?.modifiers?.price ?? 0);

      } else {
        state.tmpProduct[action.payload.id].amountOrder = action.payload.count;
        state.tmpProduct[action.payload.id].total =
          state.tmpProduct[action.payload.id].price * state.tmpProduct[action.payload.id].amountOrder
          + (state.tmpProduct[action.payload.id]?.modifiers?.price ?? 0);

      }
      state.total = state.products.reduce((total, currentValue) => total + currentValue.total, 0);

    },

    decrementAmountOderAction: (state, action: PayloadAction<{ id: number, count: number }>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);

      if (index === -1) {
        return;
      }

      if (state.products[index].amountOrder > 1) {
        state.products[index].amountOrder--;

        state.products[index].total =
          state.products[index].price * state.products[index].amountOrder +
          (state.products[index]?.modifiers?.price ?? 0);

        state.total -= state.products[index].price;
      } else {
        state.tmpProduct[action.payload.id].amountOrder = action.payload.count;

        state.tmpProduct[action.payload.id].total =
          state.tmpProduct[action.payload.id].price * state.tmpProduct[action.payload.id].amountOrder
          + (state.tmpProduct[action.payload.id]?.modifiers?.price ?? 0);

        state.total -= state.products[action.payload.id].price;

      }

    },
  },
})

export const {
  selectItemAction,
  addModifierAction,
  incrementAmountOderAction,
  decrementAmountOderAction,
  addItemProductToCartAction,
} = cartProductSlice.actions;