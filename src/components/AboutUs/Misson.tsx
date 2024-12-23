import { motion, AnimatePresence, useInView } from "framer-motion";
import React from "react";
interface MissionProps {
  missionSelected: number;
  setMissionSelected: (index: number) => void;
}

const Misson = React.forwardRef<HTMLElement, MissionProps>(
  ({ missionSelected, setMissionSelected }, ref) => {
    const missionIsInView = useInView(ref as React.RefObject<HTMLDivElement>, {
      once: true,
      margin: "100px 0px 100px 0px",
    });
    return (
      <AnimatePresence>
        <section ref={ref}>
          {missionIsInView && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              className="bg-[#54575a] p-[1.6rem]"
            >
              <h2 className="font-base_regular_italic text-[1.8rem] font-bold text-white md:text-[2rem] lg:text-[2.2rem]">
                Sứ Mệnh của chúng tôi
              </h2>

              <div className="mt-8 grid grid-cols-12 gap-6">
                {/* TITLE */}
                <div className="col-span-12 md:col-span-6 lg:col-span-5">
                  <div className="flex flex-row border-b-[0.1rem] border-white md:flex-col md:border-b-0 md:border-r-[0.1rem]">
                    {missions.map((mission, index) => (
                      <div
                        onMouseEnter={() => {
                          setMissionSelected(index);
                        }}
                        onClick={() => {
                          setMissionSelected(index);
                        }}
                        key={index}
                        className={`${
                          missionSelected === index
                            ? "bg-opacity-100"
                            : "opacity-50 hover:opacity-100"
                        } cursor-pointer rounded-lg p-4 text-white`}
                      >
                        <h3 className="font-base_regular text-[1.2rem] font-semibold uppercase text-white md:text-[1.2rem] lg:text-[1.4rem]">
                          {mission.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col-span-12 flex items-center justify-center md:col-span-6 lg:col-span-7">
                  <p className="font-base_thin text-[1.6rem] leading-relaxed text-white">
                    {missions[missionSelected].content}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </AnimatePresence>
    );
  },
);
export default Misson;

const missions = [
  {
    title: "Bảo tồn và phát huy giá trị truyền thống",
    content:
      "Nét khát khao lưu giữ và tôn vinh tinh hoa Áo dài – biểu tượng kiêu hãnh của văn hóa Việt. Bằng những thiết kế tinh xảo, thương hiệu không chỉ khơi gợi giá trị truyền thống mà còn lan tỏa sức hút trường tồn đến với con người Việt Nam.",
  },
  {
    title: "Sáng tạo và đổi mới",
    content:
      "Nét luôn tìm kiếm những ý tưởng mới, không ngừng cải tiến, mang đến những sản phẩm Áo dài có tính nghệ thuật cao, vừa giữ vững bản sắc dân tộc vừa kết hợp thiết kế tinh xảo giao thoa giữa cổ điển và hiện đại.",
  },
  {
    title: "Kết nối quá khứ và hiện đại",
    content:
      "Linh Hồn Việt mong muốn đem đến cảm nhận cho khách hàng về sự giao thoa giữa truyền thống và đương đại qua từng bộ sưu tập Áo dài.",
  },
  {
    title: "Tôn vinh giá trị khách hàng",
    content:
      "Những chiếc Áo dài được Linh Hồn Việt đem đến không chỉ tôn vinh vẻ đẹp riêng biệt của mỗi khách hàng, mà còn khơi dậy niềm tự hào và bản sắc cá nhân, mang đến cảm giác tự tin và đầy kiêu hãnh.",
  },
  {
    title: "Lan tỏa giá trị văn hóa",
    content:
      "Mỗi chiếc Áo dài là một sợi dây kết nối tinh tế, mang theo tâm hồn Việt Nam đến với những trái tim yêu văn hóa và cái đẹp, lan tỏa vẻ đẹp văn hóa từ quê hương đến với bạn bè quốc tế.",
  },
];
