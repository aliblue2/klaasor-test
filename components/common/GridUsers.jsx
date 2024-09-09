import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdArrowDownward, MdArrowRightAlt } from "react-icons/md";
const GridUsers = ({ users }) => {
  const [isExpendItem, setIsExpendItem] = useState(-1);
  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center gap-2 my-5">
        <h6 className="text-primaryColor font-medium text-xl">
          no have user to display
        </h6>
      </div>
    );
  }
  return (
    <div className="my-5">
      <motion.ul
        initial={{
          top: -200,
          opacity: 0,
        }}
        whileInView={{
          top: 0,
          opacity: 1,
        }}
        transition={{
          type: "keyframes",
          ease: "easeInOut",
          duration: 1,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 relative"
      >
        {users.map((user) => {
          return (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              animate={{ height: isExpendItem === user.id ? 210 : 56 }}
              transition={{
                type: "spring",
                stiffness: 200,
                bounce: 0.5,
              }}
              key={user.id}
              onClick={() =>
                setIsExpendItem((prevId) => (prevId === user.id ? -1 : user.id))
              }
              className="bg-white p-2 rounded-xl cursor-pointer overflow-hidden shadow-sm flex flex-col items-start justify-around gap-2"
            >
              <div className="flex items-center justify-between w-full">
                <span className="bg-gradient-to-br from-primaryColor to-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {user.username.slice(0, 1)}
                </span>
                <Link
                  href={`/users/${user.id}`}
                  className="font-medium line-clamp-1"
                >
                  {user.name}
                </Link>
                <motion.button
                  animate={{ rotate: isExpendItem === user.id ? 180 : 0 }}
                >
                  <MdArrowDownward className="text-primaryColor" size={18} />
                </motion.button>
              </div>
              {isExpendItem === user.id && (
                <div className="flex flex-col items-start justify-start gap-2 w-full">
                  <span className="text-xs">email : {user.email}</span>
                  <span className="text-xs">city : {user.address.city}</span>
                  <span className="text-xs">
                    street : {user.address.street}
                  </span>
                  <span className="font-medium text-primaryColor">
                    phone : {user.phone}
                  </span>
                  <div className="border-b border-primaryColor w-full border-dashed"></div>
                  <Link
                    className="flex w-full items-center justify-between gap-2 rounded-xl bg-primaryColor p-1 text-white hover:bg-accentColor hover:scale-105 transition-all ease-in-out duration-300"
                    href={`/users/${user.id}`}
                  >
                    See UserDetail
                    <MdArrowRightAlt size={20} />
                  </Link>
                </div>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default GridUsers;
