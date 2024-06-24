import { useAppDispatch } from "@/redux/hooks";
import { selectItemAction } from "@/redux/reducers/cart";
import { Item } from "@/redux/reducers/store-products-item";
import { Icon } from "./icons";
import { Product } from "./product";
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

			<div className="overflow-hidden max-h-0 transition-all duration-500 bg-violet-500 peer-checked:max-h-full peer-checked:p-3">
				{items.map((item) => (
					<DialogTrigger
						data-testid='trigger'
						key={item.id.toString()}
						onClick={() => dispatch(selectItemAction(item))}
						className="w-full"
					>
						<Product 
							name={item.name}
							price={item.price}
							images={item.images}
							description={item.description}
						/>
					</DialogTrigger>
				))}
			</div>
		</div >
	);
};
