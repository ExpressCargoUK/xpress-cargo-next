import Banner from "@/common/Banner"
import FreightServices from "@/common/FreightServices"
import AirFreightServiceComponent from "@/components/AirFreightService/AirFreightService"
import { airFreightServices } from "@/data"
import { NextSeo } from "next-seo"
import React from "react"
import isEqual from "react-fast-compare"

const SeaFreightService = () => {
  return (
    <>
      <NextSeo
        title="Air Freight Service | Air Cargo Services | Air Freight"
        description="Choose Express Cargo air freight team to ship your valuable goods by air. We offer air cargo services for Saudi Arabia, Kuwait, UAE, Sudan, India and Pakistan."
      />
      <Banner
        title={"Are you interested in shipping your goods by air?"}
        subTitle="Our team at Express Cargo is ready to assist you. Our air freight services are designed to meet the needs of your most time-sensitive shipments."
        video="/assets/videos/air-freight.mp4"
      />
      <FreightServices services={airFreightServices} />
      <AirFreightServiceComponent />
    </>
  )
}

export default React.memo(SeaFreightService, isEqual)
