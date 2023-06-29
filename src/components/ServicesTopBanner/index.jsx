import { Container, Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

const ServicesTopBanner = ({
  TitleBeforeBreak = "",
  TitleAfterBreak = "",
  descriptions = [],
  backgroundImg = "",
}) => {
  return (
    <Box
      component="section"
      className={styles.__wrapper}
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundColor: "#00172d",
      }}
    >
      <Box
        component="div"
        className={styles.overlay}
        sx={{
          background:
            "linear-gradient(to right, rgb(0, 23, 45) 30%, rgba(0, 23, 45, 0) 100%)",
          opacity: "0.8",
          mixBlendMode: "multiply",
        }}
      />
      <Box
        component="div"
        className={styles.overlay}
        sx={{
          background:
            "linear-gradient(to right, rgb(0, 23, 45) 30%, rgba(0, 23, 45, 0) 100%)",
          opacity: "0.8",
          mixBlendMode: "multiply",
        }}
      />

      <Container className={styles.__textWrapper}>
        <Box className={styles.innerTextWrapper}>
          <Typography variant="h1" component="h1" className={styles.title}>
            {TitleBeforeBreak}
            <br />
            {TitleAfterBreak}
          </Typography>

          <span className={styles.divider} />

          {descriptions.map((desc, i) => (
            <Typography component="p" className={styles.description} key={i}>
              {desc}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesTopBanner;
