import { Box, Container, Typography } from "@mui/material"
import styles from "./section-head.module.scss"

const SectionHead = ({ bgImage, title, description }) => {
  return (
    <Box
      className={styles.content__bg}
      sx={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <Box className={styles.main__content}>
          <Typography className={styles.title} variant="h3">
            {title}
          </Typography>
          <Typography className={styles.description}>{description}</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default SectionHead
