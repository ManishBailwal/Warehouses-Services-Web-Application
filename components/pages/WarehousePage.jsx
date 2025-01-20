import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import TopCard from "../UI/TopCard";
import Footer from "../UI/Footer";
import SplashScreen from "../SplashScreen";
import { Container } from "@mui/system";

const WarehousePage = () => {
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
          <TopCard title="property name" />
          <div className="py-20 bg-white text-black ">
            <Container>
              <div className="flex flex-col md:flex-row md:px-[10%]">
                <img
                  src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="property name"
                  className="w-[50%] aspect-square mr-5 rounded-md"
                />
                <div>
                  <div className="text-2xl text-black font-bold">
                    ISAC MILLER
                  </div>
                  <div className="text-xl text-gray-700">6, Dallirajhara</div>
                  <div className="text-lg mt-3 text-gray-900">
                    Molestiae et esse consequatur earum.
                  </div>
                  <div className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni nam alias corrupti quidem laudantium neque ducimus
                    sunt beatae, esse dolorum!
                  </div>
                </div>
              </div>
            </Container>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default WarehousePage;
