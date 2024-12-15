import React, { useState, useLayoutEffect, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sizes } from "../constants";
import { productType } from "../types";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { products } from "../constants";
import ProductCard from "./ProductCard";
import {QRCodeSVG} from 'qrcode.react';
const ShowProductList = ({

  setQuantityProducts,
  productPerPage,
  isShownPagination,
  isShowNavigation,
}: {

  setQuantityProducts?: (quantity: number) => void;
  productPerPage: number;
  isShownPagination: boolean;
  isShowNavigation: boolean;
}) => {
  const productInfo = {
    name: 'Áo Dài Thêu Tay',
    size: 'M',
    material: 'Lụa',
    collection: 'Xuân 2024',
    story: 'Sản phẩm làm từ lụa tự nhiên, mang đậm nét văn hóa truyền thống.'
  };
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Áo Dài Vải Lụa
FN:Áo Dài Vải Lụa
ORG:BST Xuân Hè 2024
NOTE:Mẫu áo dài lấy cảm hứng từ văn hóa truyền thống, kết hợp với họa tiết hiện đại
URL:https://yourstore.com/products/ao-dai-vai-lua
END:VCARD
`;
  const jsonData = JSON.stringify(productInfo);
  const axiosPrivate = useAxiosPrivate();
  const [allProducts, setAllProducts] = useState<productType[]>([]);
  const [filterProducts, setFilterProducts] = useState<any[]>();
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);
  const [hoverProduct, setHoverProduct] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  const [start, setStart] = useState(0);

  useEffect(() => {
    // console.log(currentProductIndex, products);
    if (products) {
      setFilterProducts(products.slice(start, start + productPerPage));
    }
  }, [start, currentProductIndex]);

  const handleSwipeNext = () => {
    if (start + productPerPage < products.length) {
      setStart(start + 1);
    }
  };
  const handleSwipePrev = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };


  return (
    <div className="w-full relative">
      <div className="flex flex-row space-x-6 relative">
        {filterProducts &&
          filterProducts.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
      <QRCodeSVG 
         value={vCardData} 
         size={200} 
         bgColor="#ffffff" 
         fgColor="#702272" 
      />  
      {isShowNavigation && (
        <>
         <div className="absolute top-0 h-full z-30 ">
        <div className=" h-full flex flex-row items-center">
          <div
            onClick={handleSwipePrev}
            className="w-6 h-6 hover:cursor-pointer hover:text-primary_1 "
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

      <div className="absolute top-0 right-0 h-full z-30 ">
        <div className=" h-full flex flex-row items-center  ">
          <div
            onClick={handleSwipeNext}
            className="w-6 h-6 hover:cursor-pointer hover:text-primary_1 "
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
     
      
      <div className="w-full flex flex-row space-x-2 justify-center items-center mt-6">
        {isShownPagination &&
          products.map((product, index) => (
            <div
              onClick={() => {
                setCurrentProductIndex(index);
              }}
              key={index}
              className={`${
                index !== currentProductIndex && "opacity-60"
              } p-[5px] rounded-full bg-[#111111] hover:cursor-pointer`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ShowProductList;
