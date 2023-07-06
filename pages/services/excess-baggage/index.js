import Banner from "@/common/Banner"
import ExpressBaggage from "@/components/ExpressBaggage/ExpressBaggage"
import { NextSeo } from "next-seo"

const ExpressBaggagePage = () => {
  return (
    <>
      <NextSeo
        title="Excess Baggage | Courier Services UK"
        description="We offer air freight and door to door excess baggage services to ship your belongings. Check out our shipping rates to Saudi Arabia, Qatar, Bahrain, UAE, etc."
        canonical="https://expresscargouk.co.uk/services/excess-baggage"
        openGraph={{
          url: "https://expresscargouk.co.uk/services/excess-baggage",
        }}
      />

      <Banner
        title="Excess Baggage"
        subTitle="The most professional and worry-free international moving experience"
        video="/assets/videos/excess_baggage_compressed.mp4"
      />

      <ExpressBaggage />
    </>
  )
}

export default ExpressBaggagePage
