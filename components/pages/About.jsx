import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import TopCard from "../UI/TopCard";
import Footer from "../UI/Footer";
import SplashScreen from "../SplashScreen";
import { Container } from "@mui/system";
import Image from "next/image";
import { assets } from "../assets";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { LocationOn } from "@mui/icons-material";
const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <ResponsiveDrawer />
          <TopCard title="About" />
          <div className="py-20 bg-white text-black ">
            <Container>
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white shadow-xl rounded-xl overflow-hidden">
                  <Image
                    className="col-span-1 bg-cover h-[100%] w-[100%]"
                    alt="About us"
                    src={assets.about_us_1}
                  />
                  <div className="col-span-1 md:col-span-2 p-4 md:p-8">
                    <h2 className="text-2xl font-bold">
                      We provide best warehouse services Across India
                    </h2>
                    <p className="text-xl">
                      Our company takes pride in offering the best warehouse
                      services across India. We understand the importance of
                      safe and reliable storage solutions for businesses, and we
                      strive to provide just that. Our warehouses are equipped
                      with state-of-the-art technology and are managed by a team
                      of experienced professionals who ensure that your goods
                      are handled with the utmost care. Our goal is
                      &quot;Minimum the Rental, Longer the Survival&quot; to
                      provide you with a stress-free experience, so you can
                      focus on growing your business. Trust us to provide the
                      best warehouse services for all your storage needs.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white shadow-xl rounded-xl overflow-hidden">
                  <Image
                    className="col-span-1 bg-cover h-[100%]"
                    src={assets.about_us_2}
                  />
                  <div className="col-span-1 md:col-span-2 p-4 md:p-8">
                    <h2 className="text-2xl font-bold">Why Choose Us</h2>
                    <p className="text-xl">
                      At our Warehouse Services Company, we understand that
                      finding the right storage solution for your business can
                      be challenging. That&quot;s why we provide reliable and
                      flexible warehousing options that meet your unique needs.
                      Whether you&quot;re looking for short-term or long-term
                      storage, we&quot;ve got you covered. We offer warehouse
                      space on rent/lease in multiple locations around
                      Uttarakhand, Uttar Pradesh, Punjab, Haryana, Himachal,
                      Rajasthan and Jammu. Our facilities are well-maintained,
                      secure, and equipped with state-of-the-art technology to
                      ensure the safety and integrity of your goods. Our team of
                      experienced professionals is committed to providing
                      exceptional customer service and support, ensuring that
                      your storage experience with us is hassle-free and
                      stress-free. Choose us for your warehousing needs, and
                      we&quot;ll help you streamline your operations, reduce
                      costs, and achieve your business goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-4">
                <div className="col-span-1 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2">
                  <LocationOn sx={{ fontSize: 40 }} />
                  <h2 className="text-xl font-bold text-primary">
                    Area Of Services
                  </h2>
                  <p>
                    At Presents We Have provided Warehouse In Different
                    Locations: Uttarakhand, U.P, Haryana, Punjab, Himachal ,
                    Rajasthan, and some parts of other states.
                  </p>
                </div>

                <div className="col-span-1 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2">
                  <CurrencyRupeeIcon sx={{ fontSize: 40 }} />
                  <h2 className="text-xl font-bold text-primary">
                    Budget Friendly
                  </h2>
                  <p>
                    At warehouse Servicez we know the trends are the liabilities
                    , so our company&quot;s moto is &quot;Minimum the rental,
                    longer the Survival&quot;
                  </p>
                </div>

                <div className="col-span-1 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2">
                  <PhonelinkIcon sx={{ fontSize: 40 }} />
                  <h2 className="text-xl font-bold text-primary">
                    Easy Assistance
                  </h2>
                  <p>
                    Easy assistance on warehouse service can help streamline
                    your operations and improve your bottom line
                  </p>
                </div>
              </div>
            </Container>

            <div className="bg-white py-20">
              <Container>
                <div className=" p-4 shadow-2xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                  <div className="flex flex-col justify-center items-center w-[100%] ">
                    <Image
                      src={assets.director}
                      alt="Director"
                      className=" w-[400px] aspect-auto rounded-full border-4 p-2"
                    />
                  </div>
                  <div className="flex flex-col gap-4 text-black">
                    <h2 className="text-xl font-bold">
                      Message From warehouse Servicez Managing Director
                    </h2>
                    <h3>Dear valued customers,</h3>
                    <p className="">
                      I am honored to welcome you to the Warehouse Servicez ,
                      where we offer reliable and efficient warehouse services
                      to meet your storage needs. As the Managing Director of
                      Warehouse Servicez, I take pride in our commitment to
                      providing exceptional warehousing solutions to our
                      esteemed clientele. Our reputation for reliability,
                      efficiency, and quality has made us a well-known company
                      in the warehousing industry. We take pride in our ability
                      to deliver on our promises and exceed our customer&apos;s
                      expectations. Thank you for considering Warehouse Servicez
                      for your warehousing needs. We look forward to the
                      opportunity to serve you and earn your trust , Our Motto
                      is Simple “ Minimum the Rental , Longer the Survival .{" "}
                    </p>
                    <p>Sincerely,</p>
                    <p className="font-bold">Harish Kumar Sikka</p>
                    <p>Managing Director, Warehouse Servicez </p>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default About;
