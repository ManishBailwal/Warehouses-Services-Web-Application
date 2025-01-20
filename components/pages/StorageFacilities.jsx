import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import TopCard from "../UI/TopCard";
import Footer from "../UI/Footer";
import SplashScreen from "../SplashScreen";
import { assets } from "../assets";
import Image from "next/image";
import ServicesNavigation from "../UI/ServicesNavigation";
import { Container } from "@mui/material";
const StorageFacilities = () => {
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
          <TopCard title="Storage Facilities" />
          <div className="py-20 bg-white text-black ">
          <Container>
            <div className="text-[#4A4A4A] text-lg  flex flex-col">
              <Image
                src={assets.storageFacilities}
                alt="Warehouse Provider"
                className="rounded-md self-center w-[100%]"
              />
              <p className="mt-8">
                Are you looking for a safe and secure place to store your
                belongings? Storage facilities are the perfect solution for
                those who need extra space for their items. Not only do they
                provide a convenient and affordable way to store your things,
                but they also offer a variety of features and services to make
                your experience as smooth as possible. When it comes to choosing
                a storage facility, there are a few things you should consider.
                First and foremost, you want to make sure that the facility is
                secure and well-maintained. Look for features like gated access,
                security cameras, and on-site management to ensure that your
                belongings are safe and protected. Another important factor to
                consider is the size of the unit you need. Most storage
                facilities offer a range of unit sizes to accommodate everything
                from a few boxes to an entire household worth of belongings.
                Take an inventory of what you need to store and choose a unit
                size that fits your needs. When it comes to choosing a storage
                facility, it&apos;s important to do your research and find one that
                meets your specific needs. With the right facility, you can
                enjoy peace of mind knowing that your belongings are safe and
                secure.
              </p>
              <hr className="mt-8" />
              <h1 className="mt-8 text-2xl font-bold">
                Benefits Storage Facilities
              </h1>
              <ul className="list-disc pl-10 mt-5 flex flex-col gap-2">
                <li>
                  Storage facilities provide a safe and secure location to store
                  items that may take up valuable space at home or in the
                  office. This helps to optimize space and reduce clutter,
                  leading to a more organized and efficient living or working
                  environment.
                </li>
                <li>
                  Storage facilities are equipped with state-of-the-art security
                  systems and surveillance cameras to ensure the safety of
                  stored items. This gives peace of mind to customers, knowing
                  that their belongings are in a secure location.
                </li>
                <li>
                  Many storage facilities offer climate-controlled units that
                  help to protect sensitive items such as electronics, art, and
                  documents from extreme temperatures and humidity. This helps
                  to preserve the condition of items and ensure they are in good
                  shape when retrieved.
                </li>
                <li>
                  Storage facilities offer cost-effective solutions for storing
                  items that may not be needed on a regular basis. This is
                  particularly useful for businesses that need extra space to
                  store inventory or for individuals who are downsizing and need
                  to store items temporarily.
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

export default StorageFacilities;
