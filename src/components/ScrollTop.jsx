import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <KeyboardArrowUpIcon
      
      onClick={goToTop}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: visible ? "inline" : "none",
        backgroundColor: "#D01345",
        borderRadius: "50px",
        color: "#fff",
        cursor: "pointer",
        opacity: 0.6,
        fontSize : '26px',
        "&:hover": {
          opacity: 0.9,
        },
      }}
    />
  );
}

export default ScrollTop;
