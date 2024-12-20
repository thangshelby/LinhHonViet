import { useState } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const marqueeText = [
    "GIAO HỎA TỐC 1H GỌI NGAY 19001919",
    "VOUCHER 500K CHO ĐƠN 3444k",
    "VOUCHER 100K CHO ĐƠN 1444k",
    "GIAO HỎA TỐC 1H GỌI NGAY 19001919",
    "FREE SHIP 100K CHO HĐ 500K",
    "VOUCHER 500K CHO ĐƠN 3444k",
  ];
  const location = useLocation();
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrollTop(scrollTop);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      {location.pathname === "/" && (
        <div
          className={`${scrollTop < 200 ? "block" : "hidden"} w-full bg-primary_1 px-[2rem] py-[1rem] sm:px-[4rem] md:px-[6rem] lg:px-[10rem] xl:px-[16rem]`}
        >
          <Marquee gradient={false} speed={50}>
            {marqueeText.map((text, index) => (
              <div
                key={index}
                className="mx-8 flex flex-row gap-4 text-[1.2rem] font-base_regular_italic font-extrabold  hover:cursor-pointer"
              >
                {text}
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default MarqueeComponent;
