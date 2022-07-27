import {
  DUPERR_MSG,
  DATA_LOGIN,
  LOGOUT,
  ISTOKEN_OK,
  MSG_LOGINS,
  FORG_PASS,
  FORG_PASSERR,
  UPDATEPASS_MSG,
  CLEAR_STATE,
  ISTOKEN_OKTOEDIT,
} from "../constat";

// import { Navigate } from "react-router-dom";

import Cookies from "universal-cookie";

// let token = localStorage.getItem("token");

var initState = {
  SignupMsg: "",
  LoginMsg: "",

  isVotedBefore: "",

  loginConfirm: "",

  ArticleData: "",
  Upvotes: [{}],
  Downvotes: [{}],

  Email: "",

  TokenMsg: "",

  data: {
    msg: "",
  },
  userDetail: "",
  userInfo: "",

  ForgPassMsg: "",
  ForgPassMsgMail: "",
  PassUpdateMsg: "",

  TokenMsgPassUpdate: "",
};

export function Auth(state = initState, action) {
  // const navigate = useNavigate();

  const cookies = new Cookies();

  switch (action.type) {
    case DATA_LOGIN:
      console.log("reducer run login", action.payload);

      console.log("reducer run", action.payload.jwtToken);

      if (action.payload.jwtToken) {
        // localStorage.setItem("jwtToken", action.payload.jwtToken);
        cookies.set("jwtToken", action.payload.jwtToken);
        cookies.set("myRole", action.payload.user.role);
        cookies.set("registerEmail", action.payload.user.registerEmail);

        console.log(cookies.get("jwtToken")); // Pacman
      }
      // let tokens = localStorage.getItem("token");

      return {
        ...state,
        loginConfirm: action.payload.msg,
      };

      break;

    case MSG_LOGINS:
      console.log("reducer run login", action.payload);

      console.log("reducer run", action.payload.user);

      return {
        ...state,
        LoginMsg: action.payload.msg,
      };

      break;

    case LOGOUT:
      // localStorage.removeItem("token");
      cookies.remove("jwtToken");
      cookies.remove("myRole");
      cookies.remove("registerEmail");

      break;

    case FORG_PASSERR:
      console.log("reducer Forgot Pass Err", action.payload);

      return {
        ...state,
        ForgPassMsg: action.payload.msg,
        ForgPassMsgMail: action.payload.user.email,
      };

      break;

    case FORG_PASS:
      console.log("reducer Forgot Pass", action.payload);

      return {
        ...state,
        ForgPassMsg: action.payload.msg,
      };

      break;

    case ISTOKEN_OK:
      // console.log(action.payload.data);
      // localStorage.removeItem("token");
      // state.userDetail = null;

      return {
        ...state,
        TokenMsg: action.payload.data.msg,
      };

      break;

    case ISTOKEN_OKTOEDIT:
      return {
        ...state,
        TokenMsgPassUpdate: action.payload.data.msg,
      };

      break;

    case UPDATEPASS_MSG:
      return {
        ...state,
        PassUpdateMsg: action.payload.data.msg,
      };

      break;

    case CLEAR_STATE:
      console.log("ClearState", action.payload.data);
      return {
        ...state,
        PassUpdateMsg: action.payload.data,
      };

      break;
    case DUPERR_MSG:
      console.log("reducer run", action.payload);

      console.log("reducer run", action.payload.data);

      // console.log("reducer mailid", action.payload.data.mailret);
      console.log("reducer msg", action.payload.data.msg);

      console.log("reducer msg", action.payload.data.msg);

      return {
        ...state,
        // ErrMsg: action.payload.data ? action.payload.data : action.payload.data.msg,4
        SignupMsg: action.payload.data.msg,
        // Email: action.payload.data.mailret,
      };

      break;

    default:
      break;
  }
  return state;
}
