import Banner from "@/common/Banner"
import Faq from "@/components/CustomClearance/Faq"
import { NextSeo } from "next-seo"

const CustomClearance = () => {
  return (
    <>
      <NextSeo
        title="Customs Clearance UK | Customs Clearance Service"
        description="At Express Cargo, we provide fast customs clearance of shipments arriving at all Ports and Airports nationwide. Book us for customs clearance service in UK."
        canonical="https://expresscargouk.co.uk/services/custom-clearance"
        openGraph={{
          url: "https://expresscargouk.co.uk/services/custom-clearance",
        }}
      />
      <Banner
        title="Customs Clearance"
        subTitle="Express Cargo UK provides a comprehensive customs clearance service for import shipments arriving at all UK ports and airports."
      />
      <Faq />
      {/* <Contact /> */}
    </>
  )
}

export default CustomClearance
