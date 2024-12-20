import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="hover: group relative flex w-full flex-row bg-background duration-500 hover:scale-105 hover:cursor-pointer">
      
      <div className="w-[40%] py-12">
        <img src="https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/05/123456.jpg" />
      </div>
      <div className="flex w-[60%] flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-6 p-10 px-20">
          <h1 className="font-base_regular text-2xl font-medium text-white">
            VỀ CHÚNG TÔI
          </h1>
          <div className="relative p-2">
            <div className="absolute left-0 top-0 w-[40%] border-t-[1px] border-white p-[1px]" />
            <div className="absolute left-0 top-0 h-[60%] border-l-[1px] border-white p-[1px]" />

            <p className="border-t-[1px ] font-base_thin_italic text-[2rem] font-medium text-[#f1f1f1]">
              Linh Hồn Việt mang trong mình khát vọng cháy bỏng: tôn vinh vẻ đẹp
              trường tồn của Áo dài Việt Nam. Không chỉ đơn thuần là trang phục,
              mỗi thiết kế của Linh Hồn Việt là một bức tranh nghệ thuật sống
              động, một bản hòa ca giữa tinh hoa văn hóa và lòng tự hào dân tộc.
            </p>
          </div>

          <div className="relative p-2">
            <div className="absolute bottom-0 right-0 w-[40%] border-b-[1px] border-white p-[1px]" />
            <div className="absolute bottom-0 right-0 h-[60%] border-r-[1px] border-white p-[1px]" />

            <p className="border-t-[1px ] font-base_thin_italic text-[2rem] font-medium text-[#f1f1f1]">
              Linh Hồn Việt luôn nỗ lực không ngừng để biến giấc mơ đưa Áo dài
              vươn xa thành hiện thực. Bằng sự kết hợp tinh tế giữa chất liệu tự
              nhiên và kỹ thuật chế tác điêu luyện, mỗi chiếc Áo dài trở thành
              nhịp cầu kỳ diệu, nối liền hiện tại với quá khứ, mang trong mình
              sức sống mãnh liệt của một biểu tượng không bao giờ phai nhòa.
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/about-us")}
          className="z-10 rounded-lg bg-[#353535] px-8 py-3 text-4xl font-[400] text-[#f1f1f1] duration-300 hover:cursor-pointer hover:bg-white hover:text-primary_1"
        >
          XEM THÊM
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
