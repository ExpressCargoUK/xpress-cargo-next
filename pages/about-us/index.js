import Banner from "@/common/Banner"
import About from "@/components/AboutUs/AboutUs"
import Mission from "@/components/Mission/Mission"
import { NextSeo } from "next-seo"

const AboutUs = () => {
  return (
    <>
      <NextSeo
        title="About | Freight Forwarder Specialist | Import & Export"
        description="Express Cargo, a Manchester, UK based freight forwarder specialist, import and export goods to Saudi Arabia, Kuwait, Qatar, UAE, Nigeria, India, Pakistan, etc."
        canonical="https://expresscargouk.co.uk/about-us"
        openGraph={{
          url: "https://expresscargouk.co.uk/about-us",
        }}
      />
      <Banner
        title="Express Cargo UK"
        subTitle="We bring a modern touch to the world of freight forwarding, ensuring
            cutting-edge solutions for logistics and transport."
        video="/assets/videos/banner_video.mp4"
      />
      <Mission />
      <About />
    </>
  )
}

export default AboutUs
