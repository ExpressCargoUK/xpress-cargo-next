import Banner from "@/common/Banner"
import Pricing from "@/components/Shop/Pricing"
import Retailers from "@/components/Shop/Retailers"
import { Box, Container, Typography } from "@mui/material"
import { NextSeo } from "next-seo"

// import ShopAndShip from "@/components/Shop/ShopAndShip";
// import HeroBanner from "@/components/Shop/HeroBanner";
// import About from "@/components/Shop/About";
// import Register from "@/components/Shop/Register";

const ShopAndShip = () => {
  return (
    <>
      <NextSeo
        title="Shipping Services | International Shipping | Shipping Company"
        description="Choose our shop and ship option by ordering goods from UK online store to our warehouse and then get it delivered to your residence through international shipping."
      />

      <div>
        <Banner
          title="You can order anything from any U.K. store like Amazon, Ebay, Boots, Next, Or any online retail."
          subTitle="Start shopping online and have all your items delivered to our warehouse."
          video="/assets/videos/shopAndShip.mp4"
          descriptions={[
            "Once we receive your items, we will forward them on to your country of residence using our fast delivery service.",
          ]}
          fontSize="40px"
        />

        <Retailers />
        <Pricing />

        <Container>
          <Box style={{ marginBottom: "100px" }}>
            <Typography
              variant="h6"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              *Note these rates are indicative, please contact us for the latest
              rates
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default ShopAndShip
