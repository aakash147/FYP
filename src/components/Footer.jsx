import { Box, Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const StyleTypo = ({ children }) => {
  return (
    <Typography
      sx={{
        color: "#777E90",
        fontSize: "14px",
        marginLeft: "25px",
        "&:hover": {
          borderBottom: "1px solid #D01345",
        },
      }}
    >
      {children}
    </Typography>
  );
};

function Footer() {
  return (
    <>
      <Box py={2}>
        <Container>
          <Box
            display="flex"
            alignItems={{ xs: "", md: "center" }}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "flex-start", md: "space-between" }}
          >
            <Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
              >
                {/* <img src="./logo.png" alt="" /> */}
                <Typography>
                  <img src="/logo.png" alt="logo" width="150px" />
                </Typography>
                <Typography color="#777E90" fontSize="14px">
                  © 2022 Flamingo
                </Typography>
              </Box>
              <Typography color="#23262F" mt={1} fontSize="14px">
                © FLAMINGO SOFT DRESS CO. All Rights Reserved.
              </Typography>
            </Box>

            <Box mt={{ xs: 4, md: 0 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
                mb={2}
              >
                <TwitterIcon sx={{ marginLeft: "25px", color: "#23262F" }} />
                <InstagramIcon sx={{ marginLeft: "25px", color: "#23262F" }} />
              </Box>
              <Box display="flex">
                <StyleTypo>Contant Us</StyleTypo>
                <StyleTypo>About Us</StyleTypo>
                <StyleTypo>Brand</StyleTypo>
                <StyleTypo>Terms</StyleTypo>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
