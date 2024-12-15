const AboutUsReal = () => {
  return (
    <div className="flex flex-row relative  w-full  bg-background 
    group hover:scale-105 duration-500 hover:cursor-pointer hover: ">
      <div className="absolute w-full h-full z-10  hidden
       group-hover:flex justify-center items-center duration-700 ">
        <div className="w-[95%] h-[100%] border-[2px] border-white " >
        </div>

      </div>
      <div className="py-12 w-[40%]">
        <img src="https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/05/123456.jpg" />
      </div>
      <div className="w-[60%] flex flex-col items-center ">
        <div className="p-12 px-20 flex flex-col space-y-8 items-center justify-center">
          <h1 className="text-[40px] text-white font-raleway font-medium">
            VỀ CHÚNG TÔI
          </h1>
          <p className="text-[#f1f1f1] font-normal font-raleway">
            Hội An đón 3 triệu lượt khách quốc tế (2023); xếp thứ 4/25 thành phố
            đẹp nhất thế giới (2024). Xu hướng du lịch trải nghiệm văn hóa tăng
            mạnh. Lễ hội Áo dài TP.HCM 2024: 480.000 khách quốc tế, doanh thu
            gần 16.000 tỷ VNĐ. Chính phủ hỗ trợ quảng bá sản phẩm truyền thống.
          </p>

          <p className="text-[#f1f1f1] font-normal font-raleway mt-8">
            Hội An đón 3 triệu lượt khách quốc tế (2023); xếp thứ 4/25 thành phố
            đẹp nhất thế giới (2024). Xu hướng du lịch trải nghiệm văn hóa tăng
            mạnh. Lễ hội Áo dài TP.HCM 2024: 480.000 khách quốc tế, doanh thu
            gần 16.000 tỷ VNĐ. Chính phủ hỗ trợ quảng bá sản phẩm truyền thống.
          </p>
        </div>
        <div
          className="bg-[#353535] text-[#f1f1f1] 
        px-8 py-3 rounded-lg font-[400] text-[20px] hover:text-primary_1 hover:bg-white hover:cursor-pointer duration-300"
        >
          XEM THÊM
        </div>
      </div>
    </div>
  );
};

export default AboutUsReal;
