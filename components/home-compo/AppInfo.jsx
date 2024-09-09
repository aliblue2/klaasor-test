import appImages from "@/assets/app.png";
import cafebazaar from "@/assets/cafebazaar.png";
import myket from "@/assets/myket.png";
import sibapp from "@/assets/sibapp.png";
import webapp from "@/assets/webapp.png";
import Image from "next/image";

const AppInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
      <div data-aos="fade-down" data-aos-duration="500">
        <Image src={appImages} alt="app images" className="hue-rotate-15" />
      </div>
      <div data-aos="fade-top" data-aos-duration="500" className="flex flex-col items-start justify-around gap-5">
        <h5 className="text-3xl font-medium">Download App</h5>
        <p>
          With the order application, manage your products, orders and working
          hours, apply your desired discounts, see and respond to customer
          comments. You can also view and receive sales and accounting reports.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Image data-aos="fade-left" data-aos-duration="500" src={cafebazaar} alt="cafebazzar" />
          <Image data-aos="fade-right" data-aos-duration="500" src={myket} alt="cafebazzar" />
          <Image data-aos="fade-left" data-aos-duration="500" src={sibapp} alt="cafebazzar" />
          <Image data-aos="fade-right" data-aos-duration="500" src={webapp} alt="cafebazzar" />
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
