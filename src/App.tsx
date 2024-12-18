import { Routes, Route } from "react-router-dom";
import { Socket } from "socket.io-client";
import {
  Home,
  ProducDetail,
  Cart,
  Collection,
  SignIn,
  SignUp,
  Rental,
  CheckOut,
} from "./_rootLayout";


// import { NotificationAddCart} from "./components";
import React, { useEffect, useState } from "react";
// import React, { useEffect, useState, useRef } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  // productsInCartType,
  ClientToServerEvents,
  ServerToClientEvents,
} from "./types";
import "./global.css";
import "./animation.css";
import RootLayout from "./_rootLayout/RootLayout";
import AuthLayout from "./_authLayout/AuthLayout";
import { useToastStore } from "./store/store";
import { ToastContainer, toast,Zoom } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import AboutUs from "./_rootLayout/AboutUs";
// import { useCartStore } from "./store/store";
// import useAuthContext from "./hooks/useAuthContext";

export const SocketContext = React.createContext<
  Socket<ServerToClientEvents, ClientToServerEvents> | undefined
>(undefined);

const App = () => {
  // const { accessToken, user } = useAuthContext();
  // const navigate = useNavigate();
  // const [socket, setSocket] = useState<
  //   Socket<ServerToClientEvents, ClientToServerEvents> | undefined
  // >(undefined);

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/')
  //     // navigate("/auth/signin");
  //   }
  // }, []);

  // const nodeRef = useRef(null);
  // const {productsInCart} = useCartStore();
  // const [productsInCart, setProductsInCart] = useState<productsInCartType[]>(
  //   []
  // );

  // useEffect(() => {
  //   const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  //     "http://localhost:5001",
  //     {
  //       reconnectionDelayMax: 10000,
  //       auth: {
  //         token: "123",
  //       },
  //       query: {
  //         userId: user.id,
  //       },
  //     }
  //   );

  //   setSocket(socket);

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [accessToken]);

  // useEffect(() => {
  //   socket?.on("newProductInCart", (newProduct: productsInCartType) => {
  //     setShowNotification(true);
  //     setProductsInCart((productsInCart) => [...productsInCart, newProduct]);
  //   });
  // }, [socket?.io]);

  const [showNotification, setShowNotification] = useState<boolean>(false);

  if (showNotification) {
    setTimeout(() => setShowNotification(false), 3000);
  }
  const { message, status ,clear} = useToastStore();

  useEffect(() => {
    if (message) {
      switch (status) {
        case "success":
          toast.success(message);
          break;
        case "error":
          toast.error(message);
          break;
        case "pending":
          toast.warning(message);
          break;
        default:
          toast.info(message);
          break;
      }
      clear();
    }
  }, [message, status]);

  return (
    // <SocketContext.Provider value={socket}>
    <div className="relative h-screen w-full">
      {/* <div className="fixed z-20 top-10 right-5 ">
          <TransitionGroup>
            {showNotification && (
              <CSSTransition
                key="notification"
                nodeRef={nodeRef}
                in={showNotification}
                timeout={100}
                classNames="fade"
                unmountOnExit
              >
                <div className="notification cart_notification">
                  <NotificationAddCart
                    newProduct={productsInCart[productsInCart.length - 1]}
                  />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored" 
        transition={Zoom}
      />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:category" element={<Collection />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/product/:name" element={<ProducDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
    // </SocketContext.Provider>
  );
};

export default App;
