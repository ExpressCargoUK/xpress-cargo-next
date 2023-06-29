import VideoPlayer from "@/common/VideoPlayer/VideoPlayer";
import WeightAndDimensionComponent from "@/components/WeightAndDimension/WeightAndDimension";
import Head from "next/head";

const WeightAndDimension = () => {
  return (
    <>
      <Head>
        <title>
          Parcel Weight and Dimensions Guide - Parcel Weighing Scales
        </title>
        <meta
          name="description"
          content="At Express Cargo, we have mentioned parcel weight and dimensions guide for our customers on how to accurately measure a parcel using parcel weighing scales."
        />
      </Head>
      <VideoPlayer url="https://youtu.be/2q2rD_bzqgE" />
      <WeightAndDimensionComponent />
    </>
  );
};

export default WeightAndDimension;
