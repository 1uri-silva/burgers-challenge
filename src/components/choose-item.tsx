import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addItemProductToCartAction, addModifierAction, cartProductSelect } from "@/redux/reducers/cart";
import { Items } from "@/redux/reducers/store-products-item";

type ChooseItemProps = {
  items: Items[];
  mim: number
  max: number
};

export const ChooseItem: React.FC<ChooseItemProps> = ({ items }) => {
  const dispatch = useAppDispatch()
  const carProducts = useAppSelector(cartProductSelect)
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);


  const handleCheckboxChange = (index: number) => {
    setCheckedIndex(index === checkedIndex ? null : index);
  };

  return (
    <>
      {
        items.map((modifier, index) => (

          <div key={modifier.id.toString()} className="flex flex-row items-center justify-between px-6 py-4">
            <div className="flex flex-col">
              <strong className="font-bold text-[#464646]">{modifier.name}</strong>
              <span className="font-normal text-[#5F5F5F]">{modifier.price}</span>
            </div>
            <input
              type="checkbox"
              checked={index === checkedIndex}
              onChange={() => {
                handleCheckboxChange(index);
                if (carProducts.item) {
                  dispatch(addModifierAction({
                    id: carProducts.item.id,
                    items: modifier
                  }))
                }
              }}
              className="appearance-none rounded-full h-5 w-5 cursor-pointer border-4 border-[#5F5F5F] checked:bg-blue-500"
            />
          </div>
        ))
      }
    </>
  )
}