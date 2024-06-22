import { useAppDispatch } from "@/redux/hooks"
import { decrementAmountOderAction, incrementAmountOderAction } from "@/redux/reducers/cart"
import { Icon } from "./icons"

type IncreaseDecreaseButton = {
  id: number
  countTotal: number
}

export const IncreaseDecreaseButton: React.FC<IncreaseDecreaseButton> = ({
  id,
  countTotal,
}) => {
  const dispatch = useAppDispatch()
  console.log({
    id,
    countTotal,
  })
  return (
    <div className="flex flex-row w-full justify-center items-center gap-4">
      <button type="button" onClick={() => {
        dispatch(decrementAmountOderAction({ id }))
      }}>
        <Icon name="CircleMinusIcon" className="size-8" />
      </button>
      <span>{countTotal || 1}</span>
      <button type="button" onClick={() => {
        dispatch(incrementAmountOderAction({ id }))
      }}>
        <Icon name="CirclePlusIcon" className="size-8" />
      </button>
    </div>
  )
}