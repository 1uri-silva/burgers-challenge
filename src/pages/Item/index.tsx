import { Fragment } from 'react'
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/button";
import { ChooseItem } from "@/components/choose-item";
import { Icon } from "@/components/icons";
import { IncreaseDecreaseButton } from "@/components/increase-decrease-button";
import { DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
	addItemProductToCartAction,
	cartProductSelect
} from "@/redux/reducers/cart";


export const Item: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const carProducts = useAppSelector(cartProductSelect)

	return (
		<DialogContent className="max-tablet:h-screen overflow-y-auto pb-10 laptop:pb-6 laptop:h-[850px]">
			<DialogClose asChild >
				<Icon
					name="XCircleIcon"
					className="absolute rounded-full top-10 right-4 z-50 size-7 bg-white text-[#4F372F]"
				/>
			</DialogClose>
			{carProducts.item?.images && carProducts.item.images.length > 0 ? (
				<img
					src={carProducts.item.images[0].image}
					alt="banner"
					className="w-full h-[265px] object-cover"
				/>
			) : (
				<div className="w-full h-[265px]" />
			)}
			<div className="p-4">
				<strong className="font-bold text-2xl text-[#121212]">
					{carProducts.item?.name || ''}
				</strong>

				<p className="font-normal text-[#464646]">
					{carProducts.item?.description || ''}
				</p>
			</div>


			{carProducts.item?.modifiers && (
				<Fragment key={carProducts.item.id.toString()}>
					<div className="flex flex-col px-6 py-4">
						<strong className="font-bold text-[#464646]">Chose your size</strong>
						<span className="font-normal text-[#5F5F5F]">Select 1 option</span>
					</div>
					{carProducts.item?.modifiers?.map(modifiers =>
						<ChooseItem
							key={modifiers.id.toString()}
							items={modifiers.items}
							mim={modifiers.minChoices}
							max={modifiers.maxChoices}
						/>
					)}
				</Fragment>
			)}

			<div className="px-6 mt-7 space-y-2">
				{carProducts.item && (
					<IncreaseDecreaseButton
						countTotal={carProducts.products[carProducts.item.id]?.amountOrder || 1}
						id={carProducts.item?.id}
					/>
				)}
				<Button
					className="laptop:hidden"
					title={`Add to Order • 
						$${carProducts.item?.id && carProducts.products[carProducts.item?.id]
							? carProducts.products[carProducts.item?.id].price
							: 0}
					`}
					onClick={() => {
						if (carProducts.item) {
							dispatch(addItemProductToCartAction({
								id: carProducts.item.id,
								name: carProducts.item.name,
								price: carProducts.item.price,
								amountOrder: 1,
								total: carProducts.item.price,
							}))
						}
						navigate("/basket")
					}
					}
				/>
				<DialogTrigger
					className="max-laptop:hidden w-full"
				>
					<Button
						title={`Add to Order • 
						$${carProducts.item?.id && carProducts.products[carProducts.item?.id]
								? carProducts.products[carProducts.item?.id].price
								: 0}
					`}
						onClick={() => {
							if (carProducts.item) {
								dispatch(addItemProductToCartAction({
									id: carProducts.item.id,
									name: carProducts.item.name,
									price: carProducts.item.price,
									amountOrder: 1,
									total: carProducts.item.price,
								}))
							}
						}}
					/>
				</DialogTrigger>
			</div>
		</DialogContent>
	);
};