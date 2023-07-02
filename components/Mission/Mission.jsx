import { Box, Container, Grid, Typography } from "@mui/material"
import { AiOutlineHeart } from "react-icons/ai"
import { BiTargetLock } from "react-icons/bi"
import { IoCompassOutline } from "react-icons/io5"
import styles from "./mission.module.scss"

const Mission = () => {
  return (
    <Box component="section" className={styles.mission__wrapper}>
      <Container>
        <Grid className={styles.card__container} container spacing={4}>
          <Grid className={styles.card} item xs={12} sm={6} md={4}>
            <IoCompassOutline className={styles.icon} />
            <Typography className={styles.title} variant="h5" gutterBottom>
              Vision
            </Typography>
            <Typography className={styles.description}>
              We want to be the most customer focused global provider of freight
              forwarding and logistics solutions – a trusted, valued and
              respected partner
            </Typography>
          </Grid>

          <Grid className={styles.card} item xs={12} sm={6} md={4}>
            <BiTargetLock className={styles.icon} />
            <Typography className={styles.title} variant="h5" gutterBottom>
              Mission
            </Typography>
            <Typography className={styles.description}>
              Express Cargo are committed to providing dependable, efficient,
              cost-effective, freight and logistics solutions, to importers and
              exporters in the UK and World Wide. We pledge to support, advise
              and guide our customers, so that their commercial and financial
              interests are protected when they trade internationally.
              <br /> <br />
              We pledge to support, advise and guide our customers, so that
              their commercial and financial interests are protected when they
              trade internationally.
            </Typography>
          </Grid>

          <Grid className={styles.card} item xs={12} sm={6} md={4}>
            <AiOutlineHeart className={styles.icon} />
            <Typography className={styles.title} variant="h5" gutterBottom>
              Values
            </Typography>
            <Typography className={styles.description}>
              Our ambition is simple: to provide every customer with the very
              best service; by communicating openly and honestly, anticipating
              problems and delivering the consistent results that build trust
              and create partnerships
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Mission
