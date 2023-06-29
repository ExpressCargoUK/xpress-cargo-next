import React from "react";
import Banner from "@/common/Banner";
import Parcels from "@/components/Parcels/Parcels";
import isEqual from "react-fast-compare";
import Head from "next/head";

const ParcelPage = () => {
  return (
    <>
      <Head>
        <title>
          Parcel Delivery - Parcel Shipping - Send Parcels - DPD Delivery
        </title>
        <meta
          name="description"
          content="With Express Cargo, you can send your parcels worldwide using our fast, secure and door to door service parcel shipping and delivery services. Get a quote today!"
        />
      </Head>
      <div>
        <Banner
          title="Parcel"
          subTitle="The most professional and worry-free international moving experience"
          video="/assets/videos/parcel_compressed.mp4"
        />
        <Parcels />
      </div>
    </>
  );
};

export default React.memo(ParcelPage, isEqual);
