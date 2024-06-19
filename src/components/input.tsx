import { Icon } from "./icons";

export const Input: React.FC = () => {
	return (
		<div className="w-full laptop:max-w-[1024px] p-4">
			<div className="flex flex-row items-center py-[10px] px-[10px] gap-3 rounded-lg border border-[#8A94A4]">
				<Icon name="SearchIcon" className="size-4" />
				<input
					type="text"
					placeholder="Search menu item"
					className="font-normal text-base bg-transparent flex-1 focus:outline-none"
				/>
			</div>
		</div>
	);
};
