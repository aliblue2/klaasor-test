import { motion } from "framer-motion";
const PrimaryBtn = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 500,
      }}
      className="w-fit text-sm flex items-center justify-center gap-1 p-2 bg-primaryColor text-white font-medium rounded-xl hover:bg-accentColor"
    >
      {children}
    </motion.button>
  );
};

export default PrimaryBtn;
