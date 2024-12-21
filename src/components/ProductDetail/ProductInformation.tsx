import { sizes } from "../../constants/index";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

import { useCartStore, useToastStore } from "../../store/store";

const ProductInformation = ({
  currentProduct,
  setIsOpenSuggestSize,
}: {
  currentProduct: any;
  setIsOpenSuggestSize: () => void;
}) => {
  const { addProductToCart } = useCartStore();
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const { setMessage, setStatus } = useToastStore();

  const handleAddProductToCart = () => {
    setMessage("Add Product to Cart Success !");
    setStatus("success");

    const productAddCart = {
      productId: currentProduct.id,
      quantity,
      size: selectedSize,
    };
    addProductToCart(productAddCart);
  };
  return (
    <div className="flex w-full flex-col justify-around">
      {/* HEADER */}
      <div>
        <h1 className="font-base_regular text-[2rem] font-semibold md:text-[2.4rem] lg:text-[2.8rem]">
          {currentProduct.name}
        </h1>
        <h2 className="font-raleway text-[1.6rem] font-bold md:text-[2rem] lg:text-[2.4rem]">
          {currentProduct.priceSale} VND
        </h2>
      </div>

      {/* BODY */}
      <div className="flex flex-col space-y-[1.6rem]">
        <table className="mt-4 flex flex-col">
          <tbody>
            {descriptions.map((description, index) => (
              <tr
                key={index}
                className="flex flex-row items-center border-b-[1px] border-gray-200 py-2"
              >
                <td className="w-[20%] font-raleway text-[1.4rem] text-[#282828]">
                  {description.title}
                </td>
                <td className="w-[2%] font-raleway text-[1.4rem] text-[#666666]">
                  :
                </td>
                <td className="w-[78%] font-raleway text-[1.4rem] text-[#666666]">
                  {description.content}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-[1.4rem] text-[#282828] lg:text-[1.8rem]">
          Lưu ý: Màu sắc sản phẩm có thể đậm/nhạt do hiệu ứng ánh sáng, cài đặt
          độ sáng/độ tương phản của màn hình hiển thị hoặc cơ chế phân biệt màu
          của mắt.
        </div>

        {/* SIZE AND QUANTITY */}
        <div className="flex w-full flex-col items-start justify-between space-y-[1.2rem]">
          <div className="flex flex-row space-x-2">
            <div className="flex w-full flex-col space-y-[0.8rem]">
              <div className="flex w-full flex-row items-center justify-between">
                <p className="font-base_regular text-[1.2rem] font-normal text-[#231f20] lg:text-[1.6rem]">
                  SIZE :{" "}
                  {selectedSize && (
                    <span className="font-bold">{selectedSize} </span>
                  )}
                  <span className="font-base_regular_italic">
                    {selectedSize &&
                      sizes.find((s) => s.size == selectedSize)?.description}
                  </span>
                </p>
              </div>

              <div className="flex flex-row items-center space-x-[0.4rem]">
                {sizes.map((size) => (
                  <div
                    key={size.size}
                    onClick={() => {
                      setSelectedSize(size.size);
                    }}
                    className={`border-[1px] border-gray-200 px-[0.8rem] font-base_regular text-[1.4rem] hover:cursor-pointer hover:bg-black hover:text-white lg:text-[1.8rem] ${
                      selectedSize == size.size && "bg-black text-white"
                    }`}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div
              onClick={() => {
                if (quantity > 0) setQuantity(quantity - 1);
              }}
              className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] px-[1.2rem] py-[0.6rem] hover:cursor-pointer hover:bg-gray-400 lg:px-[1.2rem] lg:py-[0.6rem]"
            >
              <FaMinus color="black" />
            </div>
            <div className="flex items-center justify-center border-[1px] border-gray-300 bg-white px-[1.2rem] py-[0.6rem] text-[1.2rem] shadow-xl lg:px-[1.2rem] lg:py-[0.6rem] lg:text-[1.6rem]">
              {quantity}
            </div>
            <div
              onClick={() => {
                setQuantity(quantity + 1);
              }}
              className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] px-[1.2rem] py-[0.6rem] hover:cursor-pointer hover:bg-gray-400 lg:px-[1.2rem] lg:py-[0.6rem]"
            >
              <FaPlus color="black" />
            </div>
          </div>
        </div>

        <div className="font-base-regular flex flex-col space-y-[1.2rem] lg:space-y-[2rem]">
          <div
            onClick={setIsOpenSuggestSize}
            className="text-[1rem] text-primary_1 underline hover:cursor-pointer md:text-[1.2rem] lg:text-[1.6rem]"
          >
            Hướng dẫn chọn size
          </div>
          <div onClick={handleAddProductToCart}>
            <span className="bg-primary_1 px-[1.6rem] py-[0.8rem] text-center font-base_regular text-[1.2rem] font-bold uppercase text-white hover:cursor-pointer hover:bg-primary_2 lg:px-[2rem] lg:py-[1.2rem] lg:text-[1.4rem]">
              Thêm vào giỏ hàng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
const descriptions = [
  {
    title: "Ý nghĩa tên",
    content:
      "Tự Hà là tên gọi của một loại hoa, tượng trưng cho sự thanh khiết, tinh khôi và đẹp đẽ. Đó cũng là điều mà mỗi cô gái đều mong muốn khi mặc chiếc áo dài này.",
  },
  {
    title: "Chất liệu",
    content:
      "Chất liệu vải lụa mềm mịn, thoáng mát, thấm hút mồ hôi tốt, giúp bạn luôn cảm thấy thoải mái khi mặc.",
  },
  { title: "Kiểu dáng", content: "Suông tay loe lửng" },
  { title: "Họa tiết", content: "Hoa sen cách điệu dệt nổi" },
  { title: "Màu sắc", content: "Cam" },
  {
    title: "Ứng dụng",
    content:
      "Thiết kế đơn giản chú trọng vào chất liệu và họa tiết phù hợp những dịp quan trọng khác nhau đều có thể sử dụng được.",
  },
];
