import React, { useContext, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";
import Link from "next/link";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AuthContext from "../store/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { assets } from "../assets";
import Image from "next/image";
import {
  Call,
  Cancel,
  CheckCircle,
  ChecklistRtl,
  Circle,
  DoDisturbOn,
  LocationOnSharp,
  Photo,
  Warehouse,
} from "@mui/icons-material";
import Dashboard from "./Dashboard";
import { state_arr } from "../utils/CityDropdown";
import { Button } from "@mui/material";
import axios from "axios";
import CardSkelton from "../skeltons/CardSkelton";
import Gap from "../UI/Gap";
import Spinner from "../UI/Spinner";

export const adminMenu = [
  {
    name: "Dashboard",
    pageLink: "/dashboard",
    icon: <DashboardIcon />,
    showAlways: false,
  },
  {
    name: "Add Warehouse",
    pageLink: "/dashboard/addwarehouse",
    icon: <WarehouseIcon />,
    showAlways: false,
  },
  {
    name: "Gallery Images",
    pageLink: "/dashboard/gallery",
    icon: <Photo />,
    showAlways: false,
  },
  {
    name: "Request Listing",
    pageLink: "/dashboard/requestlisting",
    icon: <ChecklistRtl />,
    showAlways: false,
  },
];
const RequestListing = ({ children }) => {
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  //   const [highlightIndex, setHighlightIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [warehouses, setWarehouses] = useState();
  const [dataLoading, setDataLoading] = useState(true);
  const [loadingId, setLoadingId] = useState("");

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      toast.warn("User not logged in");
      route.push("/adminpanel");
    }
  }, [authCtx]);

  useEffect(() => {
    setLoadingId("");
  }, [warehouses]);
  const getWareHouses = async () => {
    const response = await axios.get("/api/warehouses");
    let temp = [];
    response.data.warehouses.map((item) =>{
     if(item.addedBy==='user')temp.push(item)
     })
    setWarehouses(temp);
    setDataLoading(false);
    console.log(temp);
  };
  useEffect(() => {
    getWareHouses();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const enableWarehouse = async (id, enabled) => {
    setLoadingId(id);
    await axios.put(`/api/enableWarehouse?id=${id}`, { enabled: enabled });
    getWareHouses();
  };
  const disableWarehouse = async (id, enabled) => {
    setLoadingId(id);
    await axios.put(`/api/enableWarehouse?id=${id}`, { enabled: enabled });
    getWareHouses();
  };

  const Card = ({ item }) => {
    return (
      <div
        className={`${
          item.enabled ? "text-black" : "text-gray-700"
        } flex flex-col md:flex-row w-full bg-slate-50 rounded-xl overflow-hidden p-2 gap-4 justify-between items-center`}
      >
        {/* {console.log(item.enabled)} */}
        <div className="w-[60%] md:w-full overflow-hidden rounded-xl">
          <Image
            width={300}
            height={200}
            alt="Warehouse"
            src={item.imageUrl}
            className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col md:w-full gap-3">
          <div className="flex justify-between ">
            <div className="">
              <h3 className="text-lg  font-bold">{item.propertyName}</h3>
            </div>
          </div>
          <div className={`${!item.enabled ? "text-slate-600" : ""} font-bold`}>
            <LocationOnSharp className="text-warehouseBlue" />
            {item.address} {item.city}, {state_arr[item.state]}
          </div>
          <div className="flex justify-start items-center gap-1">
            {!item.zone ? (
              ""
            ) : item.zone.toLowerCase() === "normal" ? (
              <>
                <Circle className={`${item.enabled ? "text-slate-300" : ""}`} />
                <h3 className="font-semibold">{item.zone} Zone</h3>
              </>
            ) : (
              <>
                <Circle
                  style={{
                    color: `${item.zone.toLowerCase()}`,
                    opacity: 0.7,
                  }}
                />
                <h3 className="font-semibold">{item.zone} Zone</h3>
              </>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex rounded-sm justify-between px-1 border-2 border-primary w-full">
              <div className="flex items-center p-1 gap-1">
                <Warehouse className="text-secondary" />
                <h3 className="font-semibold text-secondary">{item.size}</h3>
              </div>
              <div className="flex items-center px-2 gap-1">
                {!item.category ? (
                  ""
                ) : item.category.toLowerCase() === "approved" ? (
                  <CheckCircle className="text-green-600" />
                ) : item.category.toLowerCase() === "non-approved" ? (
                  <Cancel className="text-white" />
                ) : (
                  <DoDisturbOn className="text-primary" />
                )}
                <h3 className="font-semibold text-secondary">
                  {item.category ? item.category + "Category" : ""}
                </h3>
              </div>
            </div>
          </div>
          <div className="self-end flex justify-between gap-2">
          <Button variant="outlined" onClick={()=>route.push(`/dashboard/addwarehouse?id=${item?._id}`)}>View</Button>

            {item._id === loadingId ? (
              <Button disabled variant="outlined">
                <Spinner />
              </Button>
            ) : !item.enabled ? (
              <Button
                variant="contained"
                onClick={() => enableWarehouse(item._id, item.enabled)}
              >
                Enable
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="error"
                onClick={() => disableWarehouse(item._id, item.enabled)}
              >
                Disable
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const item = {
    imageUrl: assets.warehouseProvider,
    propertyName: "Test",
    address: "GMS Road",
    city: "Dehradun",
    state: 33,
    size: "500 acre",
    category: "approved",
  };

  return (
    <Dashboard>
      {/* {console.log(warehouses)} */}
      {dataLoading ? (
        <div className="w-full flex flex-col gap-2">
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
        </div>
      ) : (
        <>
          {!warehouses ? (
            <div />
          ) : (
            <>
              <Gap>Disabled Properties</Gap>
              {warehouses.map((item,i) => !item.enabled && <Card key={i} item={item} />)}
            </>
          )}
          {!warehouses ? (
            <div />
          ) : (
            <>
              <Gap>Enabled Properties</Gap>
              {warehouses.map((item,i) => item.enabled && <Card key={i} item={item} />)}
            </>
          )}
        </>
      )}
    </Dashboard>
  );
};

export default RequestListing;
