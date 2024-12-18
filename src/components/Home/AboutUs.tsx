import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row relative  w-full  bg-background 
    group hover:scale-105 duration-500 hover:cursor-pointer hover: "
    >
      <div
        className="absolute w-full h-full z-10  hidden
       group-hover:flex justify-center items-center duration-700 "
      >
        <div className="w-[95%] h-[100%]   "></div>
      </div>
      <div className="py-12 w-[40%]">
        <img src="https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/05/123456.jpg" />
      </div>
      <div className="w-[60%] flex flex-col items-center ">
        <div className="p-10 px-20 flex flex-col space-y-6 items-center justify-center">
          <h1 className="text-2xl text-white font-base_regular font-medium">
            VỀ CHÚNG TÔI
          </h1>
          <div className="relative p-2">
            <div className="absolute top-0 left-0 border-t-[1px] border-white w-[40%] p-[1px]" />
            <div className="absolute top-0 left-0 border-l-[1px] border-white h-[60%] p-[1px]" />

            <p className="text-[#f1f1f1] font-medium font-base_thin_italic border-t-[1px ]">
              Linh Hồn Việt mang trong mình khát vọng cháy bỏng: tôn vinh vẻ đẹp
              trường tồn của Áo dài Việt Nam. Không chỉ đơn thuần là trang phục,
              mỗi thiết kế của Linh Hồn Việt là một bức tranh nghệ thuật sống
              động, một bản hòa ca giữa tinh hoa văn hóa và lòng tự hào dân tộc.
            </p>
          </div>

          <div className="relative p-2">
            <div className="absolute bottom-0 right-0 border-b-[1px] border-white w-[40%] p-[1px]" />
            <div className="absolute bottom-0 right-0 border-r-[1px] border-white h-[60%] p-[1px]" />

            <p className="text-[#f1f1f1] font-medium font-base_thin_italic border-t-[1px ]">
              Linh Hồn Việt luôn nỗ lực không ngừng để biến giấc mơ đưa Áo dài
              vươn xa thành hiện thực. Bằng sự kết hợp tinh tế giữa chất liệu tự
              nhiên và kỹ thuật chế tác điêu luyện, mỗi chiếc Áo dài trở thành
              nhịp cầu kỳ diệu, nối liền hiện tại với quá khứ, mang trong mình
              sức sống mãnh liệt của một biểu tượng không bao giờ phai nhòa.
            </p>
          </div>
        </div>
        <div onClick={() => navigate("/about-us")}
          className="bg-[#353535] text-[#f1f1f1] z-10
        px-8 py-3 rounded-lg font-[400] text-[20px] hover:text-primary_1 hover:bg-white hover:cursor-pointer duration-300"
        >
          XEM THÊM
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
