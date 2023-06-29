import React from "react";
import isEqual from "react-fast-compare";
import Banner from "@/common/Banner";
import About from "@/components/AboutUs/AboutUs";
import Mission from "@/components/Mission/Mission";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>
          Express Cargo UK LTD - Freight Forwarder Specialist - Import Export
          Company
        </title>
        <meta
          name="description"
          content="Express Cargo, a Manchester, UK based freight forwarder specialist, import and export goods to Saudi Arabia, Kuwait, Qatar, UAE, Nigeria, India, Pakistan, etc."
        />
      </Head>
      <Banner
        title="Express Cargo UK LTD"
        subTitle="We bring a modern touch to the world of freight forwarding, ensuring
            cutting-edge solutions for logistics and transport."
        video="/assets/videos/banner_video.mp4"
      />
      <Mission />
      <About />
    </>
  );
};

export default React.memo(AboutUs, isEqual);
