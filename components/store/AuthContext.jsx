import React, { useState ,useEffect} from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  role:"",
  localid:"",
  isLoggedIn: false,
  login: (localid,token) => {},
  logout: () => {},
});

export const AuthContextProvider=(props)=>{
  let initialToken,initialId,initialRole;
  
  useEffect(()=>{
    
  },[])
  
  if (typeof window !== 'undefined') {
    initialToken = localStorage.getItem('token')
    initialId = localStorage.getItem('localid')
    initialRole = localStorage.getItem('role')
  }
  
  const [token,setToken]=useState(initialToken);
  const [localid,setLocalId]=useState(initialId);
  const [role,setRole]=useState(initialRole);
  const [isLoggedIn,setLoggedIn]=useState(!!token);


  const loginHandler=(localid,token,role)=>{
    setToken(token);
    setLocalId(localid);
    setLoggedIn(true);
    localStorage.setItem('token',token);
    localStorage.setItem('localid',localid);
    localStorage.setItem('role',role);
  }

  const logoutHandler=()=>{
    setToken(null);
    setLocalId(null);
    setRole(null);
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('localid');
    localStorage.removeItem('role');
  }

  const value={
    token:token,
    localid:localid,
    role:role,
    login:loginHandler,
    logout:logoutHandler,
    isLoggedIn: isLoggedIn
  }

  return(
    <AuthContext.Provider value={value} >{props.children}</AuthContext.Provider>
  )
}

export default AuthContext;