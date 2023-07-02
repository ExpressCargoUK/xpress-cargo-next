import { Card, Container, Grid, Typography } from "@mui/material"
import React from "react"
import Divider from "../../common/Divider"
import styles from "./OceanFreight.module.scss"
const OceanFreight = () => {
  return (
    <div className={styles._wrapper}>
      <Container>
        <div className={styles._provide_wrapper}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item md={10} sm={12} xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                We provide the fastest and most
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._subtitle}
              >
                frequent sea freight service worldwide from the UK
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Weekly sailings with a transit time of approximately average 21
                days
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Sea freight, also known as ocean freight, is one of the longest
                established forms of transporting goods internationally.
                It&apos;s also one of the most economical. While air freight is
                favoured for time-sensitive shipments, sea freight is still the
                first choice for many businesses and individuals looking for a
                cost-effective solution.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Small businesses and individual customers may not typically
                consider sea freight as a viable option, as it tends to be
                associated with larger companies exporting high volumes of
                commercial cargo. But sea freight services can also be a great
                option for transporting personal effects.
              </Typography>

              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                With our LCL (part container load) service, you don’t need to
                have enough cargo to fill a whole container in order to get a
                beneficial shipping rate.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Why not find out how much you could save by filling in the quote
                form above? Getting a quote is free, with no obligation to
                register or book. A complete sea freight service to meet your
                needs – no shipment is too large or too small. We offer the
                choice of ‘Less than Container Load’ (LCL) or ‘Full Container
                Load’ (FCL) and Roll on/Roll off (RoRo).
              </Typography>

              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                A complete sea freight service to meet your needs – no shipment
                is too large or too small.
              </Typography>

              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                We offer the choice of ‘Less than Container Load’ (LCL) or ‘Full
                Container Load’ (FCL) and Roll on/Roll off (RoRo).
              </Typography>
            </Grid>
            {/* <Grid item md={6} sm={12} xs={12}>
              <img src="/assets/images/sea-shipment.jpg" alt="sea-shipment" />
            </Grid> */}
          </Grid>
        </div>

        <div className={styles.divider_wrapper}>
          <Divider />
        </div>

        <div className={styles._our_services}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={styles._single_card}>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._title}
                >
                  General Dry Container Services
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._description}
                >
                  We provide 20FT and 40FT Standard and High Cube Container
                  boxes for various applications either personal or commercial
                  shipments.
                </Typography>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={styles._single_card}>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._title}
                >
                  Refrigerated Container Services
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._description}
                >
                  These are specialised containers for sending specific cargo
                  that requires temperature control. For example for sending
                  meat, chocolate, medicines. We provide 20FT and 40FT
                  containers.
                </Typography>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={styles._single_card}>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._title}
                >
                  Roll On/Roll Off RoRo Services
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._description}
                >
                  If you need an automobile to be sent by sea then Ro/Ro service
                  is the best for you. These are ships specially designed to
                  transport any car types, trucks, vans and heavy machinery such
                  as crawlers, bull dozer and so on.
                </Typography>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={styles._single_card}>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._title}
                >
                  Container Warehousing Services
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._description}
                >
                  If you are buying goods and would like later to send by
                  container then look no further. We have a great warehouse
                  facility that enables you to rent a space the size of a
                  standard container 20FT. This space will give you an
                  indication how much you can fill in a standard container. We
                  can also arrange a 40FT container space if required. Contact
                  our staff for further details.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={styles.divider_wrapper}>
          <Divider />
        </div>

        <div className={styles._provide_wrapper}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item md={10} sm={12} xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                Car Shipping Service
              </Typography>

              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                We provide reliable and professional car shipping services from
                many ports throughout the UK. We are a highly regarded
                international car shipping company that specialises in
                delivering vehicles safely throughout the world. We offer roll
                on/roll off services as well as container shipping to allow our
                customers to safely ship their vehicles abroad. For safer car
                shipping services both to and from the UK, we offer first-class
                service at affordable prices.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Whether you need to ship standard container loads, oversized
                commodities or other cargo, Express Cargo&apos;s Sea freight
                solutions have what you need:
              </Typography>

              <ul>
                <li>Ocean import and export services</li>
                <li>Foreign banking support</li>
                <li>Letters of credit development</li>
                <li>Certificates of origin </li>
                <li>Direct filing via the Automated Export System</li>
                <li>
                  Full-container-load (FCL) and less than container load (LCL)
                  options
                </li>
                <li>Container reefer service</li>
                <li>Supplier consolidation</li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default OceanFreight
