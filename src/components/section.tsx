import { Icon } from "./icons";

interface Images {
	id: number;
	image: string;
}

interface Items {
	id: number;
	name: string;
	description?: string;
	alcoholic: number;
	price: number;
	position: number;
	visible: number;
	availabilityType: string;
	sku: string;
	available: boolean;
	images?: Images[];
}

type SectionProps = {
	name: string;
	items: Items[];
};

export const Section: React.FC<SectionProps> = ({ items, name }) => {
	return (
		<label className="w-full flex flex-col">
			{/* <input className="peer/showLabel scale-0" type="checkbox" /> */}
			<div className="block px-4 py-0 overflow-hidden transition-all duration-500 peer-checked/showLabel:max-h-12">
				<div className="flex flex-row items-center justify-between px-4">
					<h3 className="text-2xl font-medium">{name}</h3>
					<Icon name="ChevronDownIcon" />
				</div>
				<div className="w-full p-4">
					{items.map((item, i) => {
						return (
							<div
								key={i.toString()}
								className="flex flex-row space-y-4 justify-between"
							>
								<div className="h-20 w-60 text-left laptop:w-[350px]">
									<div className="w-4 h-4 flex items-center justify-center rounded-sm bg-[#4F372F]">
										<span className="font-normal text-sm text-white">1</span>
									</div>
									<strong className="font-medium">{item.name}</strong>
									<p className="font-light text-[#464646] whitespace-nowrap overflow-hidden text-ellipsis">
										{item.description}
									</p>
									<span>R${item.price}</span>
								</div>
								{item.images && (
									<img
										src={item.images[0].image}
										alt="launch"
										className="w-32 h-20 rounded-md"
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</label>
	);
};
