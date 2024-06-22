import { Button } from "@/components/button";
import { Cart } from "@/components/cart";
import { Icon } from "@/components/icons";
import { useNavigate } from "react-router-dom";

export const Basket: React.FC = () => {
const navigate = useNavigate()
	return (
		<>
			<header className="h-16 px-4 py-[18px] flex flex-row items-center justify-between bg-white border-b border-[#DADADA] tablet:">
				<Icon name="MoveLeftIcon" className="text-transparent size-4" />
				<h1 className="text-black text-center font-medium text-lg">Basket</h1>
				<Icon name="XIcon" className="text-transparent size-4" />
			</header>
			<Cart />
			<div className="absolute flex w-full bottom-6 p-4 tablet:hidden">
        <Button title="Checkout now" onClick={()=> navigate('/')}/>
      </div>
		</>
	);
};
