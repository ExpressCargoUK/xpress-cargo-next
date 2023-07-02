import { Box, Container, Typography } from "@mui/material"
import React from "react"
// import Accordion from "../../common/Accordion";
// import { parcelPackageData2 } from "../../data";
import styles from "./CustomsSecurityInformation.module.scss"

const CustomsSecurityInformation = () => {
  return (
    <div className={styles.content__wrapper}>
      <Container>
        <div className={styles.content}>
          {" "}
          <br />
          <Typography className={styles.title} variant="h5">
            Importing personal effects to the UK
          </Typography>
          <br />
          <Typography>
            Shippers are required to make an application to HMRC prior to
            importing household goods and personal effects to the UK as a
            Transfer of Residence (ToR), in order to claim VAT and duty relief
            for importing personal belongings.
          </Typography>
          <br />
          <Typography>
            The shipper must complete and sign the application form and provide
            any supporting documentation.
          </Typography>
          <br />
          <Typography>
            The application must be made prior to shipping any consignments to
            the UK. If the applicant is successful in obtaining Transfer of
            Residence relief, the applicant will then be awarded unique
            declaration information in the form of an authorisation number,
            which can be included on the customs invoice (packing list).
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            Export preference
          </Typography>
          <br />
          <Typography>
            Exporters may be entitled to claim a preferential tariff on the
            import of certain goods. Please see the HMRC website for more
            information.
          </Typography>
          <br />
          <Typography>Export licenses for controlled goods</Typography>
          <br />
          <Typography>
            For some controlled goods, an export license is required. This
            depends on the nature of the goods, the destination, and the end use
            - for example, military items or items that could be used for
            military purposes are likely to be controlled (if they aren&apos;t
            prohibited by carriers anyway).
          </Typography>
          <br />
          <Typography>
            The license requirement may also depend on whether the origin of
            your shipment is Great Britain or Northern Ireland.
          </Typography>
          <br />
          <Typography>
            You can apply for different types of license using SPIRE, the UK
            government&apos;s licensing system.
          </Typography>
          <br />
          <Typography>
            Licenses such as OGELs (general export licenses) are reusable
            licenses for exporters who regularly send certain types of item.
            Others, such as OIELs or SIELS (individual export licenses), are
            valid for fixed periods to named destinations.
          </Typography>
          <br />
          <Typography>
            Please refer to GOV.UK for more information, including a full list
            of license types.
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            Additional Information
          </Typography>
          <br />
          <Typography>
            HMRC:
            <a href="https://www.gov.uk/topic/business-tax/import-export">
              Guide to importing and exporting
            </a>
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            What is customs clearance?
          </Typography>
          <br />
          <Typography>
            Customs clearance is the border check made by the government of all
            goods entering a country. Issues with customs can lead to delays,
            charges and additional paperwork, so you will need to be aware of
            your destination country’s rules and regulations when sending a
            parcel internationally.
          </Typography>
          <br />
          <Typography>
            Customs clearance is required for all international shipments,
            <b>including shipments between the UK and the EU</b>. Please see
            <Box className={styles.link} component="a" href="#" target="_blank">
              our Brexit page
            </Box>
            for more information.
          </Typography>
          <br />
          <Typography>
            This includes special and overseas territories linked to EU member
            states, such as the Channel Islands, Canary Islands, and Falkland
            Islands.
          </Typography>
          <br />
          <Typography>
            <b>
              Courier and freight forwarding companies have absolutely no
              control over customs clearance.
            </b>
            As the shipper, it is your responsibility to ensure that you abide
            by the customs rules of your destination country.
          </Typography>
          <br />
          <Typography>
            All shipments are subject to security screening, regardless of
            destination. Shipments will be X-rayed and their contents inspected
            to ensure that they are safe for transit.
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            What happens if my parcel or cargo is held by customs?
          </Typography>
          <br />
          <Typography>
            Your items may be held by customs if they are subject to customs
            duties and taxes, or if they are prohibited or restricted.
          </Typography>
          <br />
          <Typography>
            Import duties and taxes—including administrative fees—may be payable
            by the receiver depending on the commodity and value of the goods.
            In some (but not all) countries, personal effects are exempt from
            these charges.
          </Typography>
          <br />
          <Typography>
            Failure by the receiver to pay customs charges will result in the
            return or destruction of the shipment. Any charges applied as a
            result of this will be billed to Customer
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            What are my responsibilities as a shipper?
          </Typography>
          <br />
          <Typography>As the shipper, you must:</Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            Ensure that you send no prohibited or restricted items:
          </Typography>
          <br />
          <Typography>
            For example, some governments restrict certain foodstuffs from
            entering their country. Please view our list of dangerous and
            hazardous items that are universally prohibited.
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            Ensure that you have all of the necessary documentation:
          </Typography>
          <br />
          <Typography>
            All international shipments require a Packing List, also known as a
            Customs Invoice, which details the contents of your consignment. We
            will generate one of these for you, or if you are a business you can
            use your own. See our Packing List guide. (Until 31st December 2020,
            a Packing List / Customs Invoice is not required for shipments
            between the UK and the EU.)
          </Typography>
          <Typography>
            Certain countries may require additional documentation depending on
            what you are sending..
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            Explain to the receiver their liability for import duties, taxes and
            charges.
          </Typography>
          <br />
          <Typography variant="h5" className={styles.title}>
            Where can I find information about customs?
          </Typography>
          <br />
          <Typography>
            Rules and regulations can vary widely, which means it is not always
            feasible for us to provide comprehensive and up-to-date customs
            information. For full customs information, you can usually refer to
            a country&apos;s government website, or contact them directly.
          </Typography>
          <br />
          <Typography>
            Economic Operator Registration and Identification (EORI)
          </Typography>
          <br />
          <Typography>
            The EORI Number is a way of improving security and speeding up
            customs clearance for goods entering and leaving the UK and the
            European Union.
          </Typography>
          <br />
          <Typography>
            All UK companies that ship goods internationally should have an EORI
            number. Businesses need to make sure they have registered a
            UK-specific EORI number starting with the letters GB (or XI for
            Northern Ireland). You can
            <a href="https://www.gov.uk/eori" style={{ marginLeft: "6px" }}>
              register online
            </a>{" "}
            .
          </Typography>
          <br />
          <Typography>
            The EORI number for most UK companies takes the following format: GB
            (or XI), followed by your nine digit VAT number, and ending with a
            three digit 000 suffix. For example: GB123456789000.
          </Typography>
          <a href="https://www.tax.service.gov.uk/check-eori-number">
            Launch EORI Number Validator
          </a>
          <br />
          <br />
          <Typography>
            You will need a separate EU EORI number for any import or export
            declarations made within EU countries. For the EU number, you can
            make your application to whichever member state you deal with first.
            Check to see if your EU EORI number is valid by entering it into the
            <a
              href="https://ec.europa.eu/taxation_customs/dds2/eos/eori_validation.jsp?Lang=en"
              style={{ marginLeft: "6px" }}
            >
              EORI Number Validator.
            </a>
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            Commodity Codes
          </Typography>
          <br />
          <Typography>
            Commodity codes are used to inform customs of the precise contents
            of your shipment, alongside descriptions of individual items. E.g.
            4202321000 and &quot;50 x plastic mobile phone cases&quot;.
          </Typography>
          <br />
          <Typography>
            From 1st January 2021, they will be required for all shipments to
            and from the UK. Previously they were not needed when shipping to
            and from EU countries, but this is set to change. Please see our
            Brexit page for more information.
          </Typography>
          <br />
          <Typography>
            While commodity codes are generally only required for commercial
            shipments, we advise that you should always provide descriptions of
            goods to ensure a smooth delivery.
          </Typography>
          <br />
          <Typography>
            You can use our Commodity Code Finder to search for commodity codes.
            We advise doing this ahead of your booking as it can take some time.
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default CustomsSecurityInformation
