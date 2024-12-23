import React, { useState, useRef } from "react";
import { MdOutlineDiscount } from "react-icons/md";
import SelectLocation from "./SelectLocation";
import { LocationType } from "../../types";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
const CartRight = ({
  setSelectedTypeDelivery,
  selectedTypeDelivery,
}: {
  setSelectedTypeDelivery: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTypeDelivery: number | null;
}) => {
  const navigate = useNavigate();
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
      <h1 className="border-b-[4px] border-gray-200 pb-2 font-base_regular text-[1.4rem] font-semibold text-[#333] md:text-[1.6rem] lg:text-[1.8rem]">
        Tổng cộng giỏ hàng
      </h1>

      <div className="flex w-full flex-col space-y-2">
        <div className="flex flex-row justify-between border-b-[1px] border-gray-300 py-1 text-[1.4rem] md:text-[1.8rem] lg:text-[1.8rem]">
          <h3 className="font-base_regular text-[#333333]">Tạm tính</h3>
          <p className="font-raleway font-bold">4.531.000 VND</p>
        </div>
        <h3 className="font-raleway text-[1.4rem] text-[#333333] md:text-[1.6rem] lg:text-[1.8rem]">
          Giao hàng
        </h3>

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
              className={`text-[1.4rem] text-[#222222] md:text-[1.2rem] lg:text-[1.4rem] ${selectedTypeDelivery != 0 && "opacity-60"} text-[1.4rem] duration-500 group-hover:opacity-100 md:text-[1.2rem] lg:text-[1.4rem]`}
            >
              Đồng giá :{" "}
              <span className="font-raleway text-[1.4rem] font-bold md:text-[1.2rem] lg:text-[1.4rem]">
                50.000 VND
              </span>
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
              className={`text-[1.4rem] text-[#222222] md:text-[1.2rem] lg:text-[1.4rem] ${selectedTypeDelivery != 1 && "opacity-60"} text-[1.4rem] duration-500 group-hover:opacity-100 md:text-[1.2rem] lg:text-[1.4rem]`}
            >
              Ship tỉnh :{" "}
              <span className="font-raleway text-[1.4rem] font-bold md:text-[1.2rem] lg:text-[1.4rem]">
                50.000 VND
              </span>
            </label>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row space-x-1 font-raleway text-[1.4rem] text-[#222222] md:text-[1.2rem] lg:text-[1.4rem]">
              Vận chuyển đến
              <p className="ml-[4px] font-bold text-[#666666]">
                {" "}
                {location.district.name != "" && location.district.name }
            {' '}
                {location.city.name}{" "}
              </p>
            </div>
          </div>
          <span
            onClick={() => setShowSelectLocation(!showSelectLocation)}
            className="font-raleway text-[1.4rem] text-[#222222] hover:cursor-pointer hover:text-primary_1 hover:underline md:text-[1.2rem] lg:text-[1.4rem]"
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
        <div ref={subNodeRef} className={`slide-down`}>
          <div className="flex flex-col space-y-4">
            <div className="slide-down flex flex-row items-center justify-between border-b-[4px] border-gray-200 pb-2 font-base_regular text-[1.4rem] font-semibold text-[#333] md:text-[1.6rem] lg:text-[1.8rem]">
              Tổng
              <p className="font-raleway font-bold text-black">
                4.531.000 VND
              </p>
            </div>

            <div
              onClick={() => {
                navigate("/payment");
              }}
              className="w-full bg-primary_1 py-2 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] text-center font-base_regular font-semibold text-white duration-300 hover:cursor-pointer hover:bg-primary_2"
            >
              Tiến hành thanh toán
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center space-x-2 font-base_regular_italic text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-semibold">
                <MdOutlineDiscount size={24} color="gray" />
                <p>Phiếu ưu đãi</p>
              </div>
              <div className="bg-gray-200 py-[2px]" />

              <input
                placeholder="Nhập mã giảm giá"
                className="input placeholder:text-base_regular px-4 py-2 font-base_thin_italic *: text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem]"
                name="firstName"
                type="text"
              />

              <div className="w-full bg-gray-200 py-2 text-center font-base_regular text-black duration-300 hover:cursor-pointer text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] hover:bg-primary_2">
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
