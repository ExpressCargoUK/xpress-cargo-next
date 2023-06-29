import React from "react";
import isEqual from "react-fast-compare";
import Banner from "@/common/Banner";
import InternationalRemovals from "@/components/InternationalRemovals/InternationalRemovals";
import Head from "next/head";

const InternationalRemovalsPage = () => {
  return (
    <>
      <Head>
        <title>
          International Removals - Furniture Shipping - Furniture Delivery
        </title>
        <meta
          name="description"
          content="At Express Cargo, we are professionals in international removals for furniture shipping to Saudi Arabia, Kuwait, Qatar, UAE, Sudan, Nigeria, India and Pakistan."
        />
      </Head>
      <div>
        <Banner
          title="International furniture shipping"
          subTitle="The most professional and worry-free international moving experience"
          video="/assets/videos/banner_video.mp4"
        />
        <InternationalRemovals />
      </div>
    </>
  );
};

export default React.memo(InternationalRemovalsPage, isEqual);
