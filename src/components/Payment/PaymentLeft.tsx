import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import React, { useState, useEffect } from "react";
import { FaAsterisk } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { LocationType } from "../../types";

type Inputs = {
  first_name: string;
  last_name: string;
  location: {
    country: string;
    region: string;
    district: string;
  };
  address: string;
  phone: number;
  email: string;
  note: string;
};

interface DistrictDropdownProps {
  className: string;
  district: string;
  value: string;
  data: { id: string; name: string }[];
  onChange: (district: string) => void;
  register: any;
}

const DistrictDropdown: React.FC<DistrictDropdownProps> = ({
  className,
  district,
  data,
  // onChange,
  register,
}) => {
  return (
    <select className={className} {...register("location.district")}>
      {!district && <option value="">Quận/Huyện</option>}
      {data.map((item) => (
        <option value={item.name} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
function removeVietnameseAccents(str: string) {
  const newStr = str.slice(0, str.indexOf("("));

  return newStr
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/ /g, "");
}

const PaymentLeft = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
  const [districts, setDistricts] = React.useState<
    { id: string; name: string }[]
  >([]);
  const [oldCity, setOldCity] = React.useState(location.city.name);

  useEffect(() => {
    const fetchCityId = async () => {
      try {
        const response = await fetch(
          `https://open.oapi.vn/location/provinces?page=0&size=30&query=${removeVietnameseAccents(location.city.name.toLowerCase())}`,
        );
        const data = await response.json();
        const newId = Number(data.data[0].id);
        return newId;
      } catch (error) {
        console.error(error);
      }
    };
    const fetchDistricts = async (cityId: number) => {
      try {
        const response = await fetch(
          `https://open.oapi.vn/location/districts/${cityId}?page=0&size=30&query`,
        );
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error(error);
      }
    };
    if (location.city.name !== oldCity) {
      const fetch = async () => {
        const cityId = await fetchCityId();
        setLocation({
          ...location,
          city: {
            name: location.city.name,
            id: cityId ? cityId : location.city.id,
          },
        });
        await setOldCity(location.city.name);
        const newDistricts = await fetchDistricts(
          cityId ? cityId : location.city.id,
        );

        setDistricts(newDistricts);
      };
      fetch();
    }
  }, [location.city]);

  return (
    <div className="flex flex-col space-y-6 border-t-[2px] border-gray-200 py-8">
      <h1 className="text-md font-base_regular font-bold">
        Thông tin thanh toán
      </h1>
      <form
        className="flex w-full flex-col space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-row space-x-6">
          <div className="flex flex-1 flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Họ</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <input
              {...register("first_name", { required: true })}
              className="input-location rounded-md p-2 text-sm"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Tên</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <input
              {...register("last_name", { required: true })}
              className="input-location rounded-md p-2 text-sm"
            />
          </div>
        </div>

        <div className="flex w-full flex-row space-x-4">
          <div className="flex w-[33%] flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Quốc gia/ Khu vực</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <CountryDropdown
              className="input-location rounded-md p-2 text-sm"
              value={location.country}
              onChange={(country) => {
                setLocation({ ...location, country });
              }}
            />
          </div>

          <div className="flex w-[33%] flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Tỉnh/ Thành phố</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <RegionDropdown
              country={location.country}
              value={location.city.name}
              className="input-location rounded-md p-2 text-sm"
              onChange={(region) => {
                setLocation({ ...location, city: { name: region, id: 0 } });
              }}
            />
          </div>

          <div className="flex w-[33%] flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Quận/ Huyện</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <DistrictDropdown
              register={register}
              className="input-location rounded-md p-2 text-sm"
              data={districts}
              district={location.district.name}
              value={location.country}
              onChange={(district) => {
                setLocation({
                  ...location,
                  district: { name: district, id: 0 },
                });
              }}
            />
          </div>
        </div>

        <div className="flex w-full flex-row space-x-6">
          <div className="flex flex-1 flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Địa chỉ</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <input
              {...register("address", { required: true })}
              className="input-location rounded-md p-2 text-sm"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Số điện thoại</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <input
              {...register("phone", { required: true })}
              className="input-location rounded-md p-2 text-sm"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label className="flex flex-row items-start space-x-1 font-raleway font-normal text-[#222222]">
              <p>Địa chỉ Email</p>
              <FaAsterisk className="mt-[6px] text-[4px] text-[#FF2626]" />
            </label>
            <input
              {...register("email", { required: true })}
              className="input-location rounded-md p-2 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-base_regular text-sm font-bold">
            Ghi chú đơn hàng (tùy chọn)
          </label>
          <textarea
            className="input-location h-24 rounded-md text-sm"
            {...register("note")}
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentLeft;
