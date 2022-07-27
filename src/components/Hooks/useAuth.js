import Cookies from "universal-cookie";

const cookies = new Cookies();

export const isLogin = () => {
  if (cookies.get("jwtToken")) {
    return true;
  }

  return false;
};

export const myRole = () => {
  let myRole = cookies.get("myRole");
  if (myRole) {
    return myRole;
  }

  return false;
};

export const myMail = () => {
  let myMail = cookies.get("registerEmail");
  if (myMail) {
    return myMail;
  }

  return false;
};
