import { Box, Container, Typography } from "@mui/material"
import styles from "./about-us.module.scss"

const About = () => {
  return (
    <Box component="section" className={styles.content__wrapper}>
      <Box className={styles.about__content}>
        <Container>
          <Box className={styles.content}>
            <Typography className={styles.about__title} variant="h3">
              About US
            </Typography>

            <Box className={styles.about}>
              <Typography>
                We are Express Cargo UK Ltd, a freight forwarder based in
                Manchester UK. We have over 15 year’s experience working as an
                independent freight forwarder specialists.
              </Typography>
              <br />
              <Typography>
                We provide a comprehensive range of transportation service from
                Air, Sea and road. Our mission is to exceed customer
                expectations in the transfer of their goods and documents around
                the world. We deliver value to our customers by providing the
                most reliable and efficient solutions in distribution and
                logistics.
              </Typography>
              <br />
              <Typography>
                Our experience in this industry has allowed us to constantly
                provide reliable air and sea services from the UK to countries
                all over the world.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default About
