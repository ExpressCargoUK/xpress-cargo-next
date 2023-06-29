// import bg from "@/assets/genx_services_road_2000pxW-2000x760.jpg";
import { roadFreightBenefits } from "@/data";
import Benefits from "@/components/RoadFreight/Benefits";
import ContactUs from "@/components/RoadFreight/ContactUs";
import { Box, Container, Typography } from "@mui/material";
import Divider from "@/common/Divider";
import Banner from "@/common/Banner";
import isEqual from "react-fast-compare";
import React from "react";
import Head from "next/head";

const RoadFreightService = () => {
  return (
    <>
      <Head>
        <title>
          Road Freight Services - Road Freight Transport - Express Cargo
        </title>
        <meta
          name="description"
          content="Express Cargo offers road freight services in all countries across Europe. We handpick UK haulers for providing cutting-edge road freight transport services. "
        />
      </Head>
      <Banner
        title="Road Freight Services"
        subTitle="The concept of road freight is straightforward."
        video="/assets/videos/road_compressed.mp4"
      />
      <Benefits
        data={roadFreightBenefits}
        title="To complement our Air and Sea freight forwarding EMS Cargo also offer comprehensive Road Freight services."
      />

      <Container>
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "50px 0" }}
        >
          <Divider />
        </Box>
        <Box sx={{ margin: "0 auto 100px auto", maxWidth: "900px" }}>
          <Typography
            variant="subtitle1"
            color="inherit"
            components="h6"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "30px",
            }}
          >
            Our haulage service operates both inbound and outbound trailers in
            all countries across Europe, carrying anything from one small parcel
            to large volume cargo.
          </Typography>
          <Typography
            variant="subtitle1"
            color="inherit"
            components="p"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "30px",
              marginTop: "20px",
            }}
          >
            No matter size or weight we can provide road service nationally.
          </Typography>
        </Box>
      </Container>

      <ContactUs />
    </>
  );
};

export default React.memo(RoadFreightService, isEqual);
