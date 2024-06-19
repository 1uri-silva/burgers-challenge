type CarouselProps = {
	name: string;
	image_url: string;
	selectedName(name: string): void;
};

export const Carousel: React.FC<CarouselProps> = ({
	image_url,
	name,
	selectedName,
}) => {
	return (
		<button
			type="button"
			onClick={() => selectedName(name)}
			data-active={name}
			className="w-[104px] h-[146px] p-4 flex flex-col items-center group/root"
		>
			<div
				className={`h-16 w-16 flex items-center justify-center rounded-full border-2 
					group-data-[active=${name}]/root:border-[#4f372f]`}
			>
				<img
					src={image_url}
					alt={`food ${name}`}
					className="rounded-full object-cover h-14 w-14"
				/>
			</div>
			<strong className="font-semibold text-base mt-4">{name}</strong>
			<div
				className={`w-full h-1 mt-2 border-2
					group-data-[active=${name}]/root:border-[#4f372f]`}
			/>
		</button>
	);
};
