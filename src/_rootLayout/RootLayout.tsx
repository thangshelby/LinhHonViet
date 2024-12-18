import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { useState, useRef } from "react";
import OverviewCart from "../components/Cart/OverviewCart";
import { CSSTransition } from "react-transition-group";

const RootLayout = () => {
  const nodeRef = useRef(null);
  const [isOpenOverviewCart, setIsOpenOverviewCart] = useState(false);

  return (
    <div className={`relative h-screen w-full`}>
     
      <div
        className={`${isOpenOverviewCart ? "fixed" : "hidden"} ${isOpenOverviewCart && "inset-0 z-30 flex justify-end"} `}
      >
        <div
          onClick={() => {
            setIsOpenOverviewCart(false);
          }}
          className={`absolute h-full w-full bg-black/50`}
        />
      </div>
      <CSSTransition
        in={isOpenOverviewCart}
        nodeRef={nodeRef}
        timeout={500}
        classNames="overview-cart"
        unmountOnExit
      >
        <OverviewCart
          isOpenOverviewCart={isOpenOverviewCart}
          ref={nodeRef}
          setIsOpenOverviewCart={() => {
            setIsOpenOverviewCart(false);
          }}
        />
      </CSSTransition>
      <Navbar
        setIsOpenOverviewCart={() => {
          setIsOpenOverviewCart(true);
        }}
      />

      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
