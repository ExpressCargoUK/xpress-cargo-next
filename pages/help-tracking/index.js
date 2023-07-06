import HelpTracking from "@/components/HelpTracking/HelpTracking"
import ServicesTopBanner from "@/components/ServicesTopBanner"
import { NextSeo } from "next-seo"

const HelpAndTracking = () => {
  return (
    <>
      <NextSeo
        title="Freight Tracking | AWB Tracking | Cargo Tracking"
        description="Check out our freight tracking option for an easy cargo tracking. USE our AWB tracking or commodity code finder tool to enquire about your goods."
        canonical="https://expresscargouk.co.uk/help-tracking"
        openGraph={{
          url: "https://expresscargouk.co.uk/help-tracking",
        }}
      />
      <div>
        <ServicesTopBanner
          TitleBeforeBreak="Help And Tracking"
          // TitleAfterBreak="Freight Services"
          backgroundImg="/assets/images/genx_services_road.jpg"
          descriptions={["The concept of road freight is straightforward."]}
        />

        <HelpTracking />
      </div>
    </>
  )
}

export default HelpAndTracking
