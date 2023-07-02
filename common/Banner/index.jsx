import { Box, Container, Typography } from "@mui/material"
import styles from "./Banner.module.scss"

const Banner = ({
  title,
  subTitle,
  video,
  descriptions = [],
  fontSize = "",
}) => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <div className={styles.overlay} />
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source
            // src="/assets/videos/banner_video.mp4"
            src={video || "/assets/videos/banner_video.mp4"}
            type="video/mp4"
            data-wf-ignore="true"
          />
        </video>
      </div>

      <Container>
        <Box className={styles.text__Wrapper}>
          <Typography
            component="h1"
            variant="h1"
            style={{
              fontSize,
            }}
            className={styles.Headline}
          >
            {title}
          </Typography>
          <span className={styles.gradenetLineBrake} />

          <p className={styles.paragraph}>{subTitle}</p>

          {descriptions &&
            descriptions.map((desc, i) => (
              <p className={styles.paragraph} key={i}>
                {desc}
              </p>
            ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Banner
