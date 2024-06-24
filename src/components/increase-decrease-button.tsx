import { Icon } from "./icons"

type IncreaseDecreaseButton = {
  countTotal: number
  increase(quantity: number): void
  decrease(quantity: number): void
}

export const IncreaseDecreaseButton: React.FC<IncreaseDecreaseButton> = ({
  decrease,
  increase,
  countTotal,
}) => {

  return (
    <div
      data-testid="container-increase-decrease"
      className="flex flex-row w-full justify-center items-center gap-4"
    >
      <button
        type="button"
        onClick={() => decrease(countTotal - 1)}
      >
        <Icon name="CircleMinusIcon" className="size-8" />
      </button>
      <span data-testid="amount-total">{countTotal}</span>
      <button
        type="button"
        onClick={() => increase(countTotal + 1)}
      >
        <Icon name="CirclePlusIcon" className="size-8" />
      </button>
    </div>
  )
}