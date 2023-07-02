import VideoPlayer from "@/common/VideoPlayer/VideoPlayer"
import PackageYourItemsComponents from "@/components/PackageYourItems/PackageYourItems"
import { NextSeo } from "next-seo"

const PackageYourItems = () => {
  return (
    <>
      <NextSeo
        title="How to Package Parcel | Parcel Packaging | How to Wrap a Parcel"
        description="Read this informative guide on how to package a parcel. Know how to wrap a parcel and other important things to remember while packing of goods."
      />

      <VideoPlayer url="https://youtu.be/XZ12FTLQYHw" />
      <PackageYourItemsComponents />
    </>
  )
}

export default PackageYourItems
