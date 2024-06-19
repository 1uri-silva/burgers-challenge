import { useState } from "react";

import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Input } from "@/components/input";
import { MenuBar } from "@/components/menu-bar";
import { Section } from "@/components/section";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Basket } from "../Basket";
import { Item } from "../Item";


export function Home() {
	const [name, setName] = useState("Burgers");

	const itemsBurgers = Array.from({ length: 3 }).map(() => ({
		id: 1625701,
		name: "Hard Core",
		description:
			"180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.",
		alcoholic: 0,
		price: 33.0,
		position: 0,
		visible: 1,
		availabilityType: "AVAILABLE_NOW",
		sku: "I1625701",
		images: [
			{
				id: 108305,
				image:
					"https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png",
			},
		],
		available: true,
	}));

	const itemsDrinks = Array.from({ length: 2 }).map(() => ({
		id: 1625705,
		name: "Caipirinha",
		alcoholic: 0,
		price: 13.0,
		position: 0,
		visible: 1,
		availabilityType: "AVAILABLE_NOW",
		sku: "I1625705",
		available: true,
	}));

	const carousel = {
		sections: [
			{
				id: 242403,
				name: "Burgers",
				description: null,
				position: 0,
				visible: 1,
				images: [
					{
						id: 1550,
						image:
							"https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png",
					},
				],
				items: itemsBurgers,
			},
			{
				id: 242404,
				name: "Drinks",
				position: 1000,
				visible: 1,
				images: [
					{
						id: 1551,
						image:
							"https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
					},
				],
				items: itemsDrinks,
			},
			{
				id: 242409,
				name: "Burgers",
				description: null,
				position: 0,
				visible: 1,
				images: [
					{
						id: 1550,
						image:
							"https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png",
					},
				],
				items: itemsBurgers,
			},
			{
				id: 242405,
				name: "Drinks",
				position: 1000,
				visible: 1,
				images: [
					{
						id: 1551,
						image:
							"https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
					},
				],
				items: itemsDrinks,
			},
			{
				id: 24245,
				name: "Drinks",
				position: 1000,
				visible: 1,
				images: [
					{
						id: 1551,
						image:
							"https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
					},
				],
				items: itemsDrinks,
			},
			{
				id: 12131,
				name: "Drinks",
				position: 1000,
				visible: 1,
				images: [
					{
						id: 1551,
						image:
							"https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
					},
				],
				items: itemsDrinks,
			},
		],
	};

	return (
		<>
			<MenuBar navBackgroundColor="bg-[#4f372f]" />
			<img
				src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
				alt="banner"
				className="w-[1480px] h-[150px] object-cover laptop:w-screen"
			/>
			<div className="flex flex-col w-screen h-screen laptop:items-center">
				<div className="flex flex-col laptop:w-[1024px] h-screen">
					<Input />
					<div className="flex flex-row laptop:gap-6 ">

						<div className="flex flex-col laptop:w-[600px] laptop:shadow-xl">
							<div className="flex flex-row space-x-3 px-4 pt-5 pb-6 overflow-x-auto w-screen laptop:w-full">
								{carousel.sections.map((value) => (
									<Carousel
										key={value.id.toString()}
										name={value.name}
										image_url={value.images[0].image}
										selectedName={(e) => setName(e)}
									/>
								))}
							</div>

							<Dialog>
								{carousel.sections.map((values) => {
									if (values.name === name) {
										return (
											<DialogTrigger>
												<Section
													name={values.name}
													items={values.items}
													key={values.id.toString()}
												/>
											</DialogTrigger>
										);
									}
								})}
								<Item />
							</Dialog>

							<div className="laptop:hidden w-screen flex flex-col text-center justify-center p-6">
								<a href="/" className="text-[#4F372F] font-bold underline">
									View allergy information
								</a>
								<Button title="Your basket • 1 item" />
							</div>
						</div>

						<div className="w-80 h-96 hidden laptop:flex laptop:shadow-md">
							<Basket />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
