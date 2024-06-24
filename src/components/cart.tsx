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
      {filterValue.products.map((product, index) => (
        <ProductCart
          key={`${product.name}+${index}`}
          {...product}
        />
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