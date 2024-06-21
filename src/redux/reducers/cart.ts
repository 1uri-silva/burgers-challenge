import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Item } from "./store-products-item";

interface Modifier {
  id: number;
  name: string;
  price: number
}

type Product = {
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
  tmp: { [key: number]: Product }
  priceProduct: { [key: number]: number }
  countTotalProduct: { [key: number]: number }
};


const initialState: ProductState = {
  tmp: {},
  total: 0,
  item: null,
  products: [],
  priceProduct: {},
  countTotalProduct: {},
};

export const cartProductSelect = (state: RootState) => state.cart;

export const cartProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectItemAction: (state, action: PayloadAction<Item>) => {
      state.item = action.payload;

    },

    addItemProductToCartAction: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id)


      if (index !== -1) {
        state.products[index].amountOrder += 1
        state.products[index].total += action.payload.price;
      } else {
        state.products = [...state.products, action.payload];
      }
      state.total = state.products.reduce((total, produto) => total + produto.total, 0)
    },

    addModifierAction: (state, action: PayloadAction<{ items: Modifier, id: number }>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id)

      if (index !== -1) {
        state.products[index].modifiers = action.payload.items

        state.products[index].total =
          state.products[index].price * state.products[index].amountOrder +
          (state.products[index]?.modifiers?.price ?? 0);
      }
      state.total = state.products.reduce(
        (total, produto) => total + produto.total,
        0
      );

    },

    incrementAmountOderAction: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);

      if (index !== -1) {
        state.products[index].amountOrder++;

        state.products[index].total =
          state.products[index].price * state.products[index].amountOrder +
          (state.products[index]?.modifiers?.price ?? 0);
      }
      state.total = state.products.reduce(
        (total, produto) => total + produto.total,
        0
      );
    },







    decrementAmountOderAction: (state, action: PayloadAction<{ id: number }>) => {
      // if (state.tmp[action.payload.id].amountOrder === 0) return;

      // state.tmp[action.payload.id].amountOrder--
      // state.tmp[action.payload.id].total = state.tmp[action.payload.id].amountOrder * (state.item?.price ?? 0)

      // state.total = Object.values(state.tmp).reduce((total, produto) => produto.total - total, 0)

    },




  }

})

export const {
  selectItemAction,
  addModifierAction,
  incrementAmountOderAction,
  decrementAmountOderAction,
  addItemProductToCartAction,
} = cartProductSlice.actions;