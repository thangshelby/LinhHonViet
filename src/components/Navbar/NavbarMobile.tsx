import { useNavigate } from "react-router-dom";
import { navbarLinks } from "../../constants/index.ts";
import { FaAngleDown } from "react-icons/fa";
import { useCartStore } from "../../store/store.tsx";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const NavbarMobile = ({
  setIsOpenOverviewCart,
}: {
  setIsOpenOverviewCart: () => void;
}) => {
  const navigate = useNavigate();
  const { productsInCart } = useCartStore();
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [subCategoryActive, setSubCategoryActive] = useState<null | number>(
    null,
  );
  const subRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex h-[5rem] flex-row items-center justify-between bg-[#fcfcfc] px-[2rem] shadow-2xl">
      {/* ICON AND CATEGORY */}
      <div className="flex h-full flex-row items-center">
        <div className="relative flex h-full items-center whitespace-nowrap px-[1rem] hover:cursor-pointer">
          <div
            onClick={() => {
              setIsOpenNavbar(!isOpenNavbar);
            }}
          >
            <CiMenuBurger size={20} />
          </div>
          <AnimatePresence>
            {isOpenNavbar && (
              <motion.div
                initial={{
                  transform: "scaleY(0)",
                  transformOrigin: "top",
                }}
                animate={{
                  transform: "scaleY(1)",
                  transformOrigin: "top",
                }}
                exit={{
                  transform: "scaleY(0)",
                  transformOrigin: "top",
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-[100%] z-50 bg-[#fcfcfc] p-6 font-base_regular font-bold text-[#222222]"
              >
                {navbarLinks.map((category, index) => (
                  <div className="relative flex flex-col" key={index}>
                    <AnimatePresence>
                      <div
                        className="flex flex-row justify-between space-x-[4rem] py-[1rem] text-[1.2rem]"
                      >
                        <p>{category.title}</p>

                        {category.children && (
                          <div
                            onClick={() => {
                              if (subCategoryActive == index) {
                                setSubCategoryActive(null);
                              } else {
                                setSubCategoryActive(index);
                              }
                            }}
                            className={`${subCategoryActive == index && "rotate-180"} duration-500`}
                          >
                            <FaAngleDown size={20} />
                          </div>
                        )}
                      </div>
                    </AnimatePresence>

                    {/* SUB NAVBAR CATEGORY */}
                    <AnimatePresence>
                      {category.children && subCategoryActive == index && (
                        <motion.div
                          ref={subRef}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="relative flex flex-col space-y-3 pl-[1.4rem] overflow-hidden"
                        >
                          {category.children.map((subCate, index) => (
                            <div
                              onClick={() => {
                                navigate(`/collection/${subCate.title}`);
                              }}
                              key={index}
                              className="hover:underline opacity-80"
                            >
                              {subCate.title}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-[1rem] hover:cursor-pointer">
          <CiSearch size={20} />
        </div>
      </div>

      <img
        className="h-full w-[10rem] hover:cursor-pointer lg:mr-[3rem]"
        onClick={() => {
          navigate("/");
        }}
        src="https://theme.hstatic.net/200000284249/1000799870/14/logo.png?v=3938"
      />
      {/* SEARCH AND AUTH */}
      <div className="relative flex h-full flex-row items-center justify-center space-x-4">
        {/* SEARCH */}

        {/* AUTH */}
        <div
          onClick={() => {
            navigate("/auth/signin");
          }}
          className="flex flex-row items-center space-x-1 hover:cursor-pointer"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.8927 15.7682C16.0329 14.3137 14.8061 13.1078 13.3338 12.27C11.8614 11.4322 10.1946 10.9914 8.49845 10.9914C6.80225 10.9914 5.13546 11.4322 3.66314 12.27C2.19082 13.1078 0.964024 14.3137 0.104236 15.7682C-0.00102398 15.9568 -0.027822 16.179 0.0295835 16.387C0.0566587 16.493 0.106188 16.592 0.174854 16.6774C0.243521 16.7627 0.329737 16.8325 0.427728 16.8821C0.554141 16.9534 0.697158 16.9903 0.842462 16.9894C0.986554 16.9954 1.12952 16.9616 1.25545 16.8917C1.38138 16.8218 1.48536 16.7185 1.5558 16.5933C2.26752 15.3886 3.2833 14.3898 4.50251 13.6958C5.72172 13.0018 7.10204 12.6367 8.50674 12.6367C9.91144 12.6367 11.2918 13.0018 12.511 13.6958C13.7302 14.3898 14.746 15.3886 15.4577 16.5933C15.5685 16.7806 15.7491 16.9169 15.9603 16.9725C16.1715 17.0281 16.3963 16.9986 16.5858 16.8903C16.6801 16.8403 16.7628 16.7711 16.8285 16.6872C16.8943 16.6034 16.9415 16.5067 16.9673 16.4035C16.998 16.298 17.0072 16.1874 16.9944 16.0783C16.9816 15.9692 16.947 15.8638 16.8927 15.7682Z"></path>
            <path d="M8.49966 10.2C9.83622 10.2002 11.1195 9.67091 12.0732 8.72594C13.027 7.78097 13.5752 6.49588 13.5997 5.14718C13.5997 3.78206 13.0623 2.47286 12.1059 1.50757C11.1495 0.542291 9.85226 0 8.49966 0C7.14705 0 5.84985 0.542291 4.89341 1.50757C3.93698 2.47286 3.39966 3.78206 3.39966 5.14718C3.42416 6.49588 3.97228 7.78097 4.92607 8.72594C5.87987 9.67091 7.1631 10.2002 8.49966 10.2ZM5.09966 5.14718C5.09966 4.2371 5.45787 3.3643 6.09549 2.72078C6.73312 2.07725 7.59792 1.71573 8.49966 1.71573C9.40139 1.71573 10.2662 2.07725 10.9038 2.72078C11.5414 3.3643 11.8997 4.2371 11.8997 5.14718C11.8997 6.05726 11.5414 6.93006 10.9038 7.57359C10.2662 8.21711 9.40139 8.57864 8.49966 8.57864C7.59792 8.57864 6.73312 8.21711 6.09549 7.57359C5.45787 6.93006 5.09966 6.05726 5.09966 5.14718Z"></path>
          </svg>
        </div>

        {/* CART */}
        <div
          onClick={setIsOpenOverviewCart}
          className="group relative flex flex-row items-center space-x-1 hover:cursor-pointer"
        >
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.3699 15.3407C14.1509 15.3407 13.941 15.2535 13.7862 15.0982C13.6314 14.943 13.5444 14.7324 13.5444 14.5128H11.8936C11.8936 15.1715 12.1545 15.8032 12.6189 16.269C13.0832 16.7347 13.7131 16.9964 14.3699 16.9964C15.0266 16.9964 15.6565 16.7347 16.1209 16.269C16.5853 15.8032 16.8462 15.1715 16.8462 14.5128H15.1953C15.1953 14.7324 15.1083 14.943 14.9535 15.0982C14.7987 15.2535 14.5888 15.3407 14.3699 15.3407Z"></path>
            <path d="M8.5612 15.3407C8.34228 15.3407 8.13233 15.2535 7.97753 15.0982C7.82273 14.943 7.73576 14.7324 7.73576 14.5128H6.07715C6.07715 14.8395 6.14129 15.1629 6.26592 15.4646C6.39055 15.7664 6.57322 16.0406 6.8035 16.2715C7.03378 16.5025 7.30717 16.6857 7.60805 16.8107C7.90893 16.9357 8.23141 17 8.55707 17C8.88274 17 9.20522 16.9357 9.5061 16.8107C9.80698 16.6857 10.0804 16.5025 10.3106 16.2715C10.5409 16.0406 10.7236 15.7664 10.8482 15.4646C10.9729 15.1629 11.037 14.8395 11.037 14.5128H9.38612C9.38612 14.7323 9.29923 14.9428 9.14454 15.098C8.98985 15.2533 8.78003 15.3406 8.5612 15.3407Z"></path>
            <path d="M19.3299 1.64401C19.2849 1.63633 19.2393 1.63252 19.1937 1.63263H5.9867C5.76778 1.63263 5.55782 1.71985 5.40302 1.8751C5.24823 2.03035 5.16126 2.24092 5.16126 2.46047C5.16126 2.68003 5.24823 2.8906 5.40302 3.04585C5.55782 3.2011 5.76778 3.28832 5.9867 3.28832H18.2192L18.001 4.60149L16.8438 11.5668H6.07595L3.26946 4.60149L1.59537 0.482961C1.50684 0.289212 1.34721 0.13717 1.14972 0.0584856C0.952225 -0.020199 0.732083 -0.0194636 0.535118 0.0605389C0.338153 0.140541 0.179541 0.293646 0.0922992 0.487983C0.00505767 0.682319 -0.00409102 0.902913 0.0667575 1.10384L2.73963 7.68158L4.56385 12.5307C4.6985 12.9389 4.97657 13.2224 5.37794 13.2224H17.5428C17.7383 13.2225 17.9275 13.1531 18.0766 13.0264C18.2258 12.8997 18.3253 12.724 18.3574 12.5307L19.675 4.60149L20.0083 2.59655C20.0443 2.38002 19.993 2.15803 19.8658 1.9794C19.7386 1.80077 19.5458 1.68013 19.3299 1.64401Z"></path>
          </svg>

          <div className="absolute bottom-[60%] left-[90%] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-primary_1 font-base_regular text-[8px] font-bold text-white">
            <p className="group-hover:font-extraBold group-hover:scale-125">
              {productsInCart.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
