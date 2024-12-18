import  { useState } from "react";
import { sizes,bodyTypes  } from "../../constants";
import "swiper/css";


const SuggestSize = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedBodyType, setSelectedBodyType] = useState<number | null>(null);
  const [height, setHeight] = useState(155);
  const [weight, setWeight] = useState(48);
  const handleChangeHeight = (event: any) => setHeight(event.target.value);
  const handleChangeWeight = (event: any) => setWeight(event.target.value);
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-[90%] w-[80%] flex-col rounded-2xl bg-white p-4 text-2xl">
        <div className="flex w-[45%] flex-row rounded-3xl border-[1px] border-gray-300">
          <div
            onClick={() => setSelectedOption(0)}
            className={`rounded-3xl ${selectedOption == 0 ? "bg-primary_1 text-white" : "text-gray-500"} font-base_regular w-[65%] from-purple-500 to-purple-700 py-3 text-center text-sm  font-medium transition-colors duration-300 hover:cursor-pointer `}
          >
            Hướng dẫn chọn size
          </div>
          <div
            onClick={() => setSelectedOption(1)}
            className={`rounded-3xl ${selectedOption == 1 ? "bg-purple-900 text-white" : "text-gray-500"} font-base_regular w-[65%] from-purple-500 to-purple-700 py-3 text-center text-sm  font-medium transition-colors duration-300 hover:cursor-pointer `}
          >
            Bảng size
          </div>
        </div>

        {selectedOption == 0 ? (
          <div className="mt-6 flex flex-col space-y-3 px-4">
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
              <h4 className="font-base_regular mt-2 text-sm font-bold">
                Linh Hồn Việt gợi ý cho bạn
              </h4>

              {selectedBodyType === null ? (
                <p className="font-base_thin_italic text-sm font-[700] text-gray-600">
                  Hãy chọn thêm hình dáng cơ thể bên trên để chúng tôi có thể
                  gợi ý cho bạn tốt hơn
                </p>
              ) : (
                <div className="flex flex-row space-x-2">
                  <div className="font-base_regular rounded-2xl bg-primary_1 px-4 py-2 text-sm text-white">
                    L-Áo
                  </div>
                  <div className="font-base_regular rounded-2xl bg-primary_1 px-4 py-2 text-sm text-white">
                    XL- Quần
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <table
            className={`table_in mt-6 min-w-full table-auto border-collapse`}
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
                    <td className="font-base_regular overflow-hidden border-gray-300 text-sm font-medium">
                      {row}
                    </td>
                    {sizes.map((size, index) => (
                      <td
                        key={index}
                        className="font-base_regular px-4 py-2 text-sm font-medium"
                      >
                        {size[row as keyof typeof size]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SuggestSize;
