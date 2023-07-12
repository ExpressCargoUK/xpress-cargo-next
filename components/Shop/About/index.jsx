import { Container, Box, Typography, Button } from "@mui/material"
import styles from "./styles.module.scss"

const About = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Container maxWidth="xl">
        <Box className={styles.__innerWrapper}>
          <Typography variant="h2" component="h2" className={styles.title}>
            We are an international shipping company who can offer you a FREE
            mailing address in the UK.
          </Typography>

          <Typography variant="body" component="p" className={styles.para}>
            Where ever you are in the world, register with us today and you will
            receive a free mailing address in the UK, start shopping online and
            have all your items delivered to your UK mailing address.
          </Typography>

          <Typography variant="body" component="p" className={styles.para}>
            Once we receive your items, we will forward them on to your country
            of residence on our fast delivery service.
          </Typography>

          <Button
            sx={{
              padding: "1rem 2rem",
              fontSize: "20px",
              marginTop: "50px",
              display: "inline-block",
              background: "#440e62",
              color: "#fff",
              borderRadius: "10px",

              "&:hover": {
                background: "#440e62",
                color: "#fff",
              },
            }}
          >
            REGISTER NOW!
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default About
