import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { cartProductSlice } from "./reducers/cart";
import { filterItemSlice } from "./reducers/filter-item";
import { storeProductSlice } from "./reducers/store-products-item";
import { storageRestaurantSlice } from "./reducers/store-restaurant";

export const store = configureStore({
	reducer: {
		cart: cartProductSlice.reducer,
		filter: filterItemSlice.reducer,
		storage: storageRestaurantSlice.reducer,
		storeProduct: storeProductSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
