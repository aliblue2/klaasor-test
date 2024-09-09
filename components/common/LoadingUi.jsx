import Image from "next/image";
import LoadingImage from "@/assets/loading.png";
const LoadingUi = () => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-white bg-opacity-50  text-primaryColor flex items-center justify-center">
      <Image src={LoadingImage} alt="loading" width={150} height={150} />
    </div>
  );
};

export default LoadingUi;
