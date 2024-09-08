import HeroPic from "@/assets/heroPic.webp";
import Image from "next/image";
import PrimaryBtn from "../common/PrimaryBtn";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="p-2 flex w-full flex-col items-center justify-center gap-2">
        <Image
          id="heroPic"
          src={HeroPic}
          alt="hero pic"
          className="bg-gradient-to-br from-accentColor to-emerald-400 rounded-full md:max-w-80 sm:max-w-64"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-5">
        <h4 className="text-primaryColor font-bold md:text-4xl text-3xl md:leading-relaxed leading-relaxed">
         Transform Your Learning Experience with Our Expert Mentor
        </h4>
        <p className="font-medium text-xl text-accentColor">
          Better teamwork, get more done, all in one platform
        </p>
        <div className="flex items-center justify-start gap-2">
          <input type="number" name="number" placeholder="+98xxxxxxxx" className="border-2 bg-white border-primaryColor outline-none p-2 rounded-xl" />
        <PrimaryBtn>get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
