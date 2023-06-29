import React from "react";
import isEqual from "react-fast-compare";
import PageHead from "@/common/PageHead/PageHead";
import ContactUsForm from "@/components/Contact/Contact";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>
          Contact Express Cargo UK LTD - Freight Forwarding Services
        </title>
        <meta
          name="description"
          content="Feel free to contact Express Cargo UK Ltd for reliable freight forwarding services. Call us at 0161 88 20 666, email at info@ecul.co.uk or submit the contact form."
        />
      </Head>
      <PageHead
        bgImage="/assets/images/contact-bg.jpg"
        title1="Contact Us"
        // title2="Touch"
        description="Call Us or use this form to tell us more about your enquiry"
      />
      <ContactUsForm />
    </>
  );
};

export default React.memo(Contact, isEqual);
