import { formatCurrency } from "@/lib/utils/format-currency"
import { useAppSelector } from "@/redux/hooks"
import { cartProductSelect } from "@/redux/reducers/cart"
import { ProductCart } from "./product-cart"

export const Cart: React.FC = () => {
  const filterValue = useAppSelector(cartProductSelect)

  return (
    <div
      data-testid='container-cart'
      className="w-full"
    >
      <div className="w-full tablet:h-[230px] overflow-auto">

        {filterValue.products.map((product, index) => (
          <ProductCart
            key={`${product.name}+${index}`}
            {...product}
          />
        ))}
      </div>


      <div className="flex flex-col p-4 space-y-3">
        <div className="flex flex-row justify-between">
          <span>Sub total</span>
          <span>R${formatCurrency(filterValue.total)}</span>
        </div>
        <div className="flex flex-row items-center justify-between border-b border-[#DADADA]" />
        <div className="flex flex-row justify-between">
          <span className="text-[#121212] font-light">Total:</span>
          <span className="font-bold text-2xl">R${formatCurrency(filterValue.total)}</span>
        </div>
      </div>

    </div>
  )
}