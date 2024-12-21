import ShowProductList from "../components/Common/ShowProductList";
import SuggestSize from "../components/ProductDetail/SuggestSize";
import { products } from "../constants/index";
import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ProductInformation from "../components/ProductDetail/ProductInformation";
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
  const nodeRef = useRef(null);
  const params = useParams();
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

  const img = [1, 2, 3];
  const [selectedImage, setSelectedImage] = useState(0);

  const [isOpenSuggestSize, setIsOpenSuggestSize] = useState(false);

  return (
    <div className="relative mt-6 flex w-full flex-col items-center justify-center gap-10">
      <div
        onClick={() => {
          setIsOpenSuggestSize(false);
        }}
        className={`${isOpenSuggestSize ? "fixed" : "hidden"} ${isOpenSuggestSize && "inset-0 z-30 flex justify-end"} `}
      >
        <div
          onClick={() => {
            setIsOpenSuggestSize(false);
          }}
          className={`absolute h-full w-full bg-black/50`}
        />
      </div>

      <CSSTransition
        ref={nodeRef}
        in={isOpenSuggestSize}
        timeout={500}
        classNames="suggest-size"
        unmountOnExit={true}
      >
        <SuggestSize
          isOpenSuggestSize={isOpenSuggestSize}
          setIsOpenSuggestSize={() => {
            setIsOpenSuggestSize(false);
          }}
          ref={nodeRef}
        />
      </CSSTransition>
      <div className="flex flex-col space-y-[1.2rem] px-[3.2rem] py-[1.6rem] sm:flex-row sm:items-start sm:justify-center sm:space-x-[2.4rem] sm:space-y-0">
        {/* IMAGE SESSION */}
        <div className="flex w-full flex-col space-y-[1.2rem] md:w-[45%] md:px-[0rem] md:py-[0.4rem]">
          <img loading="lazy" src={currentProduct.image} />

          <div className="flex flex-row space-x-[1rem]">
            {img.map((val, index) => (
              <div
              onClick={()=>{
                setSelectedImage(index)
              }}
                key={val}
                className={` ${
                  index != selectedImage && "translate-y-[4px]" 
                } h-[14rem]  overflow-hidden hover:translate-y-0 duration-300 hover:cursor-pointer`}
              >
                {/* <img
                  className={`duration-500 hover:translate-y-0 hover:cursor-pointer hover:opacity-100 ${
                    index != 0 ? "translate-y-1 opacity-60" : "translate-y-0"
                  } `}
                  src={currentProduct.image}
                /> */}
                  <img
                  className={`${index != selectedImage && "translate-y-1 opacity-60"} `}
                  src={currentProduct.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* INFORMATION SESSION */}
        <div className="w-full sm:w-[65%] sm:px-[0rem] sm:py-[0rem]">
          <ProductInformation
            currentProduct={currentProduct}
            setIsOpenSuggestSize={() => {
              setIsOpenSuggestSize(true); 
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-16 px-2">
        <h3 className=" text-[2rem] font-base_regular md:text-[2.4rem] lg:text-[2.8rem] text-[#242424]">CÓ THỂ BẠN CŨNG THÍCH</h3>

        <ShowProductList
          productPerPage={3}
          isShowNavigation={true}
          isShownPagination={true}
        />
      </div>
    </div>
  );
};

export default ProducDetail;
