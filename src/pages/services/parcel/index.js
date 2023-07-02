import Banner from "@/common/Banner"
import Parcels from "@/components/Parcels/Parcels"
import { NextSeo } from "next-seo"

const ParcelPage = () => {
  return (
    <>
      <NextSeo
        title="Parcel Delivery | Parcel Shipping | Send Parcels | DPD Delivery"
        description="With Express Cargo, you can send your parcels worldwide using our fast, secure and door to door service parcel shipping and delivery services. Get a quote today!"
      />

      <div>
        <Banner
          title="Parcel"
          subTitle="The most professional and worry-free international moving experience"
          video="/assets/videos/parcel_compressed.mp4"
        />
        <Parcels />
      </div>
    </>
  )
}

export default ParcelPage
