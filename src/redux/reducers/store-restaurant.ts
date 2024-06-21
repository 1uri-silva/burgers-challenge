import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Restaurant {
	id: number;
	name: string;
	internalName: string;
	description: null;
	liveFlag: number;
	demoFlag: number;
	address1: string;
	address2: string;
	address3: null;
	city: string;
	county: string;
	postcode: string;
	country: string;
	timezoneOffset: string;
	locale: string;
	timeZone: string;
	webSettings: WebSettings;
	ccy: string;
	ccySymbol: string;
	currency: string;
}

export interface WebSettings {
	id: number;
	venueId: number;
	bannerImage: string;
	backgroundColour: string;
	primaryColour: string;
	primaryColourHover: string;
	navBackgroundColour: string;
}

export interface StoreRestaurant {
	restaurant: Restaurant | null;
	loading: boolean;
}

const initialState: StoreRestaurant = {
	restaurant: null,
	loading: true,
};

export const storageRestaurant = (state: RootState) => state.storage;

export const storageRestaurantSlice = createSlice({
	name: "storageRestaurant",
	initialState,
	reducers: {
		loading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		storage: (state, action: PayloadAction<Restaurant>) => {
			state.loading = false;
			state.restaurant = action.payload;
		},
	},
});

export const { storage, loading } = storageRestaurantSlice.actions;
