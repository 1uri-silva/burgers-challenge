import { useAppDispatch } from "@/redux/hooks";
import { selectItemAction } from "@/redux/reducers/cart";
import { Item } from "@/redux/reducers/store-products-item";
import { Icon } from "./icons";
import { DialogTrigger } from "./ui/dialog";


type SectionProps = {
	name: string;
	items: Item[];
};

export const Section: React.FC<SectionProps> = ({ items, name }) => {
	const dispatch = useAppDispatch()
	return (
		<div className="w-full relative overflow-hidden pb-3">

			<input
				type="checkbox"
				className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
			/>

			<div className="flex items-center px-4 h-12">
				<h3 className="text-2xl font-medium">{name}</h3>
			</div>

			<div
				className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
				<Icon
					name="ChevronUpIcon"
				/>
			</div>

			<div className="overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-full peer-checked:p-3">
				{items.map((item) => (
					<DialogTrigger key={item.id.toString()} asChild>
						<button
							type="button"
							onClick={() => dispatch(selectItemAction(item))}
							className="flex flex-row w-full space-y-4 justify-between"
						>
							<div className="h-20 w-32 text-left tablet:w-[550px] laptop:w-[400px] ">
								<div className="w-4 h-4 flex items-center justify-center rounded-sm bg-[#4F372F]">
									<span className="font-normal text-sm text-white">1</span>
								</div>
								<strong className="font-medium">{item.name}</strong>
								<p className="font-light text-[#464646] whitespace-nowrap overflow-hidden text-ellipsis">
									{item?.description}
								</p>
								<span>R${item.price}</span>
							</div>
							{
								item.images && (
									<img
										src={item.images[0].image}
										alt="launch"
										className="w-32 h-20 rounded-md"
									/>
								)
							}
						</button>
					</DialogTrigger>
				))}
			</div>
		</div >
	);
};
