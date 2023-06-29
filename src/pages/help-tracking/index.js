import React from "react";
import bg from "@/assets/genx_services_road_2000pxW-2000x760.jpg";
import HelpTracking from "@/components/HelpTracking/HelpTracking";
import ServicesTopBanner from "@/components/ServicesTopBanner";
import Head from "next/head";

const HelpAndTracking = () => {
  return (
    <>
      <Head>
        <title>
          Freight Tracking - AWB Tracking - Cargo Tracking - Express Cargo
        </title>
        <meta
          name="description"
          content="Check out our freight tracking option for an easy cargo tracking. USE our AWB tracking or commodity code finder tool to enquire about your goods."
        />
      </Head>
      <div>
        <ServicesTopBanner
          TitleBeforeBreak="Help And Tracking"
          // TitleAfterBreak="Freight Services"
          backgroundImg={bg.src}
          descriptions={["The concept of road freight is straightforward."]}
        />

        <HelpTracking />
      </div>
    </>
  );
};

export default HelpAndTracking;
