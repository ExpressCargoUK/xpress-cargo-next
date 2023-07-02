import FrequentAskedQuestionComponent from "@/components/FrequentAskedQuestion/FrequentAskedQuestion"
import { NextSeo } from "next-seo"

const FrequentAskedQuestion = () => {
  return (
    <>
      <NextSeo
        title="Freight Booking FAQ | Customs Duties Queries | Shipping Labels"
        description="Kindly get some time to read frequently asked questions about air freight booking, sea freight booking, parcel booking, custom queries, shipping labels, etc."
      />
      <FrequentAskedQuestionComponent />
    </>
  )
}

export default FrequentAskedQuestion
