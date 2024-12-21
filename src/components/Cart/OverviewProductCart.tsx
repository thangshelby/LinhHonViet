import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";

const OverviewProductCart = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div key={product.id} className="px-6">
      <div className="flex w-full flex-row items-center justify-between border-b-[1px] border-dashed p-4 shadow-lg">
        <div className="flex items-center space-x-2">
          <img src={product.image} className="h-32 w-24 rounded-sm" />
          <div className="flex flex-col space-y-2">
            <h1 className="text-[1.4rem] font-base_regular font-medium">
              {product.name} - M
            </h1>

            <p className="font-base_regular text-[1.2rem] font-medium text-[#4b4b4b]">
              {product.priceSale}
            </p>

            <div className="flex flex-row">
              <div
                onClick={() => {
                  if (quantity > 0) setQuantity(quantity - 1);
                }}
                className="flex items-center justify-center rounded-l-md bg-[#f5f5f5] p-2 px-3 hover:cursor-pointer hover:bg-gray-400"
              >
                <FaMinus size={6} color="black" />
              </div>
              <div className="flex items-center justify-center text-[1.2rem] bg-[#f5f5f5] p-2 px-3 text-xs">
                {quantity}
              </div>
              <div
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="flex items-center justify-center rounded-r-md bg-[#f5f5f5] p-2 px-3 text-[0.6rem] hover:cursor-pointer hover:bg-gray-400"
              >
                <FaPlus size={6} color="black" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-[1rem]">
          <span className="text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] hover:cursor-pointer hover:scale-105">
            <FaRegTrashAlt color="#999999" />
          </span>

          <span className="text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] hover:cursor-pointer hover:scale-105">
            <PiNotePencil color="#999999" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewProductCart;
