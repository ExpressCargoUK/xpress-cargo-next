import React from "react";
import isEqual from "react-fast-compare";
import AddBooking from "@/components/AddBooking/AddBooking";
import Head from "next/head";

const AddBookingPage = () => {
  return (
    <>
      <Head>
        <title>
          Courier Booking - Online Parcel Booking - Express Cargo UK LTD
        </title>
        <meta
          name="description"
          content="Here is your online parcel booking form. Please fill the accurate shipper details, consignee details, reason for export and package type."
        />
      </Head>
      <div style={{ background: "#031224" }}>
        <AddBooking />
      </div>
    </>
  );
};

export default React.memo(AddBookingPage, isEqual);
