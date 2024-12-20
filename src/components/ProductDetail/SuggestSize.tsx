import { useState, useRef,useEffect, forwardRef } from "react";
import { sizes, bodyTypes } from "../../constants";
import "swiper/css";
import { CSSTransition } from "react-transition-group";

const SuggestSize = forwardRef<
  HTMLDivElement,
  { isOpenSuggestSize: boolean; setIsOpenSuggestSize: () => void }
>(({ isOpenSuggestSize, setIsOpenSuggestSize }, ref) => {
  const nodeRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedBodyType, setSelectedBodyType] = useState<number | null>(null);
  const [height, setHeight] = useState(155);
  const [weight, setWeight] = useState(48);
  const handleChangeHeight = (event: any) => setHeight(event.target.value);
  const handleChangeWeight = (event: any) => setWeight(event.target.value)
    useEffect(() => {
      if (isOpenSuggestSize) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpenSuggestSize]);;

  return (
    <div
    onClick={setIsOpenSuggestSize}
      ref={ref}
      className="fixed suggest-size left-0 top-0 z-40 flex h-screen w-full items-center justify-center"
    >
     

      <div 
      onClick={(e)=>{
        e.stopPropagation();
      }}
      className="flex w-[80%] flex-col rounded-2xl bg-white p-4 text-2xl shadow-xl">
        <div className="flex w-[45%] flex-row rounded-3xl border-[1px] border-gray-300">
          <div
            onClick={() => setSelectedOption(0)}
            className={`rounded-3xl ${selectedOption == 0 ? "bg-primary_1 text-white" : "text-gray-500"} w-[65%] from-purple-500 to-purple-700 py-3 text-center font-base_regular text-sm font-medium transition-colors duration-300 hover:cursor-pointer`}
          >
            Hướng dẫn chọn size
          </div>
          <div
            onClick={() => setSelectedOption(1)}
            className={`rounded-3xl ${selectedOption == 1 ? "bg-purple-900 text-white" : "text-gray-500"} w-[65%] from-purple-500 to-purple-700 py-3 text-center font-base_regular text-sm font-medium transition-colors duration-300 hover:cursor-pointer`}
          >
            Bảng size
          </div>
        </div>

        <div className="relative overflow-hidden pb-8">
          <div className="z-10 mt-6 flex flex-col space-y-3 px-4">
            {/* HEIGHT SLIDER */}
            <div className="flex w-full flex-row items-center justify-center space-x-8 p-2">
              <h4 className="font-base_regular text-sm text-gray-800">
                Chiều cao
              </h4>
              <div className="flex-1">
                <input
                  type="range"
                  min="155"
                  max="190"
                  value={height}
                  onChange={handleChangeHeight}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-gray-100"
                />
              </div>
              <p className="font-base_thin text-sm font-semibold text-gray-900">
                {height} m
              </p>
            </div>
            {/* WEIGHT SLIDER */}
            <div className="flex w-full flex-row items-center justify-center space-x-8 p-2">
              <h4 className="font-base_regular text-sm text-gray-800">
                Cân nặng
              </h4>
              <div className="flex-1">
                <input
                  type="range"
                  min="48"
                  max="80"
                  value={weight}
                  onChange={handleChangeWeight}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-gray-100"
                />
              </div>
              <p className="font-base_thin text-sm font-semibold text-gray-900">
                {weight} kg
              </p>
            </div>

            {/* SELECT IMAGE */}
            <div className="flex flex-row items-center justify-between">
              {bodyTypes.map((bodyType, index) => (
                <div
                  onClick={() => {
                    setSelectedBodyType(index);
                  }}
                  key={index}
                  className={`overflow-hidden rounded-2xl ${selectedBodyType == index && "border-[3px] border-purple-700"} hover:cursor-pointer`}
                >
                  <img
                    className="h-48 w-40 object-cover"
                    src={bodyType.image}
                  />
                </div>
              ))}
            </div>

            {/* RESULT */}
            <div className="flex flex-col space-y-1">
              <h4 className="mt-2 font-base_regular text-sm font-bold">
                Linh Hồn Việt gợi ý cho bạn
              </h4>

              {selectedBodyType === null ? (
                <p className="font-base_thin_italic text-sm font-[700] text-gray-600">
                  Hãy chọn thêm hình dáng cơ thể bên trên để chúng tôi có thể
                  gợi ý cho bạn tốt hơn
                </p>
              ) : (
                <div className="flex flex-row space-x-2">
                  <div className="rounded-2xl bg-primary_1 px-4 py-2 font-base_regular text-sm text-white">
                    L-Áo
                  </div>
                  <div className="rounded-2xl bg-primary_1 px-4 py-2 font-base_regular text-sm text-white">
                    XL- Quần
                  </div>
                </div>
              )}
            </div>
          </div>

          <CSSTransition
            nodeRef={nodeRef}
            classNames={"slide-up"}
            timeout={500}
            unmountOnExit={true}
            in={selectedOption == 1}
          >
            <div ref={nodeRef} className="slide-up">
              <table
                className={`table_in mt-6 min-w-full table-auto border-collapse bg-white`}
              >
                <thead className="z-20 overflow-hidden bg-purple-700 text-sm text-white">
                  <tr>
                    <th className="rounded-l-xl px-2 py-3">Size</th>
                    {sizes.map((size, index) => (
                      <th
                        key={size.size}
                        className={`${index == sizes.length - 1 && "rounded-r-xl"} px-2 py-2`}
                      >
                        {size.size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="rounded-2xl">
                  {Object.keys(sizes[0])
                    .slice(2)
                    .map((row, index) => (
                      <tr key={index} className="text-center">
                        <td className="overflow-hidden border-gray-300 font-base_regular text-sm font-medium">
                          {row}
                        </td>
                        {sizes.map((size, index) => (
                          <td
                            key={index}
                            className="px-4 py-2 font-base_regular text-sm font-medium"
                          >
                            {size[row as keyof typeof size]}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
});

export default SuggestSize;
