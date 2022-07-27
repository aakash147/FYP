import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { useSelector, useDispatch } from "react-redux";

import { customerOrder } from "./../redux/actions/authuser";
import { myMail } from "./Hooks/useAuth";

function Order() {
  let dispatch = useDispatch();

  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  console.log("items", items);

  const [order, setOrder] = useState({
    fullname: "",
    address: "",
    phone: "",
  });

  const onChangePayment = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setOrder({ ...order, [e.target.name]: val });
    } else {
      setOrder({ ...order, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    let email = myMail();
    e.preventDefault();
    let obj = {
      ...order,
      ...items,
      cartTotal,
      email,
    };

    dispatch(customerOrder(obj));
    emptyCart();
  };

  return (
    <Box py={10}>
      <Container maxWidth="sm">
        <Box
          fontSize={{ xs: "35px", md: "48px" }}
          fontWeight="700"
          color="#D01345"
          textAlign="center"
          mb={10}
        >
          Order your product
        </Box>

        <Box>
          <Typography fontSize="14px" color="#23262f" fontWeight="500" mb={0.5}>
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
            name="fullname"
            onChange={onChangePayment}
            placeholder={"Enter full name"}
            size="small"
          />
        </Box>
        <Box mt={3}>
          <Typography fontSize="14px" color="#23262f" fontWeight="500" mb={0.5}>
            Address
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
            // // id="standard-name"
            type="text"
            name="address"
            onChange={onChangePayment}
            placeholder={"Delivery address"}
            size="small"
          />
        </Box>

        <Box mt={3}>
          <Typography fontSize="14px" color="#23262f" fontWeight="500" mb={0.5}>
            Mobile
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
            type="number"
            name="phone"
            onChange={onChangePayment}
            placeholder={"Active mobile number"}
            size="small"
          />
        </Box>

        <Box mt={5} textAlign="center">
          <Button
            disableRipple={true}
            onClick={onSubmit}
            sx={{
              color: "#ffffff",
              background: "#D01345",
              fontSize: "16px",
              textTransform: "capitalize",
              width: "200px",
              paddingY: "5px",
              "&:hover": {
                background: "#D01345a1",
              },
            }}
          >
            Orders
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Order;
