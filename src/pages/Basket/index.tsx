import { Button } from "@/components/button";
import { Icon } from "@/components/icons";

export const Basket: React.FC = () => {
	return (
		<>
			<header className="h-16 px-4 py-[18px] flex flex-row items-center justify-between bg-white border-b border-[#DADADA] tablet:">
				<Icon name="MoveLeftIcon" className="text-transparent size-4" />
				<h1 className="text-black text-center font-medium text-lg">Basket</h1>
				<Icon name="XIcon" className="text-[#4F372F] size-4 " />
			</header>
			<div className="flex flex-row p-4 items-center justify-between border-b border-[#DADADA]">
				<div className="flex flex-col gap-2">
					<strong className="text-[#121212]">Smash Brooks</strong>
					<span className="text-[#5F5F5F]">2 meat (+R$35,00)</span>
					<div className="flex flex-row items-center gap-2">
						<button type="button">
							<Icon name="CircleMinusIcon" className="size-5" />
						</button>
						<span>3</span>
						<button type="button">
							<Icon name="CirclePlusIcon" className="size-5" />
						</button>
					</div>
				</div>
				<span className="text-[#121212]">R$35,00</span>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-row justify-between p-4">
					<span>Sub total</span>
					<span>R$48,00</span>
				</div>
				<div className="flex flex-row p-4 items-center justify-between border-b border-[#DADADA]" />
				<div className="flex flex-row justify-between p-4">
					<span className="text-[#121212] font-light">Total:</span>
					<span className="font-bold text-2xl">R$48,00</span>
				</div>
			</div>
			<div className="absolute flex w-full bottom-6 p-4 tablet:hidden">
				<Button title="Checkout now" />
			</div>
		</>
	);
};
