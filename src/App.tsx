import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProducDetail,
  Cart,
  Collection,
  SignIn,
  SignUp,
  Rental,
  CheckOut,
  Payment,
} from "./_rootLayout";
import { useEffect, useState } from "react"
import "./global.css";
import "./animation.css";
import "./index.css";
import RootLayout from "./_rootLayout/RootLayout";
import AuthLayout from "./_authLayout/AuthLayout";
import { useToastStore } from "./store/store";
import { ToastContainer, toast, Zoom } from "react-toastify";
import AboutUs from "./_rootLayout/AboutUs";

const App = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  if (showNotification) {
    setTimeout(() => setShowNotification(false), 3000);
  }
  const { message, status, clear } = useToastStore();

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
    <div className="relative h-screen w-full">
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
          <Route path="/payment" element={<Payment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/product/:name" element={<ProducDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
