import { useState } from "react";

import { Modifier } from "@/redux/reducers/cart";
import { Items } from "@/redux/reducers/store-products-item";

type ChooseItemProps = {
  mim: number;
  max: number;
  items: Items[];
  selectModifier(item: Modifier): void
};

export const ChooseItem: React.FC<ChooseItemProps> = ({ items, selectModifier }) => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  const handleSubmit = (index: number) => {
    if (index !== null) {
      selectModifier(items[index]);
    }
  };

  const handleCheckboxChange = (index: number) => {
    setCheckedIndex(index === checkedIndex ? null : index);
    handleSubmit(index)
  };

  return (
    <>
      {
        items.map((modifier, index) => (
          <div
            key={modifier.id.toString()}
            data-testid="container-modifier"
            className="flex flex-row items-center justify-between px-6 py-4"
          >
            <div className="flex flex-col">
              <strong className="font-bold text-[#464646]">{modifier.name}</strong>
              <span className="font-normal text-[#5F5F5F]">{modifier.price}</span>
            </div>
            <input
              type="checkbox"
              data-testid="check-item"
              checked={index === checkedIndex}
              onChange={() => handleCheckboxChange(index)}
              className="appearance-none rounded-full h-5 w-5 cursor-pointer border-4 border-[#5F5F5F] checked:bg-blue-500"
            />
          </div>
        ))
      }
    </>
  )
}