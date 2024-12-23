import Banner from "../components/Home/Banner";
import Popular from "../components/Common/Popular";
import AboutUs from "../components/Home/AboutUs";
import { useNavigate } from "react-router-dom";
const Home = () => {
  // const [showChatBox, setShowChatBox] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative mb-[100px] flex w-full flex-col items-center gap-10">
      {/* CHAT BOX */}
      {/* <div className="fixed bottom-3 right-3 z-50">
        {showChatBox ? (
          <ChatBox setShowChatBox={setShowChatBox} />
        ) : (
          <div
            onClick={() => setShowChatBox(!showChatBox)}
            className=" p-[5px] 
      rounded-[50%] hover:cursor-pointer hover:scale-125 bg-[#E6F7FF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c1.4 0 2.73-.3 3.94-.83L21 22l-1.18-4.12c.53-1.24.83-2.57.83-3.88 0-5.52-4.48-10-10-10zm-1.5 13h-3v-2h3v2zm0-3h-3v-2h3v2zm4.5 3h-3v-2h3v2zm0-3h-3v-2h3v2z"
                fill="#00A4CC"
              />
              <path
                d="M12 4c-4.41 0-8 3.59-8 8 0 1.28.29 2.5.82 3.57l-1.1 3.73 3.71-1.07c1.08.54 2.26.88 3.57.88 4.41 0 8-3.59 8-8s-3.59-8-8-8z"
                fill="#ffffff"
              />
            </svg>
          </div>
        )}
      </div> */}

      <div className="w-full">
        <Banner />
      </div>

      <div className="flex flex-col space-y-4  border-y-[0.1rem] md:border-y-[0.15rem] border-gray-300 px-[12%] py-[2.4rem]">
        <h1 className="font-base_regular_italic text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">
          SẢN PHẨM MỚI
        </h1>
        <div
          onClick={() => {
            navigate("/collection/all");
          }}
          className="bg-primary_1 px-[1.2rem] py-[0.4rem] text-center font-base_regular_italic text-[1.4rem] text-white duration-300 hover:cursor-pointer hover:bg-primary_2 md:text-[1.6rem] lg:text-[1.8rem]"
        >
          MUA NGAY
        </div>
      </div>

      <Popular />
      <AboutUs />
    </div>
  );
};

export default Home;
