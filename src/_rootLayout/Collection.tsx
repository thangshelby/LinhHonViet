import { useParams } from "react-router-dom";
import ShowProductList from "../components/Common/ShowProductList";
// import { useEffect } from "react";

const Collection = () => {
  const category = useParams().category;
  const options = [
    "Giá: Thấp đến cao",
    "Giá: Cao đến thấp",
    "Tên: A-Z",
    "Tên: Z-A",
    "Mới nhất",
    "Cũ nhất",
    "Phổ biến nhất",
  ];


  return (
    <div className="flex flex-col space-y-4 bg-[#f8f8f8] px-4 py-8">
      <h1 className="text-center text-3xl font-semibold font-base_regular uppercase text-[#222222]">
        {category}
      </h1>

      <div className="flex w-full flex-row items-center justify-between">
        <h4 className="font-thin text-[#222222] font-base_regular_italic">
          Trang chủ / DANH MỤC <span className="font-medium">/ </span>{" "}
          <span className="font-bold"> {category}</span>
        </h4>

        <div className="tex-sm flex flex-row items-center space-x-1  font-raleway font-medium text-[#222222]">
          <p>Sắp xếp : </p>

          <select
            className="rounded-md border-[1px] border-gray-300 shadow-md  bg-white px-2 py-1 outline-none"
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
        productPerPage={12}
        isShownPagination={true}
        isShowNavigation={false}
      />
    </div>
  );
};

export default Collection;
