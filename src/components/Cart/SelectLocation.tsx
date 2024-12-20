import React, { useEffect } from "react";

import { LocationType } from "../../types";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
interface OptionType {
  label: string;
  value: string;
  key: string;
}

const customRender = (data: { options: OptionType[]; [key: string]: any }) => {
  const { options, ...selectProps } = data;
  return (
    <Select
      sx={{
        "& .MuiSelect-select": {
          padding: "10px",
        },
      }}
      {...selectProps}
    >
      {options.map(({ label, value, key }) => (
        <MenuItem value={value} key={key}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};

interface DistrictDropdownProps {
  className: string;
  district: string;
  value: string;
  data: { id: string; name: string }[];
  onChange: (district: string) => void;
}
class DistrictDropdown extends React.Component<DistrictDropdownProps> {
  render() {
    const { className, district, value, data, onChange } = this.props;
    return (
      <Select
        className={className}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        sx={{
          "& .MuiSelect-select": {
            padding: "10px",
          },
        }}
      >
        {district === "" && <MenuItem value="">Quận/Huyện</MenuItem>}
        {data.length > 0 &&
          data.map((item) => (
            <MenuItem value={item.name} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
    );
  }
}

const SelectLocation = ({
  location,
  setLocation,
  setShowSelectLocation,
}: {
  location: LocationType;
  setLocation: (newLocation: LocationType) => void;
  setShowSelectLocation: (show: boolean) => void;
}) => {
  const [districts, setDistricts] = React.useState<
    { id: string; name: string }[]
  >([]);
  const [oldCity, setOldCity] = React.useState(location.city.name);

  function removeVietnameseAccents(str: string) {
    const newStr = str.slice(0, str.indexOf("("));

    return newStr
      .normalize("NFD") // Chuẩn hóa chuỗi về dạng Normalization Form D
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu thanh
      .replace(/đ/g, "d") // Thay thế ký tự đặc biệt
      .replace(/Đ/g, "D")
      .toLowerCase()
      .replace(/ /g, "");
  }

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
    <div className="flex flex-col space-y-4 rounded-lg bg-gray-100 p-6">
      <CountryDropdown
        value={location.country}
        onChange={(country) => {
          setLocation({ ...location, country });
        }}
        customRender={customRender}
      />
      <div className="flex flex-row space-x-4">
        <RegionDropdown
          className="w-[50%]"
          country={location.country}
          value={location.city.name}
          onChange={(city) => {
            setLocation({
              ...location,
              city: { ...location.city, name: city },
              district: { name: "", id: 0 },
            });
          }}
          customRender={customRender}
        />

        <DistrictDropdown
          className="w-[50%]"
          data={districts}
          district={location.district.name}
          value={location.district.name}
          onChange={(district) => {
            setLocation({ ...location, district: { name: district, id: 0 } });
          }}
        />
      </div>

      <div
        onClick={() => {
          setShowSelectLocation(false);
        }}
        className="w-full bg-primary_1 py-2 text-center font-base_regular font-semibold text-white duration-300 hover:cursor-pointer hover:bg-primary_2"
      >
        Cập nhật
      </div>
    </div>
  );
};

export default SelectLocation;
