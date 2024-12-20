import PaymentLeft from "../components/Payment/PaymentLeft";
import PaymentRight from "../components/Payment/PaymentRight";

const Payment = () => {
  return (
    <div className="min-h-screen w-full p-6 flex flex-col space-y-4">
      <div className="">
        <h3 className="text-md font-base_regular font-extralight text-[#333333]">
          Bạn có mã ưu đãi? Ấn vào đây để nhập mã
        </h3>
      </div>

      <div className="flex flex-row space-x-6">
        <div className="w-[60%]">
          <PaymentLeft />
        </div>

        <div className="w-[40%]">
          <PaymentRight />
        </div>
      </div>
    </div>
  );
};

export default Payment;
