import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import TopCard from "../UI/TopCard";
import Footer from "../UI/Footer";
import SplashScreen from "../SplashScreen";
import { assets } from "../assets";
import Image from "next/image";
import ServicesNavigation from "../UI/ServicesNavigation";
import { Container } from "@mui/material";

const LogisticsService = () => {
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
          <TopCard title="Logistics Service" />
          <div className="py-20 bg-white text-black ">
          <Container>
            <div className="text-[#4A4A4A] text-lg flex flex-col ">
              <Image
                src={assets.LogisticsService}
                alt="Warehouse Provider"
                className="rounded-md self-center w-[100%]"
              />
              <p className="mt-8">
                Logistics service refers to the process of managing the flow of
                goods, materials, and information from the point of origin to
                the point of consumption. It involves a range of activities,
                such as transportation, warehousing, inventory management, and
                order fulfillment, all of which are designed to ensure that
                products are delivered to customers in a timely and efficient
                manner.
              </p>
              <p className="mt-5">
                Logistics services are essential for businesses that rely on the
                movement of goods, such as manufacturers, retailers, and
                wholesalers. By outsourcing their logistics operations to a
                third-party provider, these businesses can benefit from a range
                of services, including
              </p>
              <ul className="list-disc pl-10 mt-5 flex flex-col gap-2">
                <li>
                  Logistics providers can arrange for the transportation of
                  goods by land, sea, or air.
                </li>
                <li>
                  Logistics providers can store goods in their own warehouses or
                  distribution centers.
                </li>
                <li>
                  Logistics providers can manage inventory levels to ensure that
                  businesses have the right amount of stock on hand to meet
                  customer demand
                </li>
                <li>
                  We providers can manage the process of fulfilling customer
                  orders, including picking, packing, and shipping products.
                </li>
              </ul>
              <hr className="mt-8" />
              <h1 className="font-bold text-2xl mt-8">
                Benefits Logistics Service
              </h1>
              <ul className="list-disc pl-10 mt-5 flex flex-col gap-2">
                <li>
                  Logistics services help in reducing costs by optimizing the
                  supply chain and eliminating inefficiencies. This helps in
                  reducing transportation costs, inventory carrying costs, and
                  other expenses.
                </li>
                <li>
                  Logistics services ensure timely delivery of goods and
                  services, reducing the risk of delays, which can help in
                  improving customer satisfaction and increasing the overall
                  efficiency of the business.
                </li>
                <li>
                  Logistics services ensure that products are delivered to
                  customers on time and in good condition, which improves
                  customer satisfaction and loyalty.
                </li>
                <li>
                  Logistics services help in managing inventory more
                  efficiently, reducing the risk of overstocking or
                  understocking.
                </li>
                <li>
                  With the help of logistics services, businesses can access
                  global markets, expand their customer base, and increase
                  revenue.
                </li>
              </ul>
            </div>
          </Container>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default LogisticsService;
