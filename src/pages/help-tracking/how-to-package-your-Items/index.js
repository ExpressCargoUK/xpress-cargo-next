import VideoPlayer from "@/common/VideoPlayer/VideoPlayer";
import PackageYourItemsComponents from "@/components/PackageYourItems/PackageYourItems";
import Head from "next/head";

const PackageYourItems = () => {
  return (
    <>
      <Head>
        <title>
          How to Package Parcel - Parcel Packaging - How to Wrap a Parcel
        </title>
        <meta
          name="description"
          content="Read this informative guide on how to package a parcel. Know how to wrap a parcel and other important things to remember while packing of goods."
        />
      </Head>
      <VideoPlayer url="https://youtu.be/XZ12FTLQYHw" />
      <PackageYourItemsComponents />
    </>
  );
};

export default PackageYourItems;
