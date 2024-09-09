import HeroPic from "@/assets/heroPic.webp";
import Image from "next/image";
import PrimaryBtn from "../common/PrimaryBtn";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div  data-aos="fade-up" data-aos-duration="500" className="px-3 flex w-full flex-col items-center justify-center gap-2">
        <Image
          id="heroPic"
          src={HeroPic}
          priority
          alt="hero pic"
          className="bg-gradient-to-b from-accentColor to-emerald-400 rounded-full md:max-w-80 sm:max-w-64"
        />
      </div>
      <div data-aos="fade-down" data-aos-duration="500" className="flex flex-col items-start justify-center gap-5">
        <h4 data-aos="fade-left" data-aos-duration="500" className="text-primaryColor font-bold md:text-4xl text-3xl md:leading-relaxed leading-relaxed">
          Transform Your Learning Experience with Our Expert Mentor
        </h4>
        <p data-aos="fade-right" data-aos-duration="500" className="font-medium text-xl text-accentColor">
          Better teamwork, get more done, all in one platform
        </p>
        <div data-aos="fade-up" data-aos-duration="500" className="flex items-center justify-start gap-2">
          <input
            type="number"
            name="number"
            placeholder="+98xxxxxxxx"
            className="border-2 bg-white border-primaryColor outline-none p-1 rounded-xl w-8/12"
          />
          <PrimaryBtn>get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
