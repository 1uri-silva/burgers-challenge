import { useAppSelector } from "@/redux/hooks";
import { selectFilterItem } from "@/redux/reducers/filter-item";
import { Image } from "@/redux/reducers/store-products-item";

type CarouselProps = {
	name: string;
	borderColor?: string;
	image_url: Image[] | null;
	selectedName(name: string): void;
};

export const Carousel: React.FC<CarouselProps> = ({
	name,
	image_url,
	borderColor,
	selectedName,
}) => {
	const filterType = useAppSelector(selectFilterItem)

	return (
		<button
			type="button"
			onClick={() => selectedName(name)}
			data-active={name}
			className="w-[104px] h-[146px] p-4 flex flex-col items-center"
		>
			<div
				className='h-16 w-16 flex items-center justify-center rounded-full border-2'
				style={{
					borderColor: filterType.itemType === name ? borderColor : 'transparent',
					borderWidth: filterType.itemType === name ? '2px' : '0px'
				}}
			>
				{image_url && (
					<img
						src={image_url[0].image}
						alt={`food ${name}`}
						className="rounded-full object-cover h-14 w-14"
					/>
				)}
			</div>
			<strong className="font-semibold text-base mt-4">{name}</strong>
			<div
				className='w-full h-1 mt-2 border-2 rounded'
				style={{
					borderColor: filterType.itemType === name ? borderColor : 'transparent',
					backgroundColor: filterType.itemType === name ? borderColor : 'transparent',
				}}
			/>
		</button>
	);
};
