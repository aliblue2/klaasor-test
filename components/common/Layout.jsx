import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-whiteColor text-blackColor">
      <Header />
      <main className="max-w-[1100px] mx-auto p-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
