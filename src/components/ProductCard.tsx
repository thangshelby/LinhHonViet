import React from 'react'
import { productType } from '../types';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const handleChangePath = (name: string) => {
        navigate(`/product/${name}`);
        window.scrollTo(0, 0);
    }
  return (
    <div
    className={` flex flex-col space-y-3 pb-6 parent hover:border-[1px] hover:cursor-pointer hover:boder-gray-100 hover:shadow-2xl duration-700`}
  >
    <div
      onClick={() => {
        handleChangePath(product.name);
      }}
      className={`group  relative overflow-hidden flex flex-col justify-center items-center
      w-full  hover:cursor-pointer`}
    >   
      <img
        src={product.image}
        alt="Default Image"
        loading='lazy'
        className="w-full h-full object-cover transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-110"
      />

      <img
        src={product.imageDetail ? product.imageDetail[0] : product.image}
        alt="Hover Image"
        loading='lazy'
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
      />
     
    </div>
    <div className="flex flex-col justify-center items-center">
      <p
        onClick={() => {
          handleChangePath(product.name);
        }}
        className="text-lg text-[#333] hover:text-primary_1 hover:font-medium hover:cursor-pointer font-raleway"
      >
        {product.name && product.name?.length >= 20
          ? product.name.slice(0, 20) + " ..."
          : product.name}
      </p>

      <p className="text-[15p x] text-[#111111] font-semibold font-raleway mb-2">
        <bdi>
          <span className="font-bold">
         {product.priceSale} VND
          </span>
         
          {/* {product.priceSale}&nbsp; */}
          {/* <span className=" font-raleway">VN D</span> */}
        </bdi>
      </p>
      <div
        onClick={() => {
          handleChangePath(product.name);
        }}
        className="bg-[#e9e6ed] hover:bg-[#dbd9de] text-[#282523] px-4 font-thin py-1 rounded-sm hover:bg-"
      >
        Xem chi tiết
      </div>
    </div>
  </div>
  )
}

export default ProductCard