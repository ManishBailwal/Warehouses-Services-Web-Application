import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import TopCard from "../UI/TopCard";
import Footer from "../UI/Footer";
import SplashScreen from "../SplashScreen";
import { Container } from "@mui/system";
import { assets } from "../assets";
import Image from "next/image";
import ServicesNavigation from "../UI/ServicesNavigation";

const Services = () => {
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
          <ServicesNavigation />
          <TopCard title="Warehouse Service Provider" />
          <div className="py-20 bg-white text-black ">
          <Container>
            <div className="text-[#4A4A4A] text-lg flex flex-col">
              <Image
                src={assets.warehouseProvider}
                alt="Warehouse Provider"
                className="rounded-md self-center w-[100%]"
              />
              <p className="mt-8">
                In the world of logistics and supply chain management, the term
                refers to third-party logistics, which is the outsourcing of
                logistics and distribution services to an external provider. One
                of the key services offered by providers is warehouse services.
                A warehouse Servicez is a company that offers warehousing
                facilities for rent or lease to businesses in need of storage
                and distribution services.
              </p>
              <h1 className="font-bold mt-8">
                Businesses that choose to work with a warehouse provider can
                benefit in a number of ways.
              </h1>
              <ul className="pl-10 list-disc mt-5">
                <li>
                  First and foremost, they gain access to high-quality
                  warehousing facilities that are designed to meet their
                  specific needs.
                </li>
                <li>
                  Another benefit of working with a 3PL warehouse provider is
                  that it can help businesses scale their operations more
                  efficiently.
                </li>
              </ul>
              <p className="mt-5">
                Overall, a Warehouse provider can be an invaluable partner for
                businesses looking to improve their logistics and supply chain
                management. By outsourcing their warehousing and distribution
                needs, businesses can focus on their core competencies and
                achieve greater efficiency, cost savings, and scalability.
              </p>
              <hr className="mt-8"></hr>
              <h1 className="text-2xl font-extrabold mt-8">
                Benefits of Warehouse Service Provider for Your Business
              </h1>
              <p className="mt-5">
                warehouse services are a popular option for businesses we will
                explore some of the benefits of using a warehouse provider.
              </p>
              <ul className="list-disc pl-10 mt-5 flex flex-col gap-2">
                <li>
                  <b>Cost Savings:</b> One of the biggest benefits of using a
                  Warehouse provider is cost savings. Instead of investing in
                  building or leasing a warehouse, businesses can simply pay for
                  the space they need.
                </li>
                <li>
                  <b>Expertise:</b> Warehouse providers have extensive expertise
                  in logistics and warehousing. They have the knowledge and
                  experience necessary to efficiently manage.
                </li>
                <li>
                  <b>Access to Technology:</b> Businesses that use a Warehouse
                  provider can benefit from access to these technologies without
                  having to make their own investments.
                </li>
                <li>
                  <b>Improved Service Levels:</b> By outsourcing warehousing and
                  logistics to a 3PL provider, businesses can focus on their
                  core competencies. This can lead to improved service levels as
                  businesses are able to focus on their customers and products.
                </li>
                <li>
                  <b>Risk Management:</b> Warehouse Providers can help
                  businesses comply with regulatory requirements and maintain
                  accurate records.
                </li>
              </ul>
              <p className="mt-5">
                Warehouse provider can offer a variety of benefits to businesses
                that need additional storage space. These benefits include cost
                savings, flexibility, expertise, access to technology, improved
                service levels, and risk management.
              </p>
            </div>
          </Container>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Services;
