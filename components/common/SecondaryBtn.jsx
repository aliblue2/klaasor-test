import { motion } from "framer-motion";
const SecondaryBtn = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-fit flex items-center justify-center gap-1 text-sm p-2 hover:bg-primaryColor text-primaryColor hover:text-white border border-primaryColor font-medium rounded-xl "
    >
      {children}
    </motion.button>
  );
};

export default SecondaryBtn;
