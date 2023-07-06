import AddBooking from "@/components/AddBooking/AddBooking"
import { NextSeo } from "next-seo"

const AddBookingPage = () => {
  return (
    <>
      <NextSeo
        title="Courier Booking | Online Parcel Booking"
        description="Here is your online parcel booking form. Please fill the accurate shipper details, consignee details, reason for export and package type."
        canonical="https://expresscargouk.co.uk/help-tracking/add-booking"
        openGraph={{
          url: "https://expresscargouk.co.uk/help-tracking/add-booking",
        }}
      />
      <div style={{ background: "#031224" }}>
        <AddBooking />
      </div>
    </>
  )
}

export default AddBookingPage
