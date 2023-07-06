import Banner from "@/common/Banner"
import ContactUsForm from "@/components/Contact/Contact"
import FreightForwarder from "@/components/Home/FreightForwarder"
import Services from "@/components/Home/Services"
import WhatWeDo from "@/components/Home/WhatWeDo"
import { NextSeo } from "next-seo"

const Home = () => {
  return (
    <>
      <NextSeo
        canonical="https://expresscargouk.co.uk"
        openGraph={{
          url: "https://expresscargouk.co.uk",
        }}
      />
      <Banner
        title="Simple Freight Forwarding"
        subTitle=" We bring a modern touch to the world of freight forwarding, ensuring
            cutting-edge solutions for logistics and transport. Providing our
            clients with end to end visibility with a varied network of
            carriers, ensuring price &amp; service optimisation."
        video="/assets/videos/banner_video.mp4"
      />
      <FreightForwarder />
      <Services />
      <WhatWeDo />
      {/* <RecentNews /> */}
      {/* <Contact /> */}
      <ContactUsForm />
    </>
  )
}

export default Home
