import { DummyCources } from "@/DummyCources";
import Image from "next/image";
import { motion } from "framer-motion";

const TopCources = () => {
  return (
    <>
      <h6 className="text-accentColor text-xl text-center font-medium mt-20">
        Our Top Cources
      </h6>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5" data-aos="fade-up" data-aos-duration="500">
        {DummyCources.map((cource, i) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              key={i}
              className="bg-white z-10 rounded-xl shadow-md relative"
            >
              <Image
                src={cource.image}
                alt={cource.title}
                className="rounded-t-xl h-28 md:h-40 object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-2 p-2 px-1">
                <h6 className="font-medium text-sm md:text-lg ">
                  {cource.title}
                </h6>
                <p className="text-xs line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  facere accusamus omnis saepe explicabo laboriosam similique
                  fugiat est quidem quaerat fugit amet quis aut, repellendus et
                  voluptate itaque reiciendis obcaecati?
                </p>
                <span className="text-xs md:text-sm line-clamp-1 text-primaryColor font-medium">
                  By : {cource.author}
                </span>
                <span className="text-lg font-bold text-accentColor">
                  {cource.price + " $"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default TopCources;
