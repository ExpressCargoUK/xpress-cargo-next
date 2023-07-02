import PageHead from "@/common/PageHead/PageHead"
import ContactUsForm from "@/components/Contact/Contact"
import { NextSeo } from "next-seo"

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Express Cargo UK Ltd | Freight Forwarding Services
        Company"
        description="Feel free to contact Express Cargo UK Ltd for reliable freight forwarding services. Call us at 0161 88 20 666, email at info@ecul.co.uk or submit the contact form."
      />
      <PageHead
        bgImage="/assets/images/contact-bg.jpg"
        title1="Contact Us"
        // title2="Touch"
        description="Call Us or use this form to tell us more about your enquiry"
      />
      <ContactUsForm />
    </>
  )
}

export default Contact
