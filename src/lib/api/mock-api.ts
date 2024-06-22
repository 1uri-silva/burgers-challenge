import { Products } from "@/redux/reducers/store-products-item";
import { Restaurant } from "@/redux/reducers/store-restaurant";

import { sections } from './data'
export function fetchRestaurant() {
	return new Promise<{ data: Restaurant }>((resolve) =>
		setTimeout(
			() =>
				resolve({
					data: {
						id: 7602,
						name: "BURGERS RESTAURANT",
						internalName: "BURGERS RESTAURANT",
						description: null,
						liveFlag: 1,
						demoFlag: 1,
						address1: "Rua XX-X, 1-11",
						address2: "XXX",
						address3: null,
						city: "Bauru",
						county: "BR",
						postcode: "17012-360",
						country: "BR",
						timezoneOffset: "-03:00",
						locale: "pt-BR",
						timeZone: "America/Sao_Paulo",
						webSettings: {
							id: 5854,
							venueId: 7602,
							bannerImage:
								"https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png",
							backgroundColour: "#ffffff",
							primaryColour: "#4f372f",
							primaryColourHover: "#4f372f",
							navBackgroundColour: "#4f372f",
						},
						ccy: "BRL",
						ccySymbol: "R$",
						currency: "R$",
					},
				}),
			500,
		),
	);
}

export function fetchProduct() {
	return new Promise<{ data: Products }>((resolve) =>
		setTimeout(() =>
			resolve({
				data: {
					id: 14730,
					name: "FE TEST",
					type: "MENU",
					collapse: 0,
					sections,
				},
			}),
		),
	);
}
