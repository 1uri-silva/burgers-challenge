import { HTMLAttributes } from "react";
type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	title: string;
};

export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
	return (
		<button
			type="button"
			className="w-full h-12 bg-[#4F372F] text-white font-bold rounded-full"
			{...rest}
		>
			<span className="text-center">{title}</span>
		</button>
	);
};
