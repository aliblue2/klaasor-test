import React, { useState } from "react";
import MainNav from "./MainNav";
import PrimaryBtn from "./PrimaryBtn";
import { MdLogin, MdMenu } from "react-icons/md";
import MenuDrawer from "./MenuDrawer";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";

const Header = () => {
  const [menuDrawerVis, setMenuDrawerVis] = useState(false);
  const menuDrawerToggler = () => {
    setMenuDrawerVis(!menuDrawerVis);
  };
  return (
    <>
      <header className="w-full bg-white shadow-md h-16 z-10">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-5 px-5 h-full">
          <div className="flex items-center justify-start gap-2">
            <MdMenu
              onClick={menuDrawerToggler}
              size={20}
              className="md:hidden"
            />
            <Image
              src={LogoImage}
              alt="kelaasor"
              className="bg-primaryColor  mix-blend-multiply rounded-full"
            />
            <h4 className="text-primaryColor md:text-2xl text-lg font-bold">
              Kelaasor users
            </h4>
          </div>
          <div className="hidden md:block">
            <MainNav />
          </div>
          <PrimaryBtn>
            <span className="md:block hidden">signup / login</span>
            <MdLogin size={18} />
          </PrimaryBtn>
        </div>
      </header>
      <AnimatePresence>
        {menuDrawerVis && <MenuDrawer menuToggle={menuDrawerToggler} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
