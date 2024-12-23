import { useState, useEffect, useRef } from "react";
import Testimonial from "../components/AboutUs/Testimonial";
import Vision from "../components/AboutUs/Vision";
import Misson from "../components/AboutUs/Misson";
import TeamMember from "../components/AboutUs/TeamMember";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleWheel =  (event: WheelEvent) => {
      
       event.preventDefault();

      const scrollAmount = 50;

      if (event.deltaY > 0) {
        window.scrollBy({ top: scrollAmount, behavior: "smooth" });
      } else {
        window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    // Dọn dẹp sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });
  useEffect(() => {}, [scrollY]);
  const headerRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const teamMemberRef = useRef<HTMLDivElement>(null);

  const [missionSelected, setMissionSelected] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header ref={headerRef} className="relative h-[100vh] overflow-hidden">
        <img
          loading="lazy"
          src="https://www.elle.vn/wp-content/uploads/2023/01/04/510992/thumbnail-ao-dai-shop-scaled.jpeg"
          alt="Áo Dài Header"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center">
          <div>
            <h1 className="mb-4 font-base_regular text-[3.6rem] font-bold text-white md:text-[4.2rem] lg:text-[4.8rem]">
              Linh Hồn Việt
            </h1>
            <p className="font-base_regular_italic text-[1.6rem] text-white md:text-[1.4rem] lg:text-[2rem]">
              Giữ gìn truyền thống, đón nhận sự đổi mới
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container flex flex-col space-y-[8.4rem] px-[1.6rem] py-[8.4rem]">
        {/* Vision Section */}
        <Vision ref={visionRef} />

        {/* Mission Section */}
        <Misson
          ref={missionRef}
          missionSelected={missionSelected}
          setMissionSelected={(index: number) => setMissionSelected(index)}
        />

        {/* Team Member Section */}
        <TeamMember ref={teamMemberRef} />

        {/* Testimonial Section */}
        <Testimonial ref={testimonialRef} />
      </main>
    </div>
  );
};

export default AboutUs;
