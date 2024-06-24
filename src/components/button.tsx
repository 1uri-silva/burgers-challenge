import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/merge";
import { useAppSelector } from "@/redux/hooks";
import { storageRestaurant } from "@/redux/reducers/store-restaurant";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	title: string;
};

export const Button: React.FC<ButtonProps> = ({ title, className, ...rest }) => {
	const restaurantStorage = useAppSelector(storageRestaurant)

	return (
		<button
			type="button"
			style={{ background: restaurantStorage.restaurant?.webSettings.primaryColour }}
			className={cn("w-full h-12 text-white font-bold rounded-full", className)}
			{...rest}
		>
			<span className="text-center">{title}</span>
		</button>
	);
};
