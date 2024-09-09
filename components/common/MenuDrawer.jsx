import { motion } from "framer-motion";
import MainNav from "./MainNav";
import PrimaryBtn from "./PrimaryBtn";
import { MdLogin, MdOutlineHeadphones } from "react-icons/md";
import SecondaryBtn from "./SecondaryBtn";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";

const MenuDrawer = ({ menuToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={menuToggle}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="fixed z-20 md:hidden top-0 left-0 w-full h-full bg-primaryColor bg-opacity-30"
    >
      <motion.div
        className="w-[70%] fixed flex flex-col items-center justify-around bg-white shadow-md rounded-r-3xl h-full p-2"
        initial={{ left: -200 }}
        animate={{ left: 0 }}
        exit={{ left: -200 }}
        transition={{
          type: "spring",
          bounce: 0.6,
          duration: 0.5,
        }}
      >
        <div className="flex items-center justify-start gap-2">
          <Image
            src={LogoImage}
            alt="kelaasor"
            className="bg-primaryColor  mix-blend-multiply rounded-full"
          />
          <h4 className="text-primaryColor md:text-2xl text-lg font-bold">
            Kelaasor users
          </h4>
        </div>
        <MainNav />
        <div className="flex flex-col items-center w-full justify-start gap-2">
          <PrimaryBtn>
            signup / login
            <MdLogin size={20} />
          </PrimaryBtn>
          <SecondaryBtn>
            support
            <MdOutlineHeadphones size={20} />
          </SecondaryBtn>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuDrawer;
