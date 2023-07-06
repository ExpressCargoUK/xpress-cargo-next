import { Box, Container, Grid, Typography } from "@mui/material"
import Divider from "../../../common/Divider"
import ServiceCard from "../../../common/ServiceCard"
import { services } from "../../../data"
import styles from "./styles.module.scss"

const Services = ({
  title = "Services We Offer",
  description = "As a logistics & freight company based in the UK, we’ve helped countless clients turn a corner in their business. We’re also there to give you professional advice when necessary unlike other freight companies. With Express Cargo, you get complete freight services to suit individual needs. As international freight forwarders, we provide various options to look for. Here’s what we do best.",
  renderServices = services,
}) => {
  return (
    <Box component="section" className={styles.__wrapper} id="services">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h3" variant="h3" className={styles.title}>
            {title}
          </Typography>

          {description && (
            <Typography component="p" className={styles.para}>
              {description}
            </Typography>
          )}
        </Box>
        <div style={{ height: "50px" }} aria-hidden="true" />

        <Grid container justifyContent="center">
          {renderServices.map((service, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
        <div style={{ height: "50px" }} aria-hidden="true" />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Divider />
        </Box>
      </Container>
    </Box>
  )
}

export default Services
