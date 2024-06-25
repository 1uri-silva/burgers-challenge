import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from 'react'

import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Input } from "@/components/input";
import { MenuBar } from "@/components/menu-bar";
import { Section } from "@/components/section";
import { Dialog } from "@/components/ui/dialog";

import { Item } from "../Item";

import { Cart } from "@/components/cart";
import { Loading } from "@/components/loading";
import { fetchProduct, fetchRestaurant } from "@/lib/api/mock-api";
import { cartProductSelect } from "@/redux/reducers/cart";
import {
	selectItemType
} from '@/redux/reducers/filter-item'
import {
	store,
	storeProduct
} from '@/redux/reducers/store-products-item'
import {
	loading,
	storage,
	storageRestaurant
} from '@/redux/reducers/store-restaurant'
import { useNavigate } from "react-router-dom";

export function Home() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const itemSelect = useAppSelector(cartProductSelect)
	const productStorage = useAppSelector(storeProduct)
	const restaurantStorage = useAppSelector(storageRestaurant)

	useEffect(() => {
		(async () => {
			dispatch(loading(true))
			const [{ data: restaurants }, { data: products }] = await Promise.all([
				fetchRestaurant(),
				fetchProduct()
			])
			dispatch(loading(false))
			dispatch(store(products))
			dispatch(storage(restaurants))
		})()
	}, [dispatch])


	if (restaurantStorage.loading) {
		return <Loading />

	}
	return (
		<>
			<MenuBar
				bgColor={restaurantStorage.restaurant?.webSettings.navBackgroundColour}
				primaryColor={restaurantStorage.restaurant?.webSettings.primaryColour}
			/>
			<img
				src={restaurantStorage.restaurant?.webSettings.bannerImage}
				alt="banner"
				className="w-[1450px] h-[150px] object-cover laptop:w-screen"
			/>
			<div className="flex flex-col w-full h-full tablet:items-center">
				<div className="flex flex-col laptop:w-[1024px] tablet:items-center">
					<Input />
					<div className="flex flex-row laptop:gap-6 ">

						<div className="flex flex-col laptop:w-[600px] laptop:shadow-xl">
							<div className="flex flex-row pt-5 pb-6 overflow-x-auto w-screen laptop:w-full">
								{productStorage.products?.sections.map((value) => (
									<Carousel
										name={value.name}
										image_url={value.images}
										key={value.id.toString()}
										selectedName={(item) => dispatch(selectItemType(item))}
										borderColor={restaurantStorage.restaurant?.webSettings.primaryColour}
									/>
								))}
							</div>

							<Dialog>
								{productStorage.products?.sections.map((values) => (
									<Section
										key={values.id.toString()}
										name={values.name}
										items={values.items}
									/>
								))}
								<Item />
							</Dialog>


							<div className="tablet:hidden w-screen flex flex-col text-center justify-center p-6">
								<a
									href="/"
									className="text-[#4F372F] font-bold underline"
									style={{ color: restaurantStorage.restaurant?.webSettings.primaryColour }}
								>
									View allergy information
								</a>
								<Button
									title={`Your basket • ${itemSelect.products.length} item`}
									onClick={() => navigate('/basket')}
								/>
							</div>
						</div>

						<div className="flex-col w-80 h-[400px] hidden laptop:flex laptop:shadow-md overflow-hidden">
							<div className="h-16 px-4 py-[18px] flex flex-row items-center bg-white border-b border-[#DADADA] tablet:">
								<h1 className="text-black text-start font-medium text-2xl">Carrinho</h1>
							</div>
							<Cart />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

