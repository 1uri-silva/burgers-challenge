import { useNavigate } from "react-router-dom";

import { Button } from "@/components/button";
import { Icon } from "@/components/icons";
import { DialogClose, DialogContent } from "@/components/ui/dialog";

export const Item: React.FC = () => {
	const navigate = useNavigate();
	return (
		<DialogContent className="max-mobile:h-screen overflow-y-auto pb-10 laptop:pb-6 laptop:h-[850px]">
			<DialogClose asChild>
				<Icon
					name="XCircleIcon"
					className="absolute rounded-full top-10 right-4 z-50 size-7 bg-white text-[#4F372F]"
				/>
			</DialogClose>
			<img
				src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
				alt="banner"
				className="w-full h-[265px] object-cover"
			/>
			<div className="p-4">
				<strong className="font-bold text-2xl text-[#121212]">
					Smash Burger
				</strong>

				<p className="font-normal text-[#464646]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit
					accusantium quod quaerat laborum deserunt hic provident sint, alias
					minus, iusto possimus, dolor dolorem optio eligendi? Deleniti at quis
					laborum!
				</p>
			</div>

			<div className="flex flex-col px-6 py-4 bg-blue-300">
				<strong className="font-bold text-[#464646]">Chose your size</strong>
				<span className="font-normal text-[#5F5F5F]">Select 1 option</span>
			</div>

			<div className="flex flex-row items-center justify-between px-6 py-4 bg-blue-400">
				<div className="flex flex-col">
					<strong className="font-bold text-[#464646]">1 meat</strong>
					<span className="font-normal text-[#5F5F5F]">R$33,00</span>
				</div>
				<input
					type="checkbox"
					className="appearance-none rounded-full h-5 w-5 cursor-pointer border-4 border-[#5F5F5F] checked:bg-blue-500"
				/>
			</div>
			<div className="flex flex-row items-center justify-between px-6 py-4">
				<div className="flex flex-col">
					<strong className="font-bold text-[#464646]">2 meat</strong>
					<span className="font-normal text-[#5F5F5F]">R$35,00</span>
				</div>
				<input
					type="checkbox"
					className="appearance-none rounded-full h-5 w-5 cursor-pointer border-4 border-[#5F5F5F] checked:bg-blue-500"
				/>
			</div>
			<div className="flex flex-row items-center justify-between px-6 py-4">
				<div className="flex flex-col">
					<strong className="font-bold text-[#464646]">3 meat</strong>
					<span className="font-normal text-[#5F5F5F]">R$37,00</span>
				</div>
				<input
					type="checkbox"
					className="appearance-none rounded-full h-5 w-5 cursor-pointer border-4 border-[#5F5F5F] checked:bg-blue-500"
				/>
			</div>

			<div className="px-6 mt-7 space-y-2">
				<div className="flex flex-row w-full justify-center items-center gap-4">
					<button type="button">
						<Icon name="CircleMinusIcon" className="size-8" />
					</button>
					<span>3</span>
					<button type="button">
						<Icon name="CirclePlusIcon" className="size-8" />
					</button>
				</div>
				<Button
					title="Add to Order • $11.75"
					onClick={() => navigate("/basket")}
				/>
			</div>
		</DialogContent>
	);
};
