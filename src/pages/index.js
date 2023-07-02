import Banner from "@/common/Banner"
import ContactUsForm from "@/components/Contact/Contact"
import FreightForwarder from "@/components/Home/FreightForwarder"
import RecentNews from "@/components/Home/RecentNews"
import Services from "@/components/Home/Services"
import WhatWeDo from "@/components/Home/WhatWeDo"
import { NextSeo } from "next-seo"
import React from "react"
import isEqual from "react-fast-compare"

const Home = () => {
  return (
    <>
      <NextSeo
        title="Express Cargo | Freight Forwarding Agency | UK Shipping Company"
        description="Express Cargo is a UK shipping and Freight forwarding agency offering cargo services to Saudi Arabia, Kuwait, Qatar, UAE, Sudan, Nigeria, India and Pakistan."
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
      <RecentNews />
      {/* <Contact /> */}
      <ContactUsForm />
    </>
  )
}

export default React.memo(Home, isEqual)
