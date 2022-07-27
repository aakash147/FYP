import { Box, Container, Grid } from "@mui/material";

import data from "../ProductDetail/ProductDetail";
import CardStructure from "../CardStructure";

function Tshirt() {
  return (
    <Box py={10}>
      <Container>
        <Box
          fontSize={{ xs: "35px", md: "48px" }}
          fontWeight="700"
          color="#D01345"
          textAlign="center"
          mb={10}
        >
          Tee Shirts
        </Box>
        <Grid container spacing={3}>
          {data.teesProducts.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <CardStructure
                  pic={item.img}
                  title={item.title}
                  price={item.price}
                  product={item}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Tshirt;
