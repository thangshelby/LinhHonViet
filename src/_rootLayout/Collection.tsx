import React from "react";
import { useParams } from "react-router-dom";
import { ShowProductList } from "../components";

const Collection = () => {
  const category = useParams().category;
  const options= [
    'Giá: Thấp đến cao',
    'Giá: Cao đến thấp',
    'Tên: A-Z',
    'Tên: Z-A',
    'Mới nhất',
    'Cũ nhất',
    'Phổ biến nhất'
  ]
  return (
    <div className="flex flex-col space-y-4 px-4 py-8 bg-[#f8f8f8]">
      <h1 className="text-center text-[#222222] text-3xl uppercase font-semibold">
        {category}
      </h1>

      <div className="flex flex-row w-full items-center justify-between">
        <h4 className="text-[#222222] font-thin">
          Trang chủ / DANH MỤC <span className="font-medium">/ </span>{" "}
          <span className="font-bold"> {category}</span>
        </h4>

        <div className="flex flex-row space-x-1 items-center tex-sm text-[#222222] font-raleway font-medium">
          <p>Sắp xếp : </p>

          <select
            className="border-[1px] outline-none border-gray-300 bg-white  rounded-md px-2 py-1"
            name="sort"
            id="sort"

            >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            </select>
        </div>
      </div>

      <ShowProductList
       productPerPage={4} 
       isShownPagination={true} 
       isShowNavigation={false}
       />
    </div>
  );
};

export default Collection;

// import { useState, useLayoutEffect, useMemo } from "react";
// import { navbarLinks } from "../constants";
// import { ShowProductList } from "../components";
// import { useParams, useNavigate } from "react-router-dom";

// const Collection = () => {
//   const navigate = useNavigate();
//   const params = useParams().collectionName;
//   const [quantityProducts, setQuantityProducts] = useState(0);
//   const status = ["TẤT CẢ", "CHO THUÊ", "BÁN"];
//   const [currentStatus, setCurrentStatus] = useState("TẤT CẢ");
//   const [currentCagory, setCurrentCagory] = useState(params ? params : "all");
//   const [currentCagories, setCurrentCagories] = useState<
//     Record<string, boolean>
//   >({
//     "NHÓM TRANG PHỤC TRUYỀN THỐNG":
//       params == "NHÓM TRANG PHỤC TRUYỀN THỐNG" ? true : false,
//     "NHÓM TRANG PHỤC CÁCH TÂN":
//       params == "NHÓM TRANG PHỤC CÁCH TÂN" ? true : false,
//     "PHỤ KIỆN ĐI KÈM": params == "PHỤ KIỆN ĐI KÈM" ? true : false,
//   });

//   useLayoutEffect(() => {
//     setCurrentCagories(() => ({
//       "NHÓM TRANG PHỤC TRUYỀN THỐNG":
//         params == "NHÓM TRANG PHỤC TRUYỀN THỐNG" ? true : false,
//       "NHÓM TRANG PHỤC CÁCH TÂN":
//         params == "NHÓM TRANG PHỤC CÁCH TÂN" ? true : false,
//       "PHỤ KIỆN ĐI KÈM": params == "PHỤ KIỆN ĐI KÈM" ? true : false,
//     }));
//     setCurrentCagory(params ? params : "all");
//   }, [params]);

//   const handleCategoryChange = (event: any) => {
//     const { name, checked } = event.target;

//     setCurrentCagory(checked ? name : "all");

//     setCurrentCagories(() => ({
//       "NHÓM TRANG PHỤC TRUYỀN THỐNG": false,
//       "NHÓM TRANG PHỤC CÁCH TÂN": false,
//       "PHỤ KIỆN ĐI KÈM": false,
//       [name]: checked,
//     }));
//     if (!checked) {
//       navigate(`/collection/all`);
//     } else {
//       navigate(`/collection/${name}`);
//     }
//   };
//   const childComponent = useMemo(() => {
//     return (
//       <ShowProductList
//         currentCagory={params }
//         container="w-[270px]"
//         element=" h-[380px]"
//         setQuantityProducts={setQuantityProducts}
//       />
//     );
//   }, [params]);

//   return (
//     <div className="flex flex-col  gap-6 w-full ">
//       {/* IMAGES */}
//       <div className="w-full h-[360px]">
//         <img
//           src="../assets/images/bgcollection.jpg"
//           className="w-full h-full "
//         />
//       </div>
//       {/* IMAGES */}

//       <div className="flex flex-col w-full">
//         {/* STATUS */}
//         <div
//           className="flex flex-row justify-start pl-[248px] w-full text-[16px]
//         text-[#666666]"
//         >
//           {status.map((item) => (
//             <div
//               onClick={() => {
//                 setCurrentStatus(item);
//               }}
//               key={item}
//               className={`${
//                 currentStatus == item
//                   ? "text-black py-[6px]  border-black border-b-[2px]"
//                   : "border-[#e3e3e3]"
//               } w-[220px]
//                  row_center font-[700]  hover:cursor-pointer border-b-[2px] `}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//         {/* STATUS */}

//         <div
//           className="bg-[#f1f1f1]  px-[16px]
//          py-[20px] shadow-2xl flex  flex-row gap-5 w-full justify-between"
//         >
//           {/* FILTERS */}
//           <div className="w-[260px]  flex flex-col  gap-y-4">
//             <h1 className="text-[14px] font-bold">Category</h1>
//             {navbarLinks[0].children?.map((category) => (
//               <div
//                 key={category.title}
//                 className="hover:cursor-pointer w-full font-medium flex flex-row "
//               >
//                 <input
//                   name={category.title}
//                   className="h-5 w-5 border-grey-400 rounded-sm text-black cursor-pointer"
//                   type="checkbox"
//                   checked={currentCagories[category.title]}
//                   onChange={(e) => {
//                     handleCategoryChange(e);
//                   }}
//                 ></input>

//                 <div
//                   className={`${
//                     currentCagories[category.title] == true
//                       ? "font-bold text-[13 px] "
//                       : "font-normal text-[14px]"
//                   }  ml-3 w-full leading-5  `}
//                 >
//                   {category.title}
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* FILTERS */}

//           {/* SHOW PRODUCTS */}
//           <div className="w-full flex flex-col gap-6 pb-[200px]">
//             <h1 className="text-[14px] font-normal">
//               {quantityProducts} Sản phẩm
//             </h1>

//             {childComponent}
//           </div>
//           {/* SHOW PRODUCTS */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;
