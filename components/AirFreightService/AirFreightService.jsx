import { Box, Container, Typography } from "@mui/material"
import Accordion from "../../common/Accordion"
import Divider from "../../common/Divider"
import styles from "./AirFreightServiceComponent.module.scss"

const data = [
  {
    title: "Why choose Express Cargo air freight team?",
    subTitle:
      "Crafted from a range of competitively priced options, Express Cargo will help you streamline your supply chain and avoid delays and risk. We deliver the following benefits to our customers:",
    description:
      "<ul><li><p>15+ years of air shipping experience</p></li><li><p>Strong relationships with <b>many carriers</b> around the world who prioritise your cargo</p></li><li><p>Deep expertise in <b>dangerous, oversized and time-sensitive cargo</b> requirements</p></li><li><p>Special rates for large volumes</p></li><li><p>A <b>range of service options</b>, from elite <b>same-day delivery</b> to economical consolidation</p></li><li><p><li><p></p></li></p></li></ul>",
  },
  {
    title: "Explore Express Cargo's leading air freight services",
    subTitle:
      "We match your freight to the most cost-effective options available, including:",
    description:
      "<ul><li><p>Airport-to-airport service <br/> <br/> Our air freight services operate from airport to airport. You can either drop the goods at our drop-off depot yourself, or we can arrange to collect them from you at an additional cost. <br/><br/>Once the goods have been shipped to the destination airport, the consignee is responsible for collecting the goods and paying any local handling and clearance charges.</p></li><li><p>Door-to-door service <br/> <br/>We provide domestic and international courier services. We mainly provide door-to-door services such as document and small shipments. This is an express service. Feel free to contact us for a quote.</p></li><li><p>Back to Back Service <br/><br/>Your freight is booked directly with the airline and allocated its own Master Air Waybill. This service is very fast and reliable.</p></li></ul>",
  },
  {
    title:
      "What additional services can Express Cargo provide along with air freight shipments?",
    subTitle:
      "Wherever your shipment is heading, Express Cargo's logistics experience adds reliability and security. With the company-wide knowledge to handle transborder deliveries, warehouse management and more, we provide end-to-end support, including:",
    description:
      "<ul><li><p>Domestic collection and delivery service</p></li> <li><p>Oversized cargo</p></li><li><p>Residential delivery</p></li><li><p>Consolidation</p></li><li><p>Storage and distribution</p></li></ul>",
  },
]

const AirFreightServiceComponent = () => {
  return (
    <Box className={styles.content__wrapper} component="section">
      <Container maxWidth="md">
        <Box className={styles.section__desc}>
          <Typography>
            Over the last years we have established relationships with industry
            partners and we are firmly positioned to negotiate the best possible
            rates on your behalf. Special spot rates may also be available on
            request.
            <br /> <br />
            With air cargo volumes continuing to increase, don&apos;t risk being
            deprived of critical capacity. Partner with Express Cargo&apos;s air
            freight experts and your shipments will fly securely with the
            world&apos;s leading carriers at competitive rates.
          </Typography>
        </Box>
      </Container>

      <Container>
        <Box className={styles.main__content}>
          <Box className={styles.section__head}>
            <Divider />
            <Typography className={styles.section__title} variant="h4">
              Why choose Express Cargo?
            </Typography>
          </Box>

          {data.map((faq, i) => (
            <Box key={i}>
              <Accordion {...faq} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default AirFreightServiceComponent
