import { useEffect, useState } from "react";
import { products } from "../../constants";
import ProductCard from "../Product/ProductCard";
const ShowProductList = ({
  productPerPage,
  isShownPagination,
  isShowNavigation,
}: {
  productPerPage: number;
  isShownPagination: boolean;
  isShowNavigation: boolean;
}) => {
  const [filterProducts, setFilterProducts] = useState<any[]>();
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);
  const [start, setStart] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  window.addEventListener("resize", () => {
    let windowWidth = Number(window.innerWidth);
    setWindowWidth(windowWidth);
  });

  useEffect(() => {
    let windowWidth = Number(window.innerWidth);
    setWindowWidth(windowWidth);
    if (products) {
      setFilterProducts(
        products.slice(start, start + (windowWidth >= 850 ? 3 : 2)),
      );
    }
  }, [start, currentProductIndex, windowWidth]);
  
  const handleSwipeNext = () => {

    setStart((start + 1 + products.length) % products.length);
  };
  const handleSwipePrev = () => {
    if(start === 0){
        setStart(products.length - 2);
    }else{

      setStart((start - 1 + products.length) % products.length);
    }
  };

  return (
    <div className="relative w-full">
      {/* PRODUCT CARDS */}
      <div
        className={`relative flex flex-row items-start justify-between space-x-[2.4rem] lg:space-x-[2rem]`}
      >
        {filterProducts &&
          filterProducts.map((product, index) => (
            <div key={index} className={`py-[1rem]`}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>

      {/* NAVIGATION ARROW  */}
      {isShowNavigation && (
        <>
          <div className="absolute top-0 z-30 h-[70%]">
            <div className="flex h-full flex-row items-center">
              <div
                onClick={handleSwipePrev}
                className="w-[2rem] hover:cursor-pointer hover:text-primary_1 md:h-[2rem] lg:h-[1.6rem] lg:w-[1.6rem]"
              >
                <svg
                  className="flickity-button-icon fill-current"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                    className="arrow te"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 z-30 h-[70%]">
            <div className="flex h-full flex-row items-center">
              <div
                onClick={handleSwipeNext}
                className="w-[2rem] hover:cursor-pointer hover:text-primary_1 md:h-[2rem] lg:h-[1.6rem] lg:w-[1.6rem]"
              >
                <svg
                  className="flickity-button-icon fill-current"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                    className="arrow"
                    transform="translate(100, 100) rotate(180) "
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </>
      )}

      {/* PAGINATIONS DOTS */}
      <div className="mt-6 flex w-full flex-row items-center justify-center space-x-2">
        {isShownPagination &&
          products.map((product, index) => (
            <div
              onClick={() => {
                console.log(product.image);
                setCurrentProductIndex(index);
              }}
              key={index}
              className={`${
                index !== currentProductIndex && "opacity-60"
              } rounded-full bg-[#111111] p-[0.4rem] hover:cursor-pointer`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ShowProductList;
