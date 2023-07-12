import Banner from "@/common/Banner"
import InternationalRemovals from "@/components/InternationalRemovals/InternationalRemovals"
import { NextSeo } from "next-seo"

const InternationalRemovalsPage = () => {
  return (
    <>
      <NextSeo
        title="International Removals | Furniture Shipping | Furniture Delivery"
        description="At Express Cargo, we are professionals in international removals for furniture shipping to Saudi Arabia, Kuwait, Qatar, UAE, Sudan, Nigeria, India and Pakistan."
        canonical="https://expresscargouk.co.uk/services/international-removals"
        openGraph={{
          url: "https://expresscargouk.co.uk/services/international-removals",
        }}
      />

      <div>
        <Banner
          title="International furniture shipping"
          subTitle="The most professional and worry-free international moving experience"
          video="/assets/videos/banner_video.mp4"
        />
        <InternationalRemovals />
      </div>
    </>
  )
}

export default InternationalRemovalsPage
