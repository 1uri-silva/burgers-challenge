import { useAppSelector } from "@/redux/hooks";
import { Image } from "@/redux/reducers/store-products-item";
import { storageRestaurant } from "@/redux/reducers/store-restaurant";

type ProductProps = {
  price: number
  name: string;
  images?: Image[];
  amount?: number;
  description?: string
}
export const Product: React.FC<ProductProps> = ({
  name,
  price,
  images,
  amount,
  description,
}) => {
  const restaurant = useAppSelector(storageRestaurant)
  return (
    <div
      data-testid='product'
      className="flex flex-row w-full space-y-4 justify-between"
    >
      <div className="h-20 w-32 text-left tablet:w-[550px] laptop:w-[400px]">
        <div className="flex items-center gap-x-2">

          {amount &&
            <div
              className="w-4 h-4 flex items-center justify-center rounded-sm bg-[#4F372F]"
              style={{ backgroundColor: restaurant.restaurant?.webSettings.primaryColour }}
            >
              <span className="font-normal text-sm text-white">{amount}</span>
            </div>
          }
          <strong className="font-medium">{name}</strong>
        </div>

        <p className="font-light text-[#464646] whitespace-nowrap overflow-hidden text-ellipsis">
          {description}
        </p>
        <span>R${price}</span>
      </div>
      {
        images && (
          <img
            src={images[0].image}
            alt="launch"
            className="w-32 h-20 rounded-md"
          />
        )
      }
    </div>
  )
}