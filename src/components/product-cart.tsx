import { useAppDispatch } from "@/redux/hooks"
import { Modifier, decrementAmountOderAction, incrementAmountOderAction } from "@/redux/reducers/cart"
import { IncreaseDecreaseButton } from "./increase-decrease-button"

type ProductCartProps = {
  id: number;
  name: string;
  total: number;
  amountOrder: number;
  modifiers?: Modifier | undefined
}

export const ProductCart: React.FC<ProductCartProps> = ({
  amountOrder,
  id,
  name,
  total,
  modifiers,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div
      className="flex flex-row p-4 items-center justify-between border-b border-[#DADADA]"
    >
      <div
        data-testid='product-name'
        className="flex flex-col gap-2"
      >
        <strong className="text-[#121212]">{name}</strong>
        {modifiers && (
          <span className="text-[#5F5F5F]">
            {modifiers?.name} (+${modifiers?.price})
          </span>
        )}
        <IncreaseDecreaseButton
          decrease={count => dispatch(decrementAmountOderAction({
            id,
            count,
          }))}
          increase={count => dispatch(incrementAmountOderAction({
            id,
            count,
          }))}
          countTotal={amountOrder}
        />
      </div>
      <span className="text-[#121212]">R${total}</span>
    </div>
  )
}