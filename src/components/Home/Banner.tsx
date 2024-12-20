import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const banerImages = [
    "https://dingdangvietnam.com/cdn/shop/files/web_1.jpg?v=1733131591&width=2000",
    "https://theme.hstatic.net/200000284249/1000799870/14/slideshow_1.jpg?v=3938",
    "https://theme.hstatic.net/1000403671/1000513394/14/slider_1.jpg?v=536",
    "https://theme.hstatic.net/1000403671/1000513394/14/banner2_2.jpg?v=536",
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  const handleSwipeNext = () => {
    setCurrentImage((prev) => (prev + 1) % banerImages.length);
  };

  const handleSwipePrev = () => {
    setCurrentImage((prev) => (prev - 1 + banerImages.length) % banerImages.length);
  };

  let slideNextImage:any;

  useEffect(() => {
    if (slideNextImage) {
      clearTimeout(slideNextImage);
    }
    slideNextImage = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % banerImages.length);
    }, 8000);

    return () => {
      clearTimeout(slideNextImage);
    };
  }, [currentImage]);

  return (
    <div className="relative h-[30rem] sm:h-[40rem] md:h-[50rem] lg:h-[55rem] xl:h-[60rem] 2xl:h-[70rem] w-full">
      <div className="relative h-full w-full">
        <AnimatePresence>
          {banerImages
            .slice(currentImage, currentImage + 1)
            .map((image) => (
              <motion.img
                key={image}
                src={image}
                alt="banner"
                className="h-full w-full object-cover"
                initial={{ opacity: 0.4,scale: 0.98 }}
                animate={{ opacity: 1 ,scale: 1}}
                // exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            ))}
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-0 left-0 h-full px-[1rem]">
        <div className="h-full flex items-center">
          <div
            onClick={handleSwipePrev}
            className="w-6 h-6 sm:w-8 sm:h-8 hover:cursor-pointer hover:text-primary_1"
          >
            <svg
              className="flickity-button-icon fill-current"
              viewBox="0 0 100 100"
            >
              <path
                d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                className="arrow"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-0 right-0 h-full z-30 px-[1rem]">
        <div className="h-full flex items-center">
          <div
            onClick={handleSwipeNext}
            className="w-6 h-6 sm:w-8 sm:h-8 hover:cursor-pointer hover:text-primary_1"
          >
            <svg
              className="flickity-button-icon fill-current"
              viewBox="0 0 100 100"
            >
              <path
                d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                className="arrow"
                transform="translate(100, 100) rotate(180)"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-0 z-30 w-full">
        <div className="flex justify-center space-x-2">
          {banerImages.map((_, index) => (
            <div
              onClick={() => setCurrentImage(index)}
              key={index}
              className={`${
                index === currentImage ? "bg-white" : "bg-gray-500 opacity-50"
              } rounded-full w-2 h-2 sm:w-3 sm:h-3 hover:cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
