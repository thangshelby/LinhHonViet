import { useState } from "react";
import { useCartStore } from "../../store/store";
import { products } from "../../constants";
const PaymentRight = () => {
  const [selectedTypeDelivery, setSelectedTypeDelivery] = useState<
    null | number
  >(null);
  const { productsInCart } = useCartStore();
  return (
    <div className="h-full w-full border-[2px] border-primary_1 drop-shadow-3xl bg-[#f5f5f5] px-6 py-8">
      <h1 className="text-md font-base_regular font-bold">Đơn hàng của bạn</h1>
      <div className="flex flex-col space-y-2 py-4">
        <div className="flex flex-row justify-between border-b-2 border-[#e5e5e5] pb-2">
          <h3 className="font-base_regular font-semibold">SẢN PHẨM</h3>
          <h3>TẠM TÍNH</h3>
        </div>

        {productsInCart.map((product, index) => (
          <div
            className="flex flex-row items-center justify-between border-b-[1px] border-[#e5e5e5] pb-2"
            key={index}
          >
            <h3 className="font-base_regular text-xs font-semibold text-[#666666]">
              {products[0].name} - {product.size}{" "}
              <span className="text-base font-bold text-[#333333]">x 1</span>
            </h3>

            <div className="font-raleway text-sm font-extrabold">
              {products[0].priceSale} VND
            </div>
          </div>
        ))}

        <div className="flex flex-row justify-between border-b-[1px] border-gray-300 pb-2">
          <h3 className="font-base_regular text-base font-semibold text-[#333333]">Tạm tính</h3>
          <p className="font-raleway font-extrabold text-sm">4.531.000 VND</p>
        </div>

        <h3 className=" text-[#666666] font-bold font-base_regular text-sm">Giao hàng</h3>

        <div className="flex flex-col space-y-3 border-b-[1px] border-gray-300 pb-2">
          <div
            onClick={() => {
              setSelectedTypeDelivery(0);
            }}
            className="group flex flex-row items-center space-x-2"
          >
            <input
              value={"checked"}
              checked={selectedTypeDelivery == 0 ? true : false}
              type="radio"
              onChange={() => {
                setSelectedTypeDelivery(0);
              }}
            />
            <label
              htmlFor="delivery1"
              className={`text-sm text-[#222222] ${selectedTypeDelivery != 0 && "opacity-60"} duration-500 group-hover:opacity-100`}
            >
              Đồng giá :{" "}
              <span className="font-raleway text-sm font-bold">50.000 VND</span>
            </label>
          </div>

          <div
            onClick={() => {
              setSelectedTypeDelivery(1);
            }}
            className="group flex flex-row items-center space-x-2"
          >
            <input
              checked={selectedTypeDelivery == 1 ? true : false}
              type="radio"
              onChange={() => {
                setSelectedTypeDelivery(1);
              }}
            />
            <label
              htmlFor="delivery1"
              className={`text-sm text-[#222222] ${selectedTypeDelivery != 1 && "opacity-60"} duration-500 group-hover:opacity-100`}
            >
              Ship tỉnh :{" "}
              <span className="font-raleway text-sm font-bold">50.000 VND</span>
            </label>
          </div>
        </div>

        <div className="flex flex-row justify-between border-b-[3px] border-gray-300 pb-2">
          <h3 className="font-base_regular text-base font-semibold text-[#333333]">Tổng</h3>
          <p className="font-raleway font-extrabold text-sm">4.531.000 VND</p>
        </div>
      </div>


      <div className="w-full bg-primary_1 py-3 text-center font-base_regular font-semibold text-white duration-300 hover:cursor-pointer hover:bg-primary_2">
        Thanh toán
      </div>
    </div>
  );
};

export default PaymentRight;
