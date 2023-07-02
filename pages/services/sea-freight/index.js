import Banner from "@/common/Banner"
import OceanFreight from "@/components/OceanFreight/OceanFreight"
import { NextSeo } from "next-seo"

const OceanFreightPage = () => {
  return (
    <>
      <NextSeo
        title="Sea Freight | Sea Freight Services | Sea Shipping Company | Sea Cargo"
        description="Trust Express Cargo’s expert sea freight forwarders team to transport your goods worldwide from UK. Check out our sea cargo’s affordable containers options available!"
      />

      <Banner
        title="Need Sea Freight Support?"
        subTitle="Expand Your Global Reach with Expert Sea Freight Forwarders Enjoy flexible, cost-effective sea freight solutions, sea shipping options"
        video="/assets/videos/ocean-freight.mp4"
      />
      <OceanFreight />
    </>
  )
}

export default OceanFreightPage
