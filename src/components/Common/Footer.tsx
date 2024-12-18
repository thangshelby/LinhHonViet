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

      {/* <div className="flex flex-row justify-between ">
        <div className="flex flex-col gap-10 w-[30%]">
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-[23px] font-medium ">
              SẮC LỤA VIỆT lắng nghe bạn!
            </h3>
            <h6 className="text-[13px] ">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa. Đóng góp ý kiến
            </h6>
          </div>

          <div
            className={`bg-[#2f5acf] text-gray-300 font-bold text-[14px]
          py-[8px] rounded-2xl w-[160px] flex justify-center items-center hover:cursor-pointer hover:bg-white hover:text-black`}
          >
            <h1>Đóng góp ý kiến</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-[30%]">
          <div className="flex flex-row items-center gap-4">
            <img src="https://www.coolmate.me/images/footer/icon-hotline.svg" />

            <div className="flex flex-col gap-1 text-white">
              <p className="text-[13px] font-medium">Hotline</p>
              <p className="text-[16px] font-bold">1900.272737-028.7777.2737</p>
              <p className="text-[16px] font-bold">(8:00 - 22:00)</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <img src="https://www.coolmate.me/images/footer/icon-email.svg" />

            <div className="flex flex-col gap-1 text-white">
              <p className="text-[13px] font-medium">Email</p>
              <p className="text-[16px] font-bold">sacluaviet@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex  items-center gap-3 w-[30%]">
          <div className="flex flex-row gap-10 flex-wrap">
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip2_68.png"
              className="w-[33px] h-[55px] "
            />
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip0_62.png"
              className="w-[33px] h-[55px] "
            />
            <img
              src="https://www.coolmate.me/images/footer/icon-instar.svg"
              className="w-[33px] h-[55px] "
            />
            <img
              src="https://www.coolmate.me/images/footer/icon-youtube.svg"
              className="w-[33px] h-[55px] "
            />
          </div>
        </div>
      </div> */}

      {/* <div className="border-t-[1px] border-[#4f4f4f]  my-[40px] " />

      <div className="flex flex-wrap gap-y-10 flex-col h-[320px] ">
        {footerItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap gap-3 text-white text-[14px] font-extrabold w-[25%]"
          >
            <div>{Object.keys(item)}</div>
            <div className="flex flex-col gap-2 ">
              {Object.values(item)[0].map((subItem: string) => (
                <div
                  key={subItem}
                  className="text-[13px] text-[#D9D9D9] font-normal hover:cursor-pointer hover:text-[#f9f86c]"
                >
                  {subItem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Footer;
