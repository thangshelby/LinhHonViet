import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const AboutUs = () => {
  const images = [
    "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/05/12345.jpg",
    "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/05/123456.jpg",
  ];
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  let autoSlideImage: any = null;
  useEffect(() => {
    if (autoSlideImage) clearInterval(autoSlideImage);
    autoSlideImage = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(autoSlideImage);
  }, [currentImage]);

  return (
    <div className="m:py-[3.2rem] group relative flex w-full flex-col bg-background pb-[2.4rem] duration-500 hover:cursor-pointer md:flex-row md:items-center md:justify-between lg:hover:scale-105">
      <div className="relative w-full md:h-auto md:w-[40%] md:py-12">
        {/* <img src="https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/05/123456.jpg" /> */}
        {images.map((image, index) => (
          <img
            key={index}
            className={` w-full object-cover duration-500 hover:scale-105 hover:cursor-pointer ${index !== currentImage && "hidden"}`}
            src={image}
          />
        ))}
        <div className="absolute bottom-3 left-0 z-30 w-full">
          <div className="flex justify-center space-x-2">
            {images.map((image, index) => (
              <div
                onClick={() => setCurrentImage(index)}
                key={index}
                className={`${
                  index === currentImage ? "bg-white" : "bg-gray-500 opacity-50"
                } h-3 w-3 rounded-full hover:cursor-pointer sm:h-3 sm:w-3`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-full flex flex-col items-center md:w-[60%]">
        <div className="flex flex-col items-center justify-center space-y-6 p-10 px-20">
          <h1 className="font-base_regular text-[2rem] font-medium text-white">
            VỀ CHÚNG TÔI
          </h1>
          <div className="relative pt-[1.2rem] px-[1.2rem]">
            <div className="absolute left-0 top-0 w-[40%] border-t-[1px] border-white p-[1px]" />
            <div className="absolute left-0 top-0 h-[60%] border-l-[1px] border-white p-[1px]" />

            <p className="font-base_thin_italic text-[1.4rem] font-medium text-[#f1f1f1] md:text-[1.6rem] lg:text-[2rem]">
              Linh Hồn Việt mang trong mình khát vọng cháy bỏng: tôn vinh vẻ đẹp
              trường tồn của Áo dài Việt Nam. Không chỉ đơn thuần là trang phục,
              mỗi thiết kế của Linh Hồn Việt là một bức tranh nghệ thuật sống
              động, một bản hòa ca giữa tinh hoa văn hóa và lòng tự hào dân tộc.
            </p>
          </div>

          <div className="relative pb-[1.2rem] px-[1.2rem]">
            <div className="absolute bottom-0 right-0 w-[40%] border-b-[1px] border-white p-[1px]" />
            <div className="absolute bottom-0 right-0 h-[60%] border-r-[1px] border-white p-[1px]" />

            <p className="font-base_thin_italic text-[1.4rem] font-medium text-[#f1f1f1] md:text-[1.6rem] lg:text-[2rem]">
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
          className="z-10 rounded-lg bg-[#353535] px-[2rem] py-[0.4rem] text-[1.6rem] font-[400] text-[#f1f1f1] duration-300 hover:cursor-pointer hover:bg-white hover:text-primary_1 md:text-[1.6rem] lg:text-[2rem]"
        >
          XEM THÊM
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
