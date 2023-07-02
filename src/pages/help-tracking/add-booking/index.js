import AddBooking from "@/components/AddBooking/AddBooking"
import { NextSeo } from "next-seo"
import React from "react"
import isEqual from "react-fast-compare"

const AddBookingPage = () => {
  return (
    <>
      <NextSeo
        title="Courier Booking | Online Parcel Booking"
        description="Here is your online parcel booking form. Please fill the accurate shipper details, consignee details, reason for export and package type."
      />
      <div style={{ background: "#031224" }}>
        <AddBooking />
      </div>
    </>
  )
}

export default React.memo(AddBookingPage, isEqual)
