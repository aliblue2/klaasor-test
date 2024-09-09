import { MdAdd, MdHome, MdPerson } from "react-icons/md";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
const MainNav = () => {
  const pathName = usePathname();
  return (
    <ul className="flex items-center justify-start gap-2 md:flex-row flex-col">
      <motion.li className="relative p-2">
        <Link
          href={"/"}
          className={`flex  items-center justify-start gap-1 ${
            pathName === "/" && "text-primaryColor font-medium"
          }`}
        >
          <MdHome size={20} />
          home
        </Link>
        {pathName === "/" && (
          <motion.span
            layoutId="activeRoute"
            className="absolute top-0 left-0 h-full w-full  bg-primaryColor bg-opacity-20 rounded-xl border-b-2 border-primaryColor"
          />
        )}
      </motion.li>
      <motion.li className="relative p-2">
        <Link
          href={"/users"}
          className={`flex items-center justify-start gap-1 ${
            pathName === "/users" && "text-primaryColor font-medium"
          }`}
        >
          <MdPerson size={20} />
          users
        </Link>
        {pathName === "/users" && (
          <motion.span
            layoutId="activeRoute"
            className="absolute top-0 left-0 h-full w-full  bg-primaryColor bg-opacity-20 rounded-xl border-b-2 border-primaryColor"
          />
        )}
      </motion.li>
      <motion.li className="relative p-2">
        <Link
          href={"/users/add"}
          className={`flex items-center justify-start gap-1 ${
            pathName === "/users/add" && "text-primaryColor font-medium"
          }`}
        >
          <MdAdd size={20} />
          add user
        </Link>
        {pathName === "/users/add" && (
          <motion.span
            layoutId="activeRoute"
            className="absolute top-0 left-0 h-full w-full  bg-primaryColor bg-opacity-20 rounded-xl border-b-2 border-primaryColor"
          />
        )}
      </motion.li>
    </ul>
  );
};

export default MainNav;
