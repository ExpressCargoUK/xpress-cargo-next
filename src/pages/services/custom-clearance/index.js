import React from "react";
import isEqual from "react-fast-compare";
import Banner from "@/common/Banner";
import Faq from "@/components/CustomClearance/Faq";
import Head from "next/head";

const CustomClearance = () => {
  return (
    <>
      <Head>
        <title>
          Customs Clearance UK - Express Cargo - Customs Clearance Service
        </title>
        <meta
          name="description"
          content="At Express Cargo, we provide fast customs clearance of shipments arriving at all Ports and Airports nationwide. Book us for customs clearance service in UK."
        />
      </Head>
      <Banner
        title="Customs Clearance"
        subTitle="Express Cargo UK Ltd provides a comprehensive customs clearance service for import shipments arriving at all UK ports and airports."
      />
      <Faq />
      {/* <Contact /> */}
    </>
  );
};

export default React.memo(CustomClearance, isEqual);
