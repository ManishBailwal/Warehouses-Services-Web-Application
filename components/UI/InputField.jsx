import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputField = ({
  labelName,
  type,
  uni,
  placeholder,
  rowWise,
  inputClass,
  labelClass,
  className,
  override,
  children,
  as
}) => {

  const [passVisibility,setPassVisibility]=useState(false);
  const hidePass=()=>{
    setPassVisibility(false);
}

const showPass=()=>{
    setPassVisibility(true);
}

  return (
    <div className={className}>
        <label className=" text-slate-600 col-span-1 flex items-center" htmlFor={uni}>
          {labelName}
        </label>
        <div className={`flex items-center space-x-2    rounded-lg `}>
        <Field
          className={`p-2 w-[100%] bg-blue-200 text-black  rounded-lg ${inputClass} ${override ? 'h-10':''}`}
          placeholder={placeholder}
          type={type!=='password' || type===undefined ? type : type==='password' && passVisibility ? 'text' : 'password'}
          id={uni}
          as={as}
          name={uni}
        >{override ? children : null}</Field>
      {type==='password' && passVisibility && <IconButton onClick={()=>hidePass()} className="p-1 cursor-pointer" ><VisibilityOff/></IconButton>}
      {type==='password' && !passVisibility && <IconButton onClick={()=>showPass()} className="p-1 cursor-pointer" ><Visibility/></IconButton>}

      </div>
      <ErrorMessage name={uni} component={(props)=><div className="text-red-500">{props.children}</div>} />

    </div>
  );
};

export default InputField;