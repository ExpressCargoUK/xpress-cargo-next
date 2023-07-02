import Banner from "@/common/Banner"
import CustomsSecurityInformation from "@/components/CustomsSecurityInformation/CustomsSecurityInformation"
import { NextSeo } from "next-seo"

const CustomsSecurityInformationPage = () => {
  return (
    <>
      <NextSeo
        title="Import Export Info | Customs Clearance Information"
        description="For shippers and exporters, here is the customs and security information of formalities before choosing our air freight, sea cargo and road freight services."
      />

      <div>
        <Banner
          title="Customs & Security Information"
          subTitle="We bring a modern touch to the world of freight forwarding, ensuring
            cutting-edge solutions for logistics and transport."
          video="/assets/videos/banner_video.mp4"
        />
        <CustomsSecurityInformation />
      </div>
    </>
  )
}

export default CustomsSecurityInformationPage
