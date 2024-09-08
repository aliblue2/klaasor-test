import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white p-5 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
        <div className="col-span-1">
          <span className="text-lg font-medium ">Kelaasor</span>
          <p className="text-sm line-clamp-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            veniam autem cupiditate, eos fuga libero illum quia eligendi tenetur
            repellendus distinctio! Sit, neque aliquid eaque doloribus
            temporibus asperiores quod ullam?
          </p>
        </div>
        <div className="col-span-1">
          <span className="text-lg font-medium ">Links</span>
          <ul className="flex flex-col items-start gap-2 mt-5 text-sm md:text-base">
            <li className=" font-medium">about us</li>
            <li className=" font-medium">contact us</li>
            <li className=" font-medium">privacy policies</li>
          </ul>
        </div>
        <div className="col-span-1">
          <span className="text-lg font-medium ">Bootcamps</span>
          <ul className="flex flex-col items-start gap-2 mt-5 text-sm md:text-base">
            <li className=" font-medium">DevOps</li>
            <li className=" font-medium">React js</li>
            <li className=" font-medium">Nextjs</li>
            <li className=" font-medium">Remix </li>
            <li className=" font-medium">Django</li>
          </ul>
        </div>
      </div>
      <p>
        
      </p>
    </footer>
  );
};

export default Footer;
