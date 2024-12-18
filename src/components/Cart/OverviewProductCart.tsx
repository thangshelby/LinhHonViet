import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import { FaRegTrashAlt } from "react-icons/fa";

const OverviewProductCart = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div key={product.id} className="px-6">
      <div className="flex flex-row w-full items-center justify-between border-b-[1px] border-dashed p-4 shadow-lg ">
        <div className="flex items-center space-x-2">
          <img src={product.image} className="h-32 w-24 rounded-sm" />
          <div className="flex flex-col space-y-2">
            <h1 className="text-md font-base_regular font-medium">
              {product.name} - M
            </h1>

            <p className="font-base_regular font-medium text-[#4b4b4b]">
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
              <div className="flex items-center justify-center bg-[#f5f5f5] p-2 px-3 text-xs">
                {quantity}
              </div>
              <div
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="flex items-center justify-center rounded-r-md bg-[#f5f5f5] p-2 px-3 hover:cursor-pointer hover:bg-gray-400"
              >
                <FaPlus size={6} color="black" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <FaRegTrashAlt size={14} color="#999999" />
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.73512 2.10012L2.94595 7.16928C2.76512 7.36178 2.59012 7.74095 2.55512 8.00345L2.33928 9.89345C2.26345 10.5759 2.75345 11.0426 3.43012 10.9259L5.30845 10.6051C5.57095 10.5584 5.93845 10.3659 6.11928 10.1676L10.9085 5.09845C11.7368 4.22345 12.1101 3.22595 10.8209 2.00678C9.53762 0.799283 8.56345 1.22512 7.73512 2.10012Z"
              stroke="#999999"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6.93604 2.94571C7.18687 4.55571 8.49354 5.78654 10.1152 5.94988"
              stroke="#999999"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M1.75 12.8333H12.25"
              stroke="#999999"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OverviewProductCart;
