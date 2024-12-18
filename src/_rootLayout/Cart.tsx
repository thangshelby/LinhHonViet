import  { useState } from "react";
import { useCartStore } from "../store/store";
import { FaRegTrashAlt } from "react-icons/fa";
import { products } from "../constants";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
const Cart = () => {
  const columns = ["Sản phẩm", "Giá", "Số lượng", "Tổng cộng"];
  const { productsInCart } = useCartStore();
  const [selectedSizeDelivery, setSelectedSizeDelivery] = useState<
    null | number
  >(null);

  return (
    <div className="flex min-h-screen pt-12">
      <div className="flex w-[60%] flex-col border-r-[1px] border-gray-300 px-8 pb-12">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`rounded-2xl border-b-[4px] border-gray-200 pb-2 ${index != columns.length - 1 ? "text-left" : "text-right"} font-base_regular font-semibold text-[#333]`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productsInCart.map((product) => (
              <tr>
                <td className="flex flex-row items-center space-x-2 border-b-[1px] border-gray-300 py-10">
                  <FaRegTrashAlt />

                  <img
                    src={products[0].image}
                    className="h-24 w-24 rounded-sm object-center"
                  />

                  <p className="font-base_regular text-xs">
                    {products[0].name} - {product.size}
                  </p>
                </td>
                <td className="text-md border-b-[1px] border-gray-300 text-left font-raleway font-bold">
                  {products[0].priceSale} VND
                </td>
                <td className="border-b-[1px] border-gray-300">
                  <div className="flex flex-row">
                    <div
                      //  onClick={() => {
                      //    if (quantity > 0) setQuantity(quantity - 1);
                      //  }}
                      className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] p-1 px-3 hover:cursor-pointer hover:bg-gray-400"
                    >
                      <FaMinus size={6} color="black" />
                    </div>
                    <div className="flex items-center justify-center border-[1px] border-gray-300 bg-white p-1 px-3 shadow-xl">
                      {/* {quantity} */} 0
                    </div>
                    <div
                      //  onClick={() => {
                      //    setQuantity(quantity + 1);
                      //  }}
                      className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] p-1 px-3 hover:cursor-pointer hover:bg-gray-400"
                    >
                      <FaPlus size={6} color="black" />
                    </div>
                  </div>
                </td>
                <td className="text-md border-b-[1px] border-gray-300 text-right font-raleway font-bold">
                  {products[0].priceSale} VND
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex w-[40%] flex-col space-y-6 px-8">
        <h1 className="border-b-[4px] border-gray-200 pb-2 font-base_regular font-semibold text-[#333]">
          Tổng cộng giỏ hàng
        </h1>

        <div className="flex flex-col space-y-2">
          <div className="flex flex-row justify-between border-b-[1px] border-gray-300 py-1">
            <h3 className="font-raleway text-[#333333]">Tạm tính</h3>
            <p className="font-raleway font-extrabold">4.531.000 VND</p>
          </div>
          <h3 className="font-raleway text-[#333333]">Giao hàng</h3>

          <div className="flex flex-col space-y-3 border-b-[1px] border-gray-300 py-2">
            <div
              onClick={() => {
                setSelectedSizeDelivery(0);
              }}
              className="group flex flex-row items-center space-x-2"
            >
              <input
                value={"checked"}
                checked={selectedSizeDelivery == 0 ? true : false}
                type="radio"
                onChange={() => {
                  setSelectedSizeDelivery(0);
                }}
              />
              <label
                htmlFor="delivery1"
                className={`text-sm text-[#222222] ${selectedSizeDelivery != 0 && "opacity-60"} duration-500 group-hover:opacity-100`}
              >
                Đồng giá :{" "}
                <span className="font-raleway text-sm font-bold">
                  50.000 VND
                </span>
              </label>
            </div>

            <div
              onClick={() => {
                setSelectedSizeDelivery(1);
              }}
              className="group flex flex-row items-center space-x-2"
            >
              <input
                checked={selectedSizeDelivery == 1 ? true : false}
                type="radio"
                onChange={() => {
                  setSelectedSizeDelivery(1);
                }}
              />
              <label
                htmlFor="delivery1"
                className={`text-sm text-[#222222] ${selectedSizeDelivery != 1 && "opacity-60"} duration-500 group-hover:opacity-100`}
              >
                Ship tỉnh :{" "}
                <span className="font-raleway text-sm font-bold">
                  50.000 VND
                </span>
              </label>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row space-x-1 font-raleway text-sm text-[#222222]">
                Vận chuyển đến{" "}
                <p className="ml-[4px] font-extrabold text-[#666666]">
                  {" "}
                  Thành phố Hồ Chí Minh
                </p>
              </div>
            </div>
            <span className="font-raleway text-sm text-[#222222] hover:text-primary_1 hover:underline">
              Đổi địa chỉ
            </span>
          </div>

          <div className="flex flex-row items-center justify-between border-b-[4px] border-gray-200 pb-2 font-base_regular font-semibold text-[#333]">
            Tổng
            <p className="font-raleway font-extrabold text-black">
              4.531.000 VND
            </p>
          </div>
        </div>

        <div className="w-full bg-primary_1 py-2 text-center font-base_regular font-semibold text-white hover:cursor-pointer hover:bg-primary_2">
          Tiến hành thanh toán
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-2 font-raleway font-semibold">
            <MdOutlineDiscount size={24} color="gray" />
            <p>Phiếu ưu đãi</p>
          </div>
          <div className="bg-gray-200 py-[2px]" />

          {/* <input
            type="text"
            placeholder="Nhập mã giảm giá"
            // className="input"
            className="bg-[#f5f5f5] p-2 text-xs font-thin shadow-md outline-none placeholder:font-base_thin_italic placeholder:text-xs focus:shadow-2xl"
          /> */}

          <input
            placeholder="Nhập mã giảm giá"
            className="input placeholder:text-base_regular px-4 py-2 font-base_thin_italic text-xs"
            name="firstName"
            type="text"
          />

          <div className="w-full bg-gray-200 py-2 text-center font-base_regular  text-black hover:cursor-pointer hover:bg-primary_2">
            Áp dụng 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import { paymentMethods } from "../constants";
// import { useState, useEffect } from "react";
// import {
//   DeliveryInfo,
//   PaymentMethod,
//   CreateOrder,
//   ShowProductsInCart,
// } from "../components";
// import { productsInCartType, deliveryInfoType } from "../types";
// import useAuthContext from "../hooks/useAuthContext";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";

// const Cart = () => {
//   const axioisPrivate = useAxiosPrivate();
//   const { user } = useAuthContext();

//   const [productsInCart, setProductsInCart] = useState<productsInCartType[]>(
//     []
//   );
//   const [totalPrice, setTotalPrice] = useState<number>(0);
//   const [deposit, setDeposit] = useState<number>(0);
//   const [currentPaymentMethod, setCurrentPaymentMethod] = useState(
//     paymentMethods[0]
//   );
//   const [deliveryInfo, setDeliveryInfo] = useState(deliveryInfoIinitial);

//   // fetch productsInCart from server
//   useEffect(() => {
//     let isMounted = true;
//     axioisPrivate.get(`/cart/${user.id}`).then((response) => {
//       isMounted && setProductsInCart(response.data);
//     });

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const handleCreateOrder = () => {
//     console.log(deliveryInfo, currentPaymentMethod, productsInCart);
//     axioisPrivate.post("/order/create-order", {
//       deliveryInfo,
//       paymentMethod:currentPaymentMethod,
//       productsInCart,
//       user,
//       totalPrice: totalPrice + deposit,
//     });
//   };

//   return (
//     <div className="relative flex flex-row p-[16px] text-title ư-full ">
//       {/* TOTAL */}
//       <CreateOrder
//         total={totalPrice}
//         currentPaymentMethod={currentPaymentMethod}
//         handleCreateOrder={handleCreateOrder}
//       />

//       {/* TOTAL */}

//       <div className="flex flex-col w-[60%] ">
//         {/* BANNER */}
//         <div className="bg-[#f1f1f1] w-full p-[16px] gap-4 rounded-2xl row_center">
//           <div className="min-w-[216px] font-medium leading-5 px-[24px] py-[15px]  row_center bg-blue-700 text-white rounded-3xl">
//             Tham gia với chúng tôi
//           </div>
//           <div>
//             <div className="text-black text-[15px] flex flex-row leading-5 font-[400] flex-wrap gap-1">
//               Tham gia vào cộng đồng chúng tôi để nhận
//               <span className="font-bold flex flex-row"> voucher-15%</span>
//               <span>cho đơn </span>hàng đầu tiên và ghi nhận hoàn tiền trên từng
//               đơn hàng.
//             </div>
//             <p className="text-blue-700 underline font-semibold hover:cursor-pointer">
//               Tìm hiểu thêm
//             </p>
//           </div>
//         </div>
//         {/* BANNER */}

//         {/* THONG TIN VAN CHUYEN VA  CACH THUC THANH TOAN*/}
//         <div className="flex flex-col gap-8">
//           <DeliveryInfo
//             deliveryInfo={deliveryInfo}
//             setDeliveryInfo={setDeliveryInfo}
//           />
//           <PaymentMethod
//             currentPaymentMethod={currentPaymentMethod}
//             setCurrentPaymentMethod={setCurrentPaymentMethod}
//           />
//         </div>
//         {/* THONG TIN VAN CHUYEN VA  CACH THUC THANH TOAN */}
//       </div>

//       {/* SHOW PRODUCTS IN CART */}

//       <ShowProductsInCart
//         productsInCart={productsInCart}
//         setProductsInCart={setProductsInCart}
//         user={user}
//         totalPrice={totalPrice}
//         setTotalPrice={setTotalPrice}
//         deposit={deposit}
//         setDeposit={setDeposit}
//       />

//       {/* SHOW PRODUCTS IN CART */}
//     </div>
//   );
// };

// export default Cart;

// const deliveryInfoIinitial: deliveryInfoType = {
//   name: "",
//   phone: "",
//   email: "",
//   addressDetail: "",
//   city: { id: 0, name: "" },
//   district: { id: 0, name: "" },
//   ward: { id: 0, name: "" },
//   note: "",
// };
