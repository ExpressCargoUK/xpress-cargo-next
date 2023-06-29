import React from "react";
import isEqual from "react-fast-compare";
import Banner from "@/common/Banner";
import ExpressBaggage from "@/components/ExpressBaggage/ExpressBaggage";
import Head from "next/head";

const ExpressBaggagePage = () => {
  return (
    <>
      <Head>
        <title>Excess Baggage - Courier Services UK - Express Cargo</title>
        <meta
          name="description"
          content="We offer air freight and door to door excess baggage services to ship your belongings. Check out our shipping rates to Saudi Arabia, Qatar, Bahrain, UAE, etc."
        />
      </Head>
      <Banner
        title="Excess Baggage"
        subTitle="The most professional and worry-free international moving experience"
        video="/assets/videos/excess_baggage_compressed.mp4"
      />

      <ExpressBaggage />
    </>
  );
};

export default React.memo(ExpressBaggagePage, isEqual);
