import { sizes } from "../../constants/index";
import ShowProductList from "../../components/Common/ShowProductList";
import SuggestSize from "../../components/ProductDetail/SuggestSize";
// import useAuthContext from "../../hooks/useAuthContext";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { products } from "../../constants/index";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCartStore, useToastStore } from "../../store/store";
import { useParams } from "react-router-dom";
const ProducDetail = () => {
  // const { accessToken, user } = useAuthContext();
  function removeVietnameseAccents(str: string) {
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi về dạng Normalization Form D
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu thanh
      .replace(/đ/g, "d") // Thay thế ký tự đặc biệt
      .replace(/Đ/g, "D")
      .toLowerCase();
  }
  const params = useParams();
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
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  useEffect(() => {
    if (params.name) {
      const validProduct = products.find((product) => {
        return (
          removeVietnameseAccents(product.name) ==
          params.name?.replace(/-/g, " ")
        );
      });

      if (validProduct) {
        setCurrentProduct(validProduct);
      }
    }
  }, [params.name]);

  const { addProductToCart } = useCartStore();
  // const axiosPrivate = useAxiosPrivate();
  // const params = useParams();
  // const navigate = useNavigate();
  const img = [1, 2, 3, 4];
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isOpenSuggestSize, setIsOpenSuggestSize] = useState(false);
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

  // useEffect(() => {
  //   axiosPrivate
  //     .get(`/product/${parseInt(params.id ?? "")}`)
  //     .then((response) => {
  //       setCurrentProduct(response.data);
  //       setCurrentImg(response.data.image);
  //     });
  // }, [params, accessToken]);

  // const [productAddCart, setProductAddCart] = useState<productAddCartType>({
  //   status: "Mua",
  //   quantity: 1,
  //   size: "S",
  //   startRentDate: String(new Date().toISOString().split("T")[0]),
  //   endRentDate: String(new Date().toISOString().split("T")[0]),
  // });

  // const [rerender, setRerender] = useState(false);
  // const [currentImg, setCurrentImg] = useState(currentProduct?.image);
  // const reviewNumber = Math.round(Math.random() * (5000 - 1000) + 1000);

  // const handleAddProductToCart = () => {
  //   axiosPrivate.post(`/cart/add`, {
  //     userId: user.id,
  //     productId: currentProduct.id,
  //     ...productAddCart,
  //   });

  //   setRerender(!rerender);
  // };
  return (
    <div className="relative mt-6 flex w-full flex-col items-center justify-center gap-10">
      {isOpenSuggestSize && <SuggestSize />}

      <div className="flex w-[95%] flex-row items-start justify-center gap-10 py-[20px]">
        {/* IMAGE SESSION */}
        <div className="flex w-[40%] flex-col space-y-4 px-1 py-2">
          <img src={currentProduct.image} />

          <div className="flex flex-row space-x-1">
            {img.map((val, index) => (
              <div
                key={val}
                className={`${
                  index != 0 && "translate-y-[-4px]"
                } h-[140px] overflow-hidden hover:translate-y-0`}
              >
                <img
                  className={`duration-500 hover:translate-y-0 hover:cursor-pointer hover:opacity-100 ${
                    index != 0 ? "translate-y-1 opacity-60" : "translate-y-0"
                  } `}
                  src={currentProduct.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* DESCRIPTION SESSION */}
        <div className="flex w-[60%] flex-col justify-around space-y-4 px-2">
          {/* HEADER */}
          <div>
            <h1 className="font-raleway text-3xl font-semibold">
              {currentProduct.name}
            </h1>
            <h2 className="font-raleway text-2xl font-semibold">
              {currentProduct.priceSale} VND
            </h2>
          </div>

          {/* BODY */}
          <div className="flex flex-col space-y-4">
            <table className="mt-4 flex flex-col">
              <tbody>
                {descriptions.map((description, index) => (
                  <tr
                    key={index}
                    className="flex flex-row items-center border-b-[1px] border-gray-200 py-2"
                  >
                    <td className="w-[20%] font-raleway text-sm text-[#282828]">
                      {description.title}
                    </td>
                    <td className="w-[2%] font-raleway text-sm text-[#666666]">
                      :
                    </td>
                    <td className="w-[78%] font-raleway text-sm text-[#666666]">
                      {description.content}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 text-lg text-[#282828]">
              Lưu ý: Màu sắc sản phẩm có thể đậm/nhạt do hiệu ứng ánh sáng, cài
              đặt độ sáng/độ tương phản của màn hình hiển thị hoặc cơ chế phân
              biệt màu của mắt.
            </div>

            <div className="mt-4 flex w-full flex-row items-start justify-between border-y-[1px] border-gray-200 px-2 py-4">
              <div className="flex flex-row space-x-2">
                <img src={currentProduct.image} className="h-10 w-10" />
                <div className="flex w-full flex-col space-y-1">
                  <h1 className="font-raleway font-normal text-[#333333]">
                    {currentProduct.name}
                  </h1>
                  <h2 className="font-raleway text-sm font-semibold text-[#111111]">
                    {currentProduct.priceSale} VND
                  </h2>
                  <div className="flex w-full flex-row items-center justify-between">
                    <p className="text-[#231f20 ] font-normal">
                      SIZE :{" "}
                      {selectedSize && (
                        <span className="font-bold">{selectedSize} </span>
                      )}
                      {selectedSize &&
                        sizes.find((s) => s.size == selectedSize)?.description}
                    </p>
                  </div>
                  <div className="flex flex-row items-center space-x-1">
                    {sizes.map((size) => (
                      <div
                        key={size.size}
                        onClick={() => {
                          setSelectedSize(size.size);
                        }}
                        className={`border-[1px] border-gray-200 px-2 font-raleway text-lg hover:cursor-pointer hover:bg-black hover:text-white ${
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
                  className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] p-2 px-4 hover:cursor-pointer hover:bg-gray-400"
                >
                  <FaMinus size={8} color="black" />
                </div>
                <div className="flex items-center justify-center border-[1px] border-gray-300 bg-white p-2 px-4 shadow-xl">
                  {quantity}
                </div>
                <div
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] p-2 px-4 hover:cursor-pointer hover:bg-gray-400"
                >
                  <FaPlus size={8} color="black" />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <h1 className="flex flex-row font-raleway font-normal text-[#333333]">
                Tổng tiền{" "}
                <p className="font-raleway font-semibold text-[#111111]">
                  : {currentProduct.priceSale} VND
                </p>
              </h1>
              <div
                onClick={() => setIsOpenSuggestSize(true)}
                className="text-sm text-primary_1 underline hover:cursor-pointer"
              >
                Hướng dẫn chọn size
              </div>
              <div
                onClick={handleAddProductToCart}
                className="w-[30%] bg-primary_1 py-2 text-center uppercase text-white hover:cursor-pointer hover:bg-primary_2"
              >
                Thêm vào giỏ hàng
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-16 px-2">
        <h3 className="text-3xl text-[#242424]">CÓ THỂ BẠN CŨNG THÍCH</h3>

        <ShowProductList
          productPerPage={4}
          isShowNavigation={false}
          isShownPagination={false}
        />
      </div>
    </div>
  );
};

export default ProducDetail;

// {/* <div className=" flex flex-row w-[1200px] justify-center py-[20px] items-start gap-10 ">
// {/* IMGAGES SESSION */}

// <div className="flex flex-row justify-start h-full items-start gap-4 overflow-hidden">
//   {/* SUB IMGAGES */}
//   <div className="flex flex-col gap-4 ">
//     {currentProduct.imageDetail
//       .concat(currentProduct.image)
//       .reverse()
//       .map(
//         (image) =>
//           image != "" && (
//             <div
//               key={image}
//               className={`w-[80px] h-[120px] border-[1px]  hover:cursor-pointer
//       ${currentImg == image ? "border-black opacity-100" : "opacity-60"}
//       `}
//               onClick={() => {
//                 setCurrentImg(image);
//               }}
//             >
//               <img
//                 src={"../" + image}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )
//       )}
//   </div>
//   {/* SUB IMGAGES */}

//   {/* MAIN IMGAGES */}
//   <div className="w-[430px] h-full rounded-xl">
//     <img
//       className="w-full object-cover h-[600px] "
//       src={"../" + currentImg}
//       alt={currentImg}
//     />
//   </div>
//   {/* MAIN IMGAGES */}
// </div>
// {/* IMGAGES SESSION */}

// {/* DESCRIPTION SESSION */}
// <div className="w-[400px] text-black flex flex-col gap-5 leading-8">
//   <h1 className="text-[30px] ">{currentProduct?.name}</h1>
//   <div className="text-[#666] text-[12px] font-thin flex flex-row gap-1 items-center justify-start">
//     <i className="fa-solid fa-star"></i>
//     <i className="fa-solid fa-star"></i>
//     <i className="fa-solid fa-star"></i>
//     <i className="fa-solid fa-star"></i>
//     <i className="fa-solid fa-star"></i>
//     {reviewNumber} đánh giá
//   </div>

//   <div className="text-[16px] flex flex-col gap-8">
//     <div className="flex flex-row gap-5">
//       <div
//         className={`flex flex-row font-bold hover:cursor-pointer
//     justify-center items-center  w-full ${
//       productAddCart.status == "Mua" && "opacity-30"
//     }`}
//         onClick={() => {
//           setProductAddCart({ ...productAddCart, status: "Thuê" });
//         }}
//       >
//         THUÊ &nbsp;
//         <i className="fa-solid fa-dong-sign"></i>
//         <p className="text-[#666]"> {currentProduct?.priceRent}</p>
//       </div>
//       <div
//         className={`flex flex-row font-bold hover:cursor-pointer
//       justify-center items-center w-full ${
//         productAddCart.status != "Mua" && "opacity-30"
//       }`}
//         onClick={() => {
//           setProductAddCart({
//             ...productAddCart,
//             status: "Mua",
//             startRentDate: undefined,
//             endRentDate: undefined,
//           });
//         }}
//       >
//         MUA &nbsp;
//         <i className="fa-solid fa-dong-sign"></i>
//         <p className="text-[#666]">{currentProduct?.priceSale} </p>
//       </div>
//     </div>
//     {/* DESCRIPTION */}
//     <div className="w-full h-[2px]  bg-[#ccc] flex flex-row">
//       <div
//         className={`w-[50%] h-full ${status == "Thuê" && "bg-black"}`}
//       ></div>
//       <div
//         className={`w-[50%] h-full ${status == "Mua" && "bg-black"}`}
//       ></div>
//     </div>
//     <div>
//       <div className="flex flex-row gap-2 justify-start items-center">
//         <i className=" fa-solid fa-truck-fast"></i>
//         Miễn phí vận chuyển với đơn hàng trên 1.000.000
//       </div>

//       <div className="flex flex-row gap-2 justify-start items-center ml-[6px] leading-7">
//         <div className={`${status == "Thuê" && "h-[50px]"}`}>
//           <i className={` fa -solid fa-receipt h-full`}></i>
//         </div>
//         {productAddCart.status == "Thuê"
//           ? "Đối với sản phẩm thuê sẽ phải cọc trước 35% giá trị mua hàng"
//           : "Giao hàng trong 2-3 ngày"}
//       </div>

//       {productAddCart.status == "Thuê" && (
//         <div className="flex flex-col w-full gap-1">
//           <div>
//             <div className="flex flex-row gap-2 justify-start items-center">
//               <i className=" fa-solid fa-house"></i>
//               Kiểm tra kích thước
//               <p className="text-[#0A8080] font-semibold hover:cursor-pointer">
//                 ngay tại nhà{" "}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-row   gap-2 justify-start items-center">
//             <div className="h-[55px] mb-[26 px]">
//               <i className="fa-solid fa-circle-info"></i>
//             </div>

//             <div className="inline-block flex-row flex-wrap leading-7">
//               <p>
//                 Lưu ý nếu như quý khách không trả hàng đúng hạn sẽ vị
//                 phạm vào{" "}
//                 <span
//                   onClick={() => {
//                     navigate("/rental");
//                   }}
//                   className="text-[#0A8080] font-semibold hover:cursor-pointer"
//                 >
//                   chính sách thuê hàng
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* DATE CHOOSING */}
//           <div className="flex flex-row w-full justify-between">
//             <div className="relative mb-[40px]">
//               Ngày bắt đầu thuê:
//               <input
//                 value={productAddCart.startRentDate}
//                 type="date"
//                 className="absolute top-10 left-0 bg-[#ccc]
//                 rounded-xl shadow-md px-[12px] w-[210px]  py-[2px]"
//                 onChange={(e) => {
//                   setProductAddCart({
//                     ...productAddCart,
//                     startRentDate: e.target.value,
//                   });
//                 }}
//               />
//             </div>

//             <div className="relative mb-[40px]">
//               Ngày kết thúc thuê:
//               <input
//                 type="date"
//                 value={productAddCart.endRentDate}
//                 onChange={(e) => {
//                   setProductAddCart({
//                     ...productAddCart,
//                     endRentDate: e.target.value,
//                   });
//                 }}
//                 className="absolute top-10 left-0 bg-[#ccc] rounded-xl shadow-md px-[12px] w-[210px]  py-[2px]"
//               />
//             </div>
//           </div>

//           {/* DATE CHOOSING */}
//         </div>
//       )}
//     </div>
//     {/* SIZE CHOOSING */}
//     <div className="flex flex-col gap-3">
//       <div className="flex flex-row ">
//         <div className="flex flex-row gap-1">
//           Kích thước
//           <p className="font-bold text-black">{productAddCart.size}</p>
//           {
//             sizes.find((size) => size.size == productAddCart.size)
//               ?.description
//           }
//         </div>
//       </div>

//       <div className="flex flex-row gap-1">
//         {sizes.map((size) => (
//           <div
//             key={size.size}
//             className={` text-[14px] flex justify-center items-center
//         hover:cursor-pointer hover:opacity-60  w-[60px] h-[40px]
//          rounded-xl ${
//            productAddCart.size == size.size
//              ? "bg-black text-white"
//              : "bg-[#d9d9d9]"
//          } `}
//             onClick={() => {
//               setProductAddCart({ ...productAddCart, size: size.size });
//             }}
//           >
//             {size.size}
//           </div>
//         ))}
//       </div>
//     </div>
//     {/* SIZE CHOOSING */}

//     {/* NUMBER */}
//     <div className="flex flex-row gap-3  ">
//       <div
//         className="flex flex-row gap-5 justify-center items-center border-black
//         border-[1px] px-[14px] py-[4px] rounded-[20px]"
//       >
//         <i
//           className="fa-solid fa-minus hover:cursor-pointer "
//           onClick={() => {
//             setProductAddCart({
//               ...productAddCart,
//               quantity: productAddCart.quantity - 1,
//             });
//           }}
//         ></i>
//         <h1 className="text-[18px] font-medium">
//           {productAddCart.quantity}
//         </h1>
//         <i
//           className="fa-solid fa-plus hover:cursor-pointer"
//           onClick={() => {
//             setProductAddCart({
//               ...productAddCart,
//               quantity: productAddCart.quantity + 1,
//             });
//           }}
//         ></i>
//       </div>

//       <div
//         onClick={() => {
//           handleAddProductToCart();
//         }}
//         className="flex w-full rounded-2xl bg-black text-white justify-center
//       items-center font-medium gap-2 hover:cursor-pointer hover:bg-[#d9d9d9] hover:text-black"
//       >
//         <i className="fa-solid fa-bag-shopping"></i>
//         Thêm vào giỏ hàng
//       </div>
//     </div>
//     {/* NUMBER */}

//     {/* AFTER BUY */}
//     <div className="border-y-[1px] py-[20px] border-[#ccc] flex flex-col gap-8  ">
//       <div
//         className="text-[#2f5acf] text-[13px] font-medium flex
//            items-center justify-start  gap-2 hover:cursor-pointer w-full"
//       >
//         <img
//           src="https://page.widget.zalo.me/static/images/2.0/Logo.svg"
//           className="w-[30px] h-[30px]"
//         />
//         Chat để được chúng tôi tư vấn ngay (8:30 - 22:00)
//       </div>

//       <div className="flex flex-row flex-wrap gap-y-4">
//         {afterBuys.map((afterBuy) => (
//           <div
//             key={afterBuy.title}
//             className="flex flex-row gap-1
//               justify-start items-center leading-5
//               w-[50%]"
//           >
//             <img src={afterBuy.icon} className="w-[30px] h-[30px]" />
//             <p className="text-[12px] font-medium leading-[15px]">
//               {afterBuy.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//     {/* AFTER BUY */}
//   </div>
// </div>
// {/* DESCRIPTION SESSION */}
// </div>
// {/* REVIEW SESSION */}
// <OutstandingFeature product={currentProduct} />
// {/* REVIEW SESSION */}

// <div
// className="w-full bg-[#f9f9f9] pt-[50px] pb-[100px]
// px-[12px] flex flex-col gap-10 items-center justify-center "
// >
// <h1 className="text-[28px] text-[#231f30] font-bold">
//   Gợi ý sản phẩm tương tự
// </h1>
// <ShowProductList currentCagory="new" />
// </div>

// <ReviewProduct /> */}
