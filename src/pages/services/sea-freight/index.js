import React from "react";
import isEqual from "react-fast-compare";
import Banner from "@/common/Banner";
import OceanFreight from "@/components/OceanFreight/OceanFreight";
import Head from "next/head";

const OceanFreightPage = () => {
  return (
    <div>
      <Head>
        <title>
          Sea Freight - Sea Freight Services - Sea Shipping Company - Sea Cargo
        </title>
        <meta
          name="description"
          content="Trust Express Cargo’s expert sea freight forwarders team to transport your goods worldwide from UK. Check out our sea cargo’s affordable containers options available!"
        />
      </Head>
      <Banner
        title="Need Sea Freight Support?"
        subTitle="Expand Your Global Reach with Expert Sea Freight Forwarders Enjoy flexible, cost-effective sea freight solutions, sea shipping options"
        video="/assets/videos/ocean-freight.mp4"
      />
      <OceanFreight />
    </div>
  );
};

export default React.memo(OceanFreightPage, isEqual);
