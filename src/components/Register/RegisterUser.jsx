import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { registerUser } from "./../../redux/actions/authuser";
import { authuser } from "./../../redux/actions/authuser";

const StyledButton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        color: "#ffffff",
        background: "#D01345",
        fontSize: "16px",
        textTransform: "capitalize",
        width: "100px",
        paddingY: "5px",
        "&:hover": {
          background: "#D01345a1",
        },
      }}
    >
      {children}
    </Button>
  );
};

function Register() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    registerEmail: "",
    passwordRegister: "",
    confrmPassword: "",
  });

  const [state1, setState1] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const onChangeSignIN = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState1({ ...state1, [e.target.name]: val });
    } else {
      setState1({ ...state1, [e.target.name]: e.target.value });
    }
  };

  const validate = () => {
    console.log("validate");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...state,
    };

    dispatch(registerUser(obj));
    // var isFormvalid = validate();
    // // console.log("isvalid", isFormvalid);
    // // window.scrollTo(0, 200);
    // // if (isFormvalid) {
    // //   console.log(obj);
    // //   dispatch(createBlog(obj));
    // //   //  alert("ok");
    // }
  };

  const onSubmit1 = (e) => {
    e.preventDefault();
    let obj = {
      ...state1,
    };
    dispatch(authuser(obj));
  };
  let success = useSelector((state) => state.Auth);
  console.log("success");
  console.log(success);
  if (success.loginConfirm) {
    navigate("/order");
  }
  useEffect(() => {
    if (success.SignupMsg) {
      toast.success("User Added Successfully");
    }
  }, [success]);

  let LoginMsg = useSelector((state) => state.Auth);
  console.log("Loginmsg");
  console.log(LoginMsg.LoginMsg);
  console.log(LoginMsg);

  return (
    <Box mt={5} mb={10}>
      <Container>
        <Grid container spacing={5}>
          {/* ------------------Sign in side-------------- */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography fontSize={"18px"} fontWeight="800" color="#23262f">
                Registered Customers
              </Typography>
              <Typography fontSize={"16px"} color="#23262f" mt={1}>
                If you have an account with us, please login in.
              </Typography>

              <Box mt={3}>
                <Typography
                  fontSize="14px"
                  color="#23262f"
                  fontWeight="500"
                  mb={0.5}
                >
                  Email
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    borderRadius: "4px",

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                    },
                    input: {
                      color: "#23262f",
                      fontSize: "14px",
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#23262f",
                      },
                    },
                    background: "transparent",
                  }}
                  // id="standard-name"
                  type="email"
                  name="email"
                  onChange={onChangeSignIN}
                  placeholder={"Email address"}
                  size="small"
                />
              </Box>

              <Box mt={3} mb={3}>
                <Typography
                  fontSize="14px"
                  color="#23262f"
                  fontWeight="500"
                  mb={0.5}
                >
                  Password
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    borderRadius: "4px",

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                    },
                    input: {
                      color: "#23262f",
                      fontSize: "14px",
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#23262f",
                      },
                    },
                    background: "transparent",
                  }}
                  // id="standard-name"
                  type="password"
                  name="password"
                  onChange={onChangeSignIN}
                  placeholder={"Password"}
                  size="small"
                />
              </Box>

              <StyledButton onClick={onSubmit1}>Sign in</StyledButton>
            </Box>
          </Grid>
          {/* //////////////////////////////////////////////////////// */}
          <Grid item xs={12} md={6}>
            {/* ------------------Sign up side--------------- */}
            <Box>
              <Typography fontSize={"18px"} fontWeight="800" color="#23262f">
                Create Account
              </Typography>
              <Typography fontSize={"16px"} color="#23262f" mt={1}>
                If you don’t have an account, register now!
              </Typography>

              <Box mt={3}>
                <Typography
                  fontSize="14px"
                  color="#23262f"
                  fontWeight="500"
                  mb={0.5}
                >
                  Full Name
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    borderRadius: "4px",

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                    },
                    input: {
                      color: "#23262f",
                      fontSize: "14px",
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#23262f",
                      },
                    },
                    background: "transparent",
                  }}
                  // id="standard-name"
                  type="text"
                  name="username"
                  onChange={onChangeHandler}
                  placeholder={"Name"}
                  size="small"
                />
              </Box>

              <Box mt={3}>
                <Typography
                  fontSize="14px"
                  color="#23262f"
                  fontWeight="500"
                  mb={0.5}
                >
                  Email Address
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    borderRadius: "4px",

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                    },
                    input: {
                      color: "#23262f",
                      fontSize: "14px",
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#23262f",
                      },
                    },
                    background: "transparent",
                  }}
                  // id="standard-name"
                  type="email"
                  name="registerEmail"
                  onChange={onChangeHandler}
                  placeholder={"Email address"}
                  size="small"
                />
              </Box>

              <Box mt={3}>
                <Typography
                  fontSize="14px"
                  color="#23262f"
                  fontWeight="500"
                  mb={0.5}
                >
                  Password
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    borderRadius: "4px",

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                    },
                    input: {
                      color: "#23262f",
                      fontSize: "14px",
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#23262f",
                      },
                    },
                    background: "transparent",
                  }}
                  // id="standard-name"
                  type="password"
                  name="passwordRegister"
                  onChange={onChangeHandler}
                  placeholder={"Password"}
                  size="small"
                />
              </Box>

              <Box mt={3} mb={3}>
                <Typography
                  fontSize="14px"
                  color="#23262f"
                  fontWeight="500"
                  mb={0.5}
                >
                  Confirm Password
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    borderRadius: "4px",

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#d7d7d7",
                        borderRadius: "4px",
                      },
                    },
                    input: {
                      color: "#23262f",
                      fontSize: "14px",
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#23262f",
                      },
                    },
                    background: "transparent",
                  }}
                  // id="standard-name"
                  type="password"
                  name="confrmPassword"
                  onChange={onChangeHandler}
                  placeholder={"Confirm password"}
                  size="small"
                />
              </Box>

              <StyledButton onClick={onSubmit}>Register</StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Register;
