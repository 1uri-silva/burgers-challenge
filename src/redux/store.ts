import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

const rootReducer = combineReducers({
	cart: cartProductSlice.reducer,
	filter: filterItemSlice.reducer,
	storage: storageRestaurantSlice.reducer,
	storeProduct: storeProductSlice.reducer,
})
 
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
