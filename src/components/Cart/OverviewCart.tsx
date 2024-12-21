import { forwardRef, useEffect } from "react";
import { useCartStore } from "../../store/store";
import { IoIosClose } from "react-icons/io";
import { products } from "../../constants";
import OverviewProductCart from "./OverviewProductCart";
import { useNavigate } from "react-router-dom";

const OverviewCart = forwardRef<
  HTMLDivElement,
  { isOpenOverviewCart: boolean; setIsOpenOverviewCart: () => void }
>(({ isOpenOverviewCart, setIsOpenOverviewCart }, ref) => {
  const { productsInCart } = useCartStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpenOverviewCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenOverviewCart]);
  return (
    <div
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      className={`overview-cart z-50 flex h-full  w-[60%] md:w-[45%] lg:w-[35%] flex-col items-center bg-white py-[2.4rem]`}
    >
      <div className="flex w-full flex-row items-center justify-between pb-4">
        <h1 className="px-[3.2rem] font-base_regular text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold uppercase">
          Giỏ hàng ( {productsInCart.length} )
        </h1>
        <div
          onClick={setIsOpenOverviewCart}
          className="hover:cursor-pointer hover:text-black"
        >
          <IoIosClose size={32} color="gray" />
        </div>
      </div>

      <div className="w-full">
        {productsInCart.length > 0 ? (
          <div className="flex h-screen w-full flex-col space-y-1">
            <div className="custom-scrollbar flex h-[60%] w-full flex-col space-y-2 overflow-y-scroll border-y-[1px] border-gray-200 py-6 pb-12">
              {productsInCart.map((product, index) => (
                <div key={index}>
                  <OverviewProductCart
                    product={products.find(
                      (item) => item.id === product.productId,
                    )}
                  />
                </div>
              ))}
            </div>
            <div className="flex h-[40%] w-full flex-col space-y-2 bg-[#f5f5f5] p-6 px-16">
              <h1 className="font-base_regular text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem]">Tổng cộng</h1>
              <div
                onClick={() => {
                  navigate("/cart");
                  setIsOpenOverviewCart();  
                }}
                className="bg-primary_1 px-[2.4rem]  py-[0.4rem] text-center text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-base_regular font-bold text-white hover:cursor-pointer hover:bg-primary_3"
              >
                Xem giỏ hàng
              </div>
              <div
                onClick={setIsOpenOverviewCart}
                className="bg-primary_1 px-[2.4rem]  py-[0.4rem] text-center text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-base_regular font-bold text-white hover:cursor-pointer hover:bg-primary_3"
              >
                Thanh toán
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 px-[2.4rem]  py-12 font-base_regular_italic">
            <svg
              width="70"
              height="80"
              viewBox="0 0 62 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.08737 28.4645C2.08737 28.4645 2.08737 28.4645 2.08737 28.4645L2.73622 31.7945C2.84185 32.3366 2.48803 32.8616 1.94594 32.9673C1.40385 33.0729 0.878769 32.7191 0.773143 32.177L0.124283 28.847C-0.665369 24.7938 2.40693 21 6.52744 21H55.4733C59.5451 21 62.6061 24.7104 61.898 28.7297L55.7575 63.5715C55.2054 66.7055 52.5032 69 49.3328 69H13.9327C10.8871 69 8.25497 66.8784 7.57386 63.8981C7.57386 63.8981 7.57386 63.8981 7.57386 63.8981L6.61662 59.71C6.49356 59.1716 6.83027 58.6354 7.36867 58.5123C7.90707 58.3893 8.44328 58.726 8.56634 59.2644L9.52358 63.4524C9.99963 65.5355 11.8324 67 13.9327 67H49.3328C51.5189 67 53.4017 65.416 53.7878 63.2245L59.9283 28.3827C60.4248 25.565 58.2786 23 55.4733 23H6.52744C3.68849 23 1.53379 25.623 2.08737 28.4645Z"
                fill="#DEDEDE"
              ></path>
              <path
                d="M28.9027 2.47902C29.391 1.74918 29.1972 0.760308 28.4699 0.27033C27.7425 -0.219647 26.7571 -0.0251418 26.2688 0.704705L9.76598 25.3734C9.2777 26.1032 9.47153 27.0921 10.1988 27.5821C10.9262 28.072 11.9116 27.8775 12.3999 27.1477L28.9027 2.47902Z"
                fill="#DEDEDE"
              ></path>
              <path
                d="M49.6341 26.9818C50.3923 27.422 51.3625 27.162 51.8014 26.401C52.2397 25.6401 51.9806 24.6664 51.2224 24.2262L31.0853 12.5365C30.327 12.0963 29.3567 12.3563 28.9181 13.1173C28.4794 13.8781 28.7385 14.8518 29.4967 15.292L49.6341 26.9818Z"
                fill="#DEDEDE"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.0099 46.9028C30.7467 46.9639 30.423 47.2225 30.2155 47.4984C29.7609 48.1028 28.9649 48.1704 28.4376 47.6495C27.9102 47.1285 27.8512 46.2162 28.3058 45.6118C28.7285 45.0498 29.5089 44.3029 30.5098 44.0707C31.0378 43.9482 31.6328 43.9702 32.2308 44.2541C32.8242 44.5358 33.335 45.0345 33.7603 45.7078C34.1687 46.354 34.0425 47.2573 33.4786 47.7253C32.9147 48.1933 32.1266 48.0487 31.7183 47.4024C31.5084 47.0702 31.3454 46.9614 31.266 46.9237C31.1911 46.8882 31.114 46.8787 31.0099 46.9028Z"
                fill="#DEDEDE"
              ></path>
              <path
                d="M22.5 42C23.3284 42 24 41.3284 24 40.5C24 39.6716 23.3284 39 22.5 39C21.6716 39 21 39.6716 21 40.5C21 41.3284 21.6716 42 22.5 42Z"
                fill="#DEDEDE"
              ></path>
              <path
                d="M39.5 42C40.3287 42 41 41.3284 41 40.5C41 39.6716 40.3287 39 39.5 39C38.6713 39 38 39.6716 38 40.5C38 41.3284 38.6713 42 39.5 42Z"
                fill="#DEDEDE"
              ></path>
            </svg>
            <span className="font-base_regular text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-medium">
              Giỏ hàng của bạn đang trống.
            </span>
            <p className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] px-[0.8rem]">
              Bạn có thể xem tất cả các sản phẩm có sẵn và mua một số sản phẩm
              tại cửa hàng.
            </p>
            <div
              onClick={setIsOpenOverviewCart}
              className="bg-primary_1 px-[4rem] py-[1.2rem] text-center  text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem] text-white hover:cursor-pointer hover:bg-primary_3"
            >
              Quay lại cửa hàng
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default OverviewCart;
