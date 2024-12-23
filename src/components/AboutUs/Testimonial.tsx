import { FaStar } from "react-icons/fa";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
const Testimonial = React.forwardRef<HTMLDivElement>((_, ref) => {
  const stars = [1, 2, 3, 4, 5];
  //   console.log(ref.current.clientHeight);
  const testomonialIsInView = useInView(
    ref as React.RefObject<HTMLDivElement>,
    { once: true },
  );
  return (
    <AnimatePresence>
      <section ref={ref} className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        {testomonialIsInView ? (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="flex flex-col items-center">
              <div className="text-center">
                <h2 className="xt-[2rem] font-base_regular_italic text-[1.6rem] font-semibold text-gray-900 sm:text-4xl xl:text-5xl">
                  Mọi người nói gì về chúng tôi
                </h2>
              </div>

              <div className="relative mt-10 md:order-2 md:mt-24">
                <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                  <div className="testimonial-layer mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter" />
                </div>

                <div className="relative mx-auto grid w-full grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex flex-col overflow-hidden shadow-xl"
                    >
                      <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                        <div className="flex-1">
                          <div className="flex items-center space-x-[0.1rem]">
                            {stars.map((star) => (
                              <FaStar key={star} size={12} color="#FDB241" />
                            ))}
                          </div>

                          <blockquote className="mt-8 flex-1">
                            <p className="font-base_regular text-[1.4em] leading-relaxed text-gray-900">
                              {testimonial.quote}
                            </p>
                          </blockquote>
                        </div>

                        <div className="mt-8 flex items-center">
                          <img
                            className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                            src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="font-base_thin text-[1.6rem] font-bold text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="font-base_thin text-[1.6rem] text-gray-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div></div>
        )}
      </section>
    </AnimatePresence>
  );
});

export default Testimonial;

const testimonials = [
  {
    id: 1,
    name: "Mai Phuong",
    image:
      "https://dingdangvietnam.com/cdn/shop/files/LEK1098.jpg?v=1733217041",
    quote:
      "Sự chú ý đến từng chi tiết trong các thiết kế Áo Dài này hoàn toàn nắm bắt được di sản văn hóa của chúng ta, đồng thời hòa quyện với thẩm mỹ hiện đại.",
    role: "Nhà thiết kế thời trang",
  },
  {
    id: 2,
    name: "Linh Tran",
    image:
      "https://dingdangvietnam.com/cdn/shop/files/LEK0609_Custom.webp?v=1726142506",
    quote:
      "Mặc những chiếc Áo Dài này giúp tôi cảm thấy kết nối với cội nguồn của mình, đồng thời vẫn hiện đại và phong cách.",
    role: "Khách hàng",
  },
  {
    id: 3,
    name: "Thu Ha",
    image:
      "https://dingdangvietnam.com/cdn/shop/files/LEK1603_Custom.jpg?v=1726143344",
    quote:
      "Tay nghề thủ công và chất lượng của những chiếc Áo Dài này thật sự xuất sắc. Mỗi chiếc đều kể một câu chuyện độc đáo.",
    role: "Nhà phê bình ",
  },
];
