import React from "react";

const Gap = (props) => {
    const className = props.className === undefined ? "" : props.className;
    return (
     <div
        className={`flex-none bg flex items-center justify-center  text-white font-semibold ${className} my-4`}
      >
        <div className="rounded-lg bg-primary px-6 py-1.5 flex text-center ">
          {props.children}
        </div>
        <div className=" flex-1 bg-primary h-1 bg-pri"></div>
      </div>
    );
  };
export default Gap;