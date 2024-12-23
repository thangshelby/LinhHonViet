import PaymentLeft from "../components/Payment/PaymentLeft";
import PaymentRight from "../components/Payment/PaymentRight";
import { motion, AnimatePresence } from "framer-motion";
import { useState} from "react";

const Payment = () => {
  const [isOpenInputDiscount, setIsOpenInputDiscount] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col space-y-[1.6rem] p-[2.4rem] py-[3.2rem] md:py-[2.4rem]">
      <div className="flex w-full flex-col items-center justify-center space-y-[1.6rem] md:justify-start md:items-start">
        <h3 className="whitespace-nowrap font-base_regular text-[1.4rem] font-extralight text-[#333333] md:text-[1.4rem] lg:text-[1.6rem]">
          Bạn có mã ưu đãi?
          <span
            onClick={() => {
              setIsOpenInputDiscount(!isOpenInputDiscount);
            }}
            className="hover:cursor-pointer hover:text-primary_1"
          >
            Ấn vào đây để nhập mã
          </span>
        </h3>
        <AnimatePresence>
          {isOpenInputDiscount && (
            <motion.div
              initial={{
                transform: "scaleY(0)",
                transformOrigin: "top",
              }}
              animate={{
                transform: "scaleY(1)",
                transformOrigin: "top",
              }}
              exit={{
                transform: "scaleY(0)",
                transformOrigin: "top",
              }}
              transition={{ duration: 0.5 }}
              className="w-full space-y-[1.6rem] overflow-hidden border-[0.2rem] border-dashed border-primary_1 p-[3rem]"
            >
              <div className="flex flex-col">
                <h3 className="whitespace-nowrap font-base_regular text-[1.4rem] font-extralight text-[#333333] opacity-70 md:text-[1.2rem] lg:text-[1.4rem]">
                  Nếu bạn có mã giảm giá, vui lòng nhập vào đây
                </h3>
              </div>

              <div className="flex flex-col space-y-[0.8rem] md:flex-row md:space-y-0">
                <input
                  placeholder="Nhập mã giảm giá"
                  className="input placeholder:text-base_regular flex-1 px-[2rem] py-[0.6rem] font-base_thin_italic text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]"
                  name="firstName"
                  type="text"
                />

                <div className="bg-primary_1 px-[2rem] py-[0.6rem] text-center font-base_regular text-[1.4rem] text-white duration-300 hover:cursor-pointer hover:bg-primary_2 md:text-[1.6rem] lg:text-[1.8rem]">
                  ÁP DỤNG
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-[2.4rem]">
        <div className="w-full md:w-[60%]">
          <PaymentLeft />
        </div>

        <div className="w-full md:w-[40%]">
          <PaymentRight />
        </div>
      </div>
    </div>
  );
};

export default Payment;
