import { Box, Typography, Button } from "@mui/material";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

function CardStructure({ pic, title, price, product }) {
  const { addItem } = useCart();

  return (
    <Box
      height="100%"
      textAlign="center"
      sx={{
        border: "1px solid #dcdcdc",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px rgb(0 0 0 / 3%)",
        padding: "7px",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.01)",
          transition: " 0.5s",
          border: "1.5px solid #dcdcdc",
          borderRadius: "7px",
          boxShadow: "2px 2px 9px rgba(24, 0, 0, 0.945)",
        },
      }}
    >
      <img src={pic} alt="item view" width="100%" height="350px" />
      <Typography mt={2} color="#23262F" fontSize={{ xs: "16px", md: "18px" }}>
        {title}
      </Typography>
      <Typography
        color="#23262F"
        fontSize={{ xs: "16px", md: "18px" }}
        fontWeight="800"
        mt={1}
        mb={3}
      >
        $ {price}
      </Typography>
      {/* 
      <Button
        disableRipple
        sx={{
          color: "#D01345",
          background: "transparent",
          fontSize: "16px",
          textTransform: "capitalize",
          border: "1px solid #D01345",
          width: "100%",
          paddingY: "10px",
          "&:hover": {
            background: "transparent",
          },
        }}
      >
        Try it
      </Button> */}
      <Button
        disableRipple
        onClick={() => {
          addItem(product);
          toast.success("Added in Cart, Successfully!", {
            className: "toast-message",
          });
        }}
        sx={{
          color: "#ffffff",
          background: "#D01345",
          fontSize: "16px",
          textTransform: "capitalize",
          width: "100%",
          paddingY: "10px",
          marginTop: "10px",
          "&:hover": {
            background: "#D01345a1",
          },
        }}
      >
        Add to cart
      </Button>
    </Box>
  );
}

export default CardStructure;
