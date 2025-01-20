import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import TopCard from "../UI/TopCard";
import Footer from "../UI/Footer";
import SplashScreen from "../SplashScreen";
import { Container } from "@mui/system";
import Image from "next/image";
import { assets } from "../assets";
import ServicesNavigation from "../UI/ServicesNavigation";

const RentAndLease = () => {
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
          <TopCard title="Rent And Lease" />
          <div className="py-20 bg-white text-black ">
          <Container>
            <div className="text-[#4A4A4A] text-lg  flex flex-col ">
              <Image
                src={assets.RentAndLease}
                alt="Warehouse Provider"
                className="rounded-md self-center w-[100%]"
              />
              <p className="mt-8">
                Warehouse rent and lease refer to the practice of renting or
                leasing out a space or building for the purpose of storage,
                distribution, or production. Warehouses are essential to the
                supply chain of many businesses and renting or leasing them is a
                cost-effective way to access storage space without the need for
                expensive building construction. The rental or lease agreement
                typically includes details such as the length of the lease, the
                monthly rent, and any additional fees or expenses. Warehouse
                owners often require tenants to have liability insurance and
                comply with safety and security regulations to protect the
                building and its contents. Renting or leasing a warehouse can be
                a smart move for businesses looking to expand their operations
                or increase their storage capacity.
              </p>
              <hr className="mt-8" />
              <h1 className="mt-8 text-2xl font-bold">
                Benefits of Warehouse Rent/Lease
              </h1>
              <p className="mt-5">
                Renting or leasing a warehouse can offer a variety of benefits
                to businesses of all sizes. Firstly, it provides an affordable
                and flexible solution for companies that require extra space for
                their inventory or equipment. By renting or leasing a warehouse,
                businesses can avoid the high costs associated with owning and
                maintaining their own facility. This allows them to allocate
                more resources towards other areas of their operations.
                Additionally, renting or leasing a warehouse can provide
                businesses with greater flexibility and scalability, as they can
                easily adjust their space requirements as their needs change.
                Moreover, warehouses typically offer amenities such as loading
                docks, ample parking, and security features that can help ensure
                the safety and security of a business&apos;s inventory or equipment.
                Overall, renting or leasing a warehouse can provide businesses
                with a cost-effective, flexible, and secure solution for their
                storage needs.
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

export default RentAndLease;
