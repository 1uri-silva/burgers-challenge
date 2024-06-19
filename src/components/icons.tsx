import * as icons from "lucide-react";

type IconPops = icons.LucideProps & {
	name: keyof typeof icons;
};

const Icon: React.FC<IconPops> = ({ name, ...props }) => {
	const LucideIcon = icons[name];

	//@ts-ignore
	return <LucideIcon {...props} />;
};

export { Icon };
