import VideoPlayer from "@/common/VideoPlayer/VideoPlayer"
import WeightAndDimensionComponent from "@/components/WeightAndDimension/WeightAndDimension"
import { NextSeo } from "next-seo"

const WeightAndDimension = () => {
  return (
    <>
      <NextSeo
        title="Parcel Weight and Dimensions Guide | Parcel Weighing Scales"
        description="At Express Cargo, we have mentioned parcel weight and dimensions guide for our customers on how to accurately measure a parcel using parcel weighing scales."
        canonical="https://expresscargouk.co.uk/help-tracking/weight-and-dimensions-guidance"
        openGraph={{
          url: "https://expresscargouk.co.uk/help-tracking/weight-and-dimensions-guidance",
        }}
      />

      <VideoPlayer url="https://youtu.be/2q2rD_bzqgE" />
      <WeightAndDimensionComponent />
    </>
  )
}

export default WeightAndDimension
