// import { footerItems } from "../constants";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const contacts = ["Linh Hồn Việt Sài Gòn", "Linh Hồn Việt Hà Nội"];
  const socials = [
    { name: "Facebook", icon: <FaFacebookF color="#333333" /> },
    { name: "Instagram", icon: <FaInstagram color="#333333" /> },
    { name: "Tiktok", icon: <FaTiktok color="#333333" /> },
  ];
  const policies = [
    "Chính sách đổi và trả",

    "Chính sách vận chuyển",
    "Chính sách khách hàng",
  ];
  const infors = [
    "Hướng dẫn mua hàng",
    "Hướng dẫn giặt là",
    "Điều khoản bảo mật",
    "Tuyển dụng",
  ];
  const [active, setActives] = useState("");
  return (
    <div className="bg-whiteS flex flex-col space-y-8 w-full p-[30px] border-t-[1px] border-gray-300 mt-12">
      {/* <div className="flex flex-col space-y-8 items-center justify-center w-full">
        <h1 className="text-4xl text-black font-[300] font-raleway ">
          INSTAGRAM
        </h1>
        <img
          className="rounded-lg overflow-hidden"
          src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/462575109_1095943358604702_5127114246718667077_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=5e1YVzDxGGgQ7kNvgFdOgrX&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&oh=03_Q7cD1QFZ7cN5bt9aYGhOmNilqH4fnhli4WrHz5M_wD36RvE08A&oe=6782378A"
        />
      </div> */}

      <div className="flex flex-row  justify-center space-x-20">
       
        <div className="w-[25%]">
          <h1
            className=" text-xl text-[#111111] 
          font-raleway font-bold  relative mb-6"
          >
           DỊCH VỤ KHÁCH HÀNG
          </h1>

          {/* LIEN HE */}
          <div className="flex flex-col ">
            <div
              onClick={() => {
                if (active === "Liên hệ") {
                  setActives("");
                } else {
                  setActives("Liên hệ");
                }
              }}
              className="flex  items-center group hover:cursor-pointer "
            >
              <p
                className={`text-lg ${
                  active === "Liên hệ"
                    ? "text-primary_1 font-semibold"
                    : "text-[#333333] font-normal"
                }   
                font-raleway group-hover:text-primary_1 flex flex-row items-center justify-between w-full`}
              >
                Liên hệ
                <FaAngleDown
                  className={`${active === "Liên hệ" && "rotate-180"}`}
                  fontWeight={100}
                />
              </p>
            </div>
            <div className="mt-4">
              {active === "Liên hệ" &&
                contacts.map((contact, index) => (
                  <h1
                    key={index}
                    className="text-container text-[#333333] font-normal  my-2"
                  >
                    {contact}
                    <span className="text-highlight "></span>
                  </h1>
                ))}
            </div>
          </div>

          {/* CHINH SACH */}
          <div className="flex flex-col ">
            <div
              onClick={() => {
                if (active === "Chính sách") {
                  setActives("");
                } else {
                  setActives("Chính sách");
                }
              }}
              className="flex  items-center group hover:cursor-pointer "
            >
              <p
                className={`text-lg ${
                  active === "Chính sách"
                    ? "text-primary_1 font-semibold"
                    : "text-[#333333] font-normal"
                }   
                font-raleway group-hover:text-primary_1 flex flex-row items-center justify-between w-full`}
              >
                Chính sách
                <FaAngleDown
                  className={`${active === "Chính sách" && "rotate-180"}`}
                  fontWeight={100}
                />
              </p>
            </div>
            <div className="mt-4">
              {active === "Chính sách" &&
                policies.map((contact, index) => (
                  <h1
                    key={index}
                    className="text-container text-[#333333] font-normal my-2"
                  >
                    {contact}
                    <span className="text-highlight "></span>
                  </h1>
                ))}
            </div>
          </div>

          {/* MANG XA HOI */}
          <div className="flex flex-col ">
            <div
              onClick={() => {
                if (active === "Mạng xã hội") {
                  setActives("");
                } else {
                  setActives("Mạng xã hội");
                }
              }}
              className="flex  items-center group hover:cursor-pointer "
            >
              <p
                className={`text-lg ${
                  active === "Mạng xã hội"
                    ? "text-primary_1 font-semibold"
                    : "text-[#333333] font-normal"
                }   
                font-raleway group-hover:text-primary_1 flex flex-row items-center justify-between w-full`}
              >
                Mạng xã hội
                <FaAngleDown
                  className={`${active === "Mạng xã hội" && "rotate-180"}`}
                  fontWeight={100}
                />
              </p>
            </div>
            <div className="flex flex-col  mt-4">
              {active === "Mạng xã hội" &&
                socials.map((social, index) => (
                  <div
                    key={index}
                    className="text-container text-[#333333] font-normal my-2
                     " 
                  >
                    <div className="flex flex-row justify-between items-center w-full"> <p className="inline-block">
                    {social.name} 
                    </p>
                   {social.icon}
                      </div>
                   
                    <span className="text-highlight"></span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="w-[25%]">
          <h1 className="text-xl text-[#111111] font-raleway font-bold ">
            THÔNG TIN
          </h1>

          <div className="flex flex-col space-y-4 mt-6">
            {infors.map((info, index) => (
              <div
                key={index}
                className="text-container text-[#333333]  text-lg 
                font-normal mr-20"
              >
                {info}
                <span className="text-highlight "></span>
              </div>
            ))}
          </div>

          {/* <div className="flex flex-col ">
            <div
              onClick={() => {
                if (active === "Mạng xã hội") {
                  setActives("");
                } else {
                  setActives("Mạng xã hội");
                }
              }}
              className="flex  items-center group hover:cursor-pointer "
            >
              <p
                className={`text-lg ${
                  active === "Mạng xã hội"
                    ? "text-primary_1 font-semibold"
                    : "text-[#333333] font-normal"
                }   
                font-raleway group-hover:text-primary_1 flex flex-row items-center justify-between w-full`}
              >
                Mạng xã hội
                <FaAngleDown
                  className={`${active === "Liên hệ" && "rotate-180"}`}
                  fontWeight={100}
                />
              </p>
            </div>
           
          </div> */}
        </div>

        <div className="w-[25%]">
        <h1 className="text-xl text-[#111111] font-raleway font-bold ">
          FACEBOOK
          </h1>
          <div className="">
            <img
            className="mt-6"
            src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/468739965_995643515938361_498178171367471503_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=eG8sqHls5BAQ7kNvgE0dpCP&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=A3qNIfmC3ueb36FdCFLDFU5&oh=00_AYBFFgvppFHqM7i58lWMavWnG0SZ0_7w6RKzb99MECzlig&oe=6760CA97"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
