import { useAppSelector } from "@/redux/hooks"
import { cartProductSelect } from "@/redux/reducers/cart"
import { IncreaseDecreaseButton } from "./increase-decrease-button"

export const Cart: React.FC = () => {
  const filterValue = useAppSelector(cartProductSelect)
  return (
    <div className="w-full">
      {filterValue.products.map((product, index) => (
        <div
          key={`${product.name}+${index}`}
          className="flex flex-row p-4 items-center justify-between border-b border-[#DADADA]"
        >
          <div className="flex flex-col gap-2">
            <strong className="text-[#121212]">{product.name}</strong>
            {product.modifiers && (
              <span className="text-[#5F5F5F]">
                {product.modifiers?.name} (+${product.modifiers?.price})
              </span>
            )}
            <IncreaseDecreaseButton countTotal={product.amountOrder} id={product.id} />
          </div>
          <span className="text-[#121212]">R${product.total}</span>
        </div>
      ))}


      <div className="flex flex-col">
        <div className="flex flex-row justify-between p-4">
          <span>Sub total</span>
          <span>R${filterValue.total}</span>
        </div>
        <div className="flex flex-row p-4 items-center justify-between border-b border-[#DADADA]" />
        <div className="flex flex-row justify-between p-4">
          <span className="text-[#121212] font-light">Total:</span>
          <span className="font-bold text-2xl">R${filterValue.total}</span>
        </div>
      </div>

    </div>
  )
}