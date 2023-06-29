import React from "react";
import isEqual from "react-fast-compare";
import Banner from "@/common/Banner";
import CustomsSecurityInformation from "@/components/CustomsSecurityInformation/CustomsSecurityInformation";
import Head from "next/head";

const CustomsSecurityInformationPage = () => {
  return (
    <>
      <Head>
        <title>
          Import Export Info - Customs Clearance Information - Express Cargo
        </title>
        <meta
          name="description"
          content="For shippers and exporters, here is the customs and security information of formalities before choosing our air freight, sea cargo and road freight services."
        />
      </Head>
      <div>
        <Banner
          title="Customs & Security Information"
          subTitle="We bring a modern touch to the world of freight forwarding, ensuring
            cutting-edge solutions for logistics and transport."
          video="/assets/videos/banner_video.mp4"
        />
        <CustomsSecurityInformation />
      </div>
    </>
  );
};

export default React.memo(CustomsSecurityInformationPage, isEqual);
