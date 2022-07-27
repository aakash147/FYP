import React from "react";
// import { useNavigate } from "react-router-dom";
import { isLogin } from "../../Hooks/useAuth";
import Header from "../../Header";
import HeaderLogout from "../../HeaderLogout";

import { useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  // const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname, "params");

  return isLogin() ? (
    <div>
      <HeaderLogout />
      {children}
    </div>
  ) : (
    // <div>
    //   {location.pathname === "/userDashboard" && isLogin() ? (
    //     ""
    //   ) : (
    //     <HeaderLogout />
    //   )}
    //   {children}
    // </div>
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PrivateRoute;
