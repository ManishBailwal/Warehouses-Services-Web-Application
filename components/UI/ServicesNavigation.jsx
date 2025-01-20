import React from "react";
import Link from "next/link";

const ServicesNavigation = () => {
  return (
    <div className=" py-4 flex justify-center items-center border-t-[1px] border-gray-400 bg-white">
      <ul className="flex gap-4 flex-wrap p-4">
        <Link href="/services" className="font-bold  hover:bg-secondary bg-primary text-white p-2">Services</Link>
        <Link href="/rentAndLease" className="font-bold  hover:bg-secondary bg-primary text-white p-2">Rent And Lease</Link>
        <Link href="/storageFacilities" className="font-bold  hover:bg-secondary bg-primary text-white p-2">Storage Facilities</Link>
      </ul>
    </div>
  );
};

export default ServicesNavigation;
