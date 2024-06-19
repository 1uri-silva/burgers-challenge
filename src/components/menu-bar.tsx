import { Icon } from "./icons";

type PropsMenu = {
	navBackgroundColor: string;
};

export const MenuBar: React.FC<PropsMenu> = ({ navBackgroundColor }) => {
	return (
		<header
			className={`w-screen h-16 px-4 py-[18px] flex flex-row items-center justify-between
				${navBackgroundColor}`}
		>
			<Icon name="MoveLeftIcon" className={"text-transparent size-4"} />
			<h1 className="text-white text-center font-medium text-lg">Menu</h1>
			<Icon name="MenuIcon" className="text-white size-4" />
		</header>
	);
};

// "backgroundColor":"#ffffff",
// "primaryColor":"b",
// "primaryColorHover":"#4f372f",
// "navBackgroundColor":"#4f372f"
