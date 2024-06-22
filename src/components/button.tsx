import { cn } from "@/lib/utils/merge";
import { HTMLAttributes } from "react";
type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	title: string;
};

export const Button: React.FC<ButtonProps> = ({ title, className, ...rest }) => {
	return (
		<button
			type="button"
			className={cn("w-full h-12 bg-[#4F372F] text-white font-bold rounded-full", className)}
			{...rest}
		>
			<span className="text-center">{title}</span>
		</button>
	);
};
