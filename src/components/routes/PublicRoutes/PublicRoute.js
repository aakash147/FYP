import React from "react";
import { isLogin } from "../../Hooks/useAuth";

// import { withRouter } from "react-router-dom";
import Header from "../../Header";
import HeaderLogout from "../../HeaderLogout";

const PublicRoute = ({ children }) => {
  // return (

  //   <Route {...rest}> {isLogin ? children : <Navigate to="/login" /> } </Route>
  // );
  // const auth = useAuth();
  console.log("isLogin");
  // console.log(isLogin);

  return isLogin() ? (
    <div>
      <HeaderLogout />
      {children}
    </div>
  ) : (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PublicRoute;
