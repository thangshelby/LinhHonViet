import React, { useState, useRef } from "react";
import { MdOutlineDiscount } from "react-icons/md";
import SelectLocation from "./SelectLocation";
import { LocationType } from "../../types";
import { CSSTransition } from "react-transition-group";
const CartRight = ({
  setSelectedTypeDelivery,
  selectedTypeDelivery,
}: {
  setSelectedTypeDelivery: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTypeDelivery: number | null;
}) => {
  const [location, setLocation] = useState<LocationType>({
    country: "Vietnam",
    city: {
      name: "",
      id: 0,
    },
    district: {
      name: "",
      id: 0,
    },
  });
  const nodeRef = useRef(null);
  const subNodeRef = useRef(null);
  const [showSelectLocation, setShowSelectLocation] = useState(false);

  return (
    <div className="relative flex flex-col space-y-6 px-8">
      <h1 className="border-b-[4px] border-gray-200 pb-2 font-base_regular font-semibold text-[#333]">
        Tổng cộng giỏ hàng
      </h1>

      <div className="flex w-full flex-col space-y-2">
        <div className="flex flex-row justify-between border-b-[1px] border-gray-300 py-1">
          <h3 className="font-raleway text-[#333333]">Tạm tính</h3>
          <p className="font-raleway font-extrabold">4.531.000 VND</p>
        </div>
        <h3 className="font-raleway text-[#333333]">Giao hàng</h3>

        <div className="flex flex-col space-y-3 border-b-[1px] border-gray-300 py-2">
          <div
            onClick={() => {
              setSelectedTypeDelivery(0);
            }}
            className="group flex flex-row items-center space-x-2"
          >
            <input
              value={"checked"}
              checked={selectedTypeDelivery == 0 ? true : false}
              type="radio"
              onChange={() => {
                setSelectedTypeDelivery(0);
              }}
            />
            <label
              htmlFor="delivery1"
              className={`text-sm text-[#222222] ${selectedTypeDelivery != 0 && "opacity-60"} duration-500 group-hover:opacity-100`}
            >
              Đồng giá :{" "}
              <span className="font-raleway text-sm font-bold">50.000 VND</span>
            </label>
          </div>

          <div
            onClick={() => {
              setSelectedTypeDelivery(1);
            }}
            className="group flex flex-row items-center space-x-2"
          >
            <input
              checked={selectedTypeDelivery == 1 ? true : false}
              type="radio"
              onChange={() => {
                setSelectedTypeDelivery(1);
              }}
            />
            <label
              htmlFor="delivery1"
              className={`text-sm text-[#222222] ${selectedTypeDelivery != 1 && "opacity-60"} duration-500 group-hover:opacity-100`}
            >
              Ship tỉnh :{" "}
              <span className="font-raleway text-sm font-bold">50.000 VND</span>
            </label>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row space-x-1 font-raleway text-sm text-[#222222]">
              Vận chuyển đến{" "}
              <p className="ml-[4px] font-extrabold text-[#666666]">
                
                {" "} {location.district.name!=''&& location.district.name}
                {' '}
                {location.city.name}{" "}
              </p>
            </div>
          </div>
          <span
            onClick={() => setShowSelectLocation(!showSelectLocation)}
            className="font-raleway text-sm text-[#222222] hover:cursor-pointer hover:text-primary_1 hover:underline"
          >
            Đổi địa chỉ
          </span>
        </div>

        <div className="overflow-hidden">
          <CSSTransition
            in={showSelectLocation}
            nodeRef={nodeRef}
            timeout={1000}
            classNames="select-location"
            unmountOnExit
            onEnter={() => setShowSelectLocation(true)}
            onExited={() => setShowSelectLocation(false)}
          >
            <div ref={nodeRef} className="select-location">
              <SelectLocation
                location={location}
                setLocation={(newLocation: LocationType) => {
                  setLocation(newLocation);
                }}
                setShowSelectLocation={setShowSelectLocation}
              />
            </div>
          </CSSTransition>
        </div>
      </div>

      <CSSTransition
        in={showSelectLocation}
        nodeRef={subNodeRef}
        timeout={1000}
        classNames="slide-down"
        unmountOnExit={false}
        onEnter={() => setShowSelectLocation(true)}
        onExited={() => setShowSelectLocation(false)}
      >
        <div
          ref={subNodeRef}
          className={`${showSelectLocation?'block': 'slide-down'} `}
        >
          <div className="flex flex-col space-y-4 ">

        
          <div className="slide-down flex flex-row items-center justify-between border-b-[4px] border-gray-200 pb-2 font-base_regular font-semibold text-[#333]">
            Tổng
            <p className="font-raleway font-extrabold text-black">
              4.531.000 VND
            </p>
          </div>

          <div className="w-full bg-primary_1 py-2 text-center font-base_regular font-semibold text-white hover:cursor-pointer duration-300 hover:bg-primary_2">
            Tiến hành thanh toán
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-2 font-raleway font-semibold">
              <MdOutlineDiscount size={24} color="gray" />
              <p>Phiếu ưu đãi</p>
            </div>
            <div className="bg-gray-200 py-[2px]" />

            <input
              placeholder="Nhập mã giảm giá"
              className="input placeholder:text-base_regular px-4 py-2 font-base_thin_italic text-xs"
              name="firstName"
              type="text"
            />

            <div className="w-full bg-gray-200 py-2 text-center font-base_regular text-black hover:cursor-pointer duration-300 hover:bg-primary_2">
              Áp dụng
            </div>
          </div>
          </div>
        </div>

      </CSSTransition>
    </div>
  );
};

export default CartRight;
