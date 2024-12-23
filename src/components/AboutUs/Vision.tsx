import { motion, useInView, AnimatePresence } from "framer-motion";
import React from "react";

const Vision = React.forwardRef<HTMLElement>((_, ref) => {
  const visionIsInView = useInView(ref as React.RefObject<HTMLDivElement>, {
    once: true,
    margin: "100px 0px 100px 0px",
  });
  return (
    <AnimatePresence>
      <section ref={ref}>
        {visionIsInView && (
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex flex-col space-y-[1.2rem]"
            >
              <h2 className="mb-6 font-base_regular_italic text-[1.8rem] font-bold text-gray-800 md:text-[2rem] lg:text-[2.2rem]">
                Tầm Nhìn của chúng tôi
              </h2>

              {visions.map((vision, index) => (
                <p
                  key={index}
                  className="font-base_regular text-[1.6rem] leading-relaxed text-gray-600"
                >
                  {vision}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <img
                loading="lazy"
                src="https://file.hstatic.net/1000178779/article/thumbnail-phu-kien-ao-dai_0ec67b3523864d8ea3a02e28d680f2b8.jpg"
                alt="Traditional Áo Dài"
                className="h-[30rem] w-full rounded-lg object-cover shadow-lg"
              />
            </motion.div>
          </div>
        )}
      </section>
    </AnimatePresence>
  );
});

export default Vision;

const visions = [
  "Linh Hồn Việt mang trong mình khát vọng cháy bỏng: tôn vinh vẻ đẹp trường tồn của Áo dài Việt Nam. Không chỉ đơn thuần là trang phục, mỗi thiết kế của Linh Hồn Việt là một bức tranh nghệ thuật sống động, một bản hòa ca giữa tinh hoa văn hóa và lòng tự hào dân tộc.",
  "Linh Hồn Việt luôn nỗ lực không ngừng để biến giấc mơ đưa Áo dài vươn xa thành hiện thực. Bằng sự kết hợp tinh tế giữa chất liệu tự nhiên và kỹ thuật chế tác điêu luyện, mỗi chiếc Áo dài trở thành nhịp cầu kỳ diệu, nối liền hiện tại với quá khứ, mang trong mình sức sống mãnh liệt của một biểu tượng không bao giờ phai nhòa.",
];
