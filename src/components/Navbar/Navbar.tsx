import { useEffect, useState } from "react";
import MarqueeComponent from "./Marquee.tsx";
import NavbarDesktop from "./NavbarDesktop.tsx";
import NavbarMobile from "./NavbarMobile.tsx";

const Navbar = ({
  setIsOpenOverviewCart,
}: {
  setIsOpenOverviewCart: () => void;
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  
  window.addEventListener("resize", () => {
    let windowWidth = Number(window.innerWidth);
    setWindowWidth(windowWidth);
  });
  useEffect(()=>{
    let windowWidth = Number(window.innerWidth);
    setWindowWidth(windowWidth);
  },[windowWidth])

  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    
    setScrollTop(scrollTop);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`${scrollTop < 200 ? "block" : "navbar fixed opacity-80"} left-0 top-0 z-30 w-full`}
    >
      {/* MARQUEE */}
      <MarqueeComponent />


      {/* NAVAR DESKTOP AND MOBILE */}
      {windowWidth&& windowWidth <= 960 ? (
        <NavbarMobile setIsOpenOverviewCart={setIsOpenOverviewCart} />
      ) : (
        <NavbarDesktop setIsOpenOverviewCart={setIsOpenOverviewCart} />
      )}
    </div>
  );
};

export default Navbar;
