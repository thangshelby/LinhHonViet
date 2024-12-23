import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaFacebook, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

interface MemberCardProps {
  id: number;
  name: string;
  job: string;
  image: string;
  imageHover: number | null;
  setImageHover: (index: number | null) => void;
}
class MemberCard extends React.Component<MemberCardProps> {
  render() {
    const { id, name, job, image, imageHover, setImageHover } = this.props;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Bắt đầu mờ và trượt từ dưới lên
        animate={{ opacity: 1, y: 0 }} // Hoàn thành mờ dần và trượt về vị trí
        transition={{
          delay: id * 0.2, // Tạo hiệu ứng xuất hiện lần lượt
          duration: 0.5,
        }}
        onMouseLeave={() => {
          setImageHover(null);
        }}
        className={`px[0.4rem] relative flex h-[20rem] w-[16rem] flex-col items-center justify-between overflow-hidden rounded-lg bg-[#242628] py-[1.2rem] sm:h-[24rem] sm:w-[20rem] md:h-[28rem] md:w-[24rem] md:px-[0.8rem] md:py-[1.6rem] lg:px-[1.6rem] `}
      >
        <AnimatePresence>
          {imageHover === id && (
            <motion.img
              initial={{ opacity: 0, transformOrigin: "center", scale: 0.8 }}
              animate={{ opacity: 1, transformOrigin: "center", scale: 1 }}
              exit={{ opacity: 0, transformOrigin: "center", scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 h-full w-full object-cover hover:cursor-pointer"
              src={image}
            />
          )}
        </AnimatePresence>{" "}
        <div
          onMouseEnter={() => {
            setImageHover(id);
          }}
          className="flex h-[4.6rem] items-center justify-center rounded-full border-[0.2rem] border-[#f2726a] sm:w-[4.6rem] md:h-[6.4rem] md:w-[6.4rem]"
        >
          <img
            className="h-full w-full rounded-full object-cover"
            src={image}
          />
        </div>
        <div className="flex w-full flex-col items-center space-y-[0.2rem] md:space-y-[0.6rem] lg:space-y-[1rem]">
          <div className="flex flex-col space-y-[0.2rem]">
            <p className="font-pj text-[0.8rem] text-lg font-bold text-white md:text-[1rem] lg:text-[1.2rem]">
              {name}
            </p>
            <p className="font-pj text-base font-normal text-[#f2726a]">
              {job}
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-[0.6rem]">
          <span className="flex flex-row items-center space-x-[1rem] text-[1.4rem] md:space-x-[1.4rem] md:text-[2rem]">
            <span className="hover:scale-125 hover:cursor-pointer">
              <FaFacebook />
            </span>
            <span className="hover:scale-125 hover:cursor-pointer">
              <FaYoutube />
            </span>
            <span className="hover:scale-125 hover:cursor-pointer">
              <FaTiktok />
            </span>
            <span className="hover:scale-125 hover:cursor-pointer">
              <FaLinkedin />
            </span>
          </span>

          <div className="rounded-md border-[0.1rem] border-[#f2726a] p-[0.2] py-[0.2rem] text-center text-[0.8rem] font-bold text-white duration-300 hover:scale-105 hover:cursor-pointer hover:bg-[#f2726a] sm:p-[0.4] md:rounded-lg md:p-[0.6rem] md:text-[1.2rem] lg:p-[0.8rem]">
            Liên hệ
          </div>
        </div>
      </motion.div>
    );
  }
}

const TeamMember = React.forwardRef<HTMLElement>((_, ref) => {
  const teamMemberIsInView = useInView(ref as React.RefObject<HTMLDivElement>, {
    once: true,
    margin: "200px 0px 000px 0px",
  });
  const [imageHover, setImageHover] = useState<number | null>(null);

  return (
    <AnimatePresence>
      <section ref={ref}>
        {teamMemberIsInView && (
          <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-9xl flex flex-col px-[1.6rem] sm:px-6 lg:px-8">
              {/* HEADER */}
              <div className="text-center">
                <h2 className="font-base_regular text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                  Thành Viên Chủ Chốt
                </h2>
              </div>

              {/* TEAM MEMBER */}
              <div className="mt-[3.2rem] w-full text-center sm:grid-cols-2 sm:px-0 md:mt-20 md:grid-cols-4 lg:gap-x-16 xl:gap-x-20">
                <div className="flex w-full flex-row flex-wrap items-center justify-center gap-[3.6rem]">
                  {members.map((member, index) => (
                    <MemberCard
                      key={index}
                      id={index}
                      name={member.name}
                      job={member.job}
                      image={member.image}
                      imageHover={imageHover}
                      setImageHover={(index: number | null) =>
                        setImageHover(index)
                      }
                    />
                  ))}
                </div>
               
              </div>

           
            </div>
          </section>
        )}
      </section>
    </AnimatePresence>
  );
});

export default TeamMember;
const members = [
  {
    image:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/458937913_1004121814844944_2708465608887119435_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ZZSWTKqr360Q7kNvgEY4nb-&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=A7xvwU8OdM37I5W09Jgek4D&oh=00_AYA5zCrbJlomN3_8XJNqSsZ0NsifslsGGXtja9Y1Ul30Cg&oe=676EEE80", // Thay ảnh của bạn vào đây
    name: "Trần Nguyễn Kiều Vy",
    job: "Chief Marketing Officer",
  },
  {
    image:
      "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/452599389_837523061677923_8236358851569482127_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rVjN3TBTjgMQ7kNvgEJrbDE&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=A18v5IANdIAhbO0SRXiLfYj&oh=00_AYB4R0j5w9NPnP_Z7BuQL4IjxhkHdxuURe3mMZYHwHYmyg&oe=676EEAAD", // Thay ảnh của bạn vào đây
    name: "Phạm Bùi Thiên Trúc",
    job: "Chief Operating Officer",
  },
  {
    image:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/455836155_1278981516818422_4169351183584572750_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wP2I7t16wJcQ7kNvgGqhWZ4&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AgKUyd3Em0JjiCIAnb_jH_6&oh=00_AYCCMPHPiEI6MCAJF8TPTTGbkW3BnHmhbwvNgnJJBxCrfg&oe=676ED2CE", // Thay ảnh của bạn vào đây
    name: "Nguyễn Thị Thanh Huyền",
    job: "Chief Commercial Officer",
  },
  {
    image:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/456693548_1904934666675286_5062442896307076615_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=vUXliqXw028Q7kNvgHtQqSH&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=A1wTP2gNeYDFL3joLpA6qAK&oh=00_AYC1UwA7XFbqErQ3lZj2RoJROvxbWhkUygy75BatMHAiTQ&oe=676EF15B", // Thay ảnh của bạn vào đây
    name: "Mai Vân Ngọc",
    job: "Product Manager",
  },
  {
    image:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/432608222_1441429349791784_4790487475680845586_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=PncfMnGc0lcQ7kNvgH8NQMI&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=A-yRXW69PT_KUqHK4bCwmJh&oh=00_AYCjknk7ySsZnLBmPIteKiC6SJFq95rpKBiArzY5oPPrZg&oe=676EC38F", // Thay ảnh của bạn vào đây
    name: "Lê Mai Kim Anh",
    job: "Chief Financial Officer",
  },
  {
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png", // Thay ảnh của bạn vào đây
    name: "Ngô Nhật Minh",
    job: "Fashion Designer",
  },
  {
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png", // Thay ảnh của bạn vào đây
    name: "Ngô Nguyễn Đức Thắng",
    job: "Information Technology Specialist",
  },
];
