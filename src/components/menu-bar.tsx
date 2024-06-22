import { HTMLAttributes, useState } from "react";

import { cn } from "@/lib/utils/merge";
import { Icon } from "./icons";

type PropsMenu = HTMLAttributes<HTMLElement> & {
	bgColor?: string;
	primaryColor?: string
};

export const MenuBar: React.FC<PropsMenu> = ({ className, bgColor, primaryColor, ...rest }) => {

	const [isNavOpen, setIsNavOpen] = useState(false);
	const [menuSelected, setMenuSelected] = useState('Menu');

	return (
		<div className={cn(
			"flex items-center justify-between bg-gray-400 px-3 h-16 tablet:h-[52px] tablet:flex-row tablet:justify-around",
			className
		)}
			style={{ background: bgColor }}
			{...rest}>
			<Icon name='ArrowLeftIcon' className="text-transparent tablet:hidden" />
			<span className="uppercase text-white text-lg tablet:hidden">{menuSelected}</span>
			<nav>
				<section className="flex flex-row justify-between tablet:hidden flex-1">
					<button
						type="button"
						className="h-7 w-7"
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						<Icon name="MenuIcon" className="text-white size-6" />
					</button>

					<div
						data-state={isNavOpen}
						style={{ background: bgColor }}
						className="data-[state=true]:block data-[state=true]:absolute data-[state=true]:w-full data-[state=true]:h-screen data-[state=true]:top-0 data-[state=true]:left-0 data-[state=true]:z-10 data-[state=true]:flex-col data-[state=true]:justify-evenly data-[state=true]:items-center data-[state=false]:hidden"
					>
						<button
							type="button"
							className="absolute top-0 right-0 px-8 py-8"
							onClick={() => setIsNavOpen(false)}
						>
							<Icon name="X" />
						</button>

						<div className="flex flex-col items-center justify-between min-h-[250px] my-8 uppercase">
							<button
								type="button"
								onClick={() => { setIsNavOpen(false); setMenuSelected('Menu') }}
								className="uppercase text-white text-lg">Menu</button>
							<button
								type="button"
								onClick={() => { setIsNavOpen(false); setMenuSelected('Entrar') }}
								className="uppercase text-white text-lg">Entrar</button>
							<button
								type="button"
								onClick={() => { setIsNavOpen(false); setMenuSelected('Contato') }}
								className="uppercase text-white text-lg">Contato</button>
						</div>
					</div>
				</section>

				<div className="hidden space-x-12 tablet:flex ">
					<button
						type="button"
						className="uppercase text-white text-xl">Menu</button>
					<button
						type="button"
						className="uppercase text-white text-xl">Entrar</button>
					<button
						type="button"
						className="uppercase text-white text-xl">Contato</button>
				</div>
			</nav>
		</div>
	);
};