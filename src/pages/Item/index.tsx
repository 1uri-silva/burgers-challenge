import { Fragment, useCallback, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/button";
import { ChooseItem } from "@/components/choose-item";
import { Icon } from "@/components/icons";
import { IncreaseDecreaseButton } from "@/components/increase-decrease-button";
import { DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
	Modifier,
	addItemProductToCartAction,
	addModifierAction,
	cartProductSelect,
	decrementAmountOderAction,
	incrementAmountOderAction,
} from "@/redux/reducers/cart";


export const Item: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const carProducts = useAppSelector(cartProductSelect)
	const [modifier, setModifier] = useState<Modifier>()
	const [quantity, setQuantity] = useState<number>(1)

	const addQuantityProduct = useCallback((amount: number) => {
		setQuantity(amount)
		if (carProducts.item) {
			dispatch(incrementAmountOderAction({
				count: amount,
				id: carProducts.item.id
			}))
		}
	}, [dispatch, carProducts])

	const decreaseQuantityProduct = useCallback((amount: number) => {
		setQuantity(amount)
		if (carProducts.item) {
			dispatch(decrementAmountOderAction({
				count: amount,
				id: carProducts.item.id
			}))
		}
	}, [dispatch, carProducts])


	const addItemToCar = useCallback(() => {
		dispatch(addModifierAction({
			items: modifier,
			id: carProducts.item?.id,
		}))

		if (carProducts.item) {
			dispatch(addItemProductToCartAction(carProducts.item.id))
		}

		setQuantity(1)
		setModifier(undefined)

	}, [dispatch, carProducts, modifier])

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
							items={modifiers.items}
							mim={modifiers.minChoices}
							max={modifiers.maxChoices}
							key={modifiers.id.toString()}
							selectModifier={(item) => setModifier(item)}
						/>
					)}
				</Fragment>
			)}

			<div className="px-6 mt-7 space-y-2">
				{carProducts.item && (
					<IncreaseDecreaseButton
						countTotal={quantity}
						increase={(amount) => addQuantityProduct(amount)}
						decrease={(amount) => decreaseQuantityProduct(amount)}
					/>
				)}
			</div>


			<Button
				className="laptop:hidden"
				title={`Add to Order • $${carProducts.item?.price}`}
				onClick={() => {
					addItemToCar();
					navigate("/basket")
				}}
			/>
			<DialogTrigger
				className="max-laptop:hidden w-full"
			>
				<Button
					title={`Add to Order • $${carProducts.item?.price}`}
					onClick={addItemToCar}
				/>
			</DialogTrigger>
		</DialogContent >
	);
};