import OurServices from "@/components/Services/OurServices"
import { NextSeo } from "next-seo"

const Services = () => {
  return (
    <>
      <NextSeo
        title="Services"
        description="Express Cargo is a UK-based logistics and freight company that provides complete freight services to suit individual needs. Our professional advice sets us apart from other freight companies."
        canonical="https://expresscargouk.co.uk/services"
        openGraph={{
          url: "https://expresscargouk.co.uk/services",
        }}
      />
      <OurServices />
    </>
  )
}

export default Services
