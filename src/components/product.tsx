import { Image } from "@/redux/reducers/store-products-item";

type ProductProps = {
  price: number
  name: string;
  images?: Image[];
  description?: string
}
export const Product: React.FC<ProductProps> = ({ name, price, description, images }) => {
  return (
    <div
      data-testid='product'
      className="flex flex-row w-full space-y-4 justify-between bg-red-400"
    >
      <div className="h-20 w-32 text-left tablet:w-[550px] laptop:w-[400px] ">
        <div className="w-4 h-4 flex items-center justify-center rounded-sm bg-[#4F372F]">
          <span className="font-normal text-sm text-white">1</span>
        </div>
        <strong className="font-medium">{name}</strong>
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