import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import homeBG from "../../images/homeBG.png";
import poloHOME from "../../images/poloHOME.jpg";
import active from "../../images/active.jpg";
import teeHome from "../../images/teeHome.jpg";
// import poloPic from "../../images/poloPic.png";

function Home() {
  const homeCard = [
    {
      picture: `${poloHOME}`,
      text: "POLOS",
    },
    {
      picture: `${active}`,
      text: "ACTIVE WARE",
    },
    {
      picture: `${teeHome}`,
      text: "TEES",
    },
  ];
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   // console.log(className);
    //   return '<span class="' + className + '" >' + "</span>";
    // },
  };

  return (
    <Box>
      <Box
        py={15}
        sx={{
          backgroundImage: `url(${homeBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={pagination}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            reverseDirection: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box py={5} textAlign="center" color="#23262F">
              <Typography
                fontSize={{ xs: "24px", md: "30px" }}
                fontWeight="600"
              >
                Welcome to
              </Typography>
              <Typography
                fontSize={{ xs: "35px", md: "48px" }}
                fontWeight="700"
              >
                Flamingo Soft Dress Room
              </Typography>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box py={5} textAlign="center" color="#23262F">
              <Typography
                fontSize={{ xs: "24px", md: "30px" }}
                fontWeight="600"
              >
                Choose & Try
              </Typography>
              <Typography
                fontSize={{ xs: "35px", md: "48px" }}
                fontWeight="700"
              >
                Your Favourite Dresses
              </Typography>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box py={5} textAlign="center" color="#23262F">
              <Typography
                fontSize={{ xs: "24px", md: "30px" }}
                fontWeight="600"
              >
                Dress Perfection
              </Typography>
              <Typography
                fontSize={{ xs: "35px", md: "48px" }}
                fontWeight="700"
              >
                Perchase with Flamingo
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box textAlign="center" pt={7}>
        <Typography
          fontSize={{ xs: "20px", md: "24px" }}
          fontWeight="600"
          color="#23262F"
        >
          Our Products
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "16px" }}
          color="#23262F"
          mb={5}
        >
          Shop the products from your smart phones and laptops.
        </Typography>

        <Grid container spacing={1}>
          {homeCard.map(({ picture, text }, i) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Box height="100%" position="relative">
                  <img src={picture} alt="products" width="100%" />
                  <Typography
                    color="#fff"
                    fontSize={{ xs: "25px", md: "30px" }}
                    fontWeight="700"
                    sx={{
                      position: "absolute",
                      bottom: "22%",
                      left: i === 1 ? "27%" : "38%",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        py={4}
        textAlign="center"
        color="#23262F"
        fontSize={{ xs: "14px", md: "16px" }}
        fontWeight="600"
      >
        News Letters coming soon...
      </Box>
    </Box>
  );
}
export default Home;
