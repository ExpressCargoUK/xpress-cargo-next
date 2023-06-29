import { Container, Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

import Man from "../../../assets/man.png";
import Lady from "../../../assets/lady.png";

const HeroBanner = () => {
  return (
    <Box
      component="section"
      className={styles.__wrapper}
      sx={{
        backgroundColor: "#FFBA01",
      }}
    >
      <Box
        component="div"
        className={styles.overlay}
        sx={{
          background:
            "linear-gradient(to bottom, rgb(0, 23, 45) 30%, rgba(0, 23, 45, 0) 100%)",
          opacity: "0.3",
          mixBlendMode: "multiply",
        }}
      />

      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <img
          src={Man}
          style={{
            height: "auto",
            objectFit: "contain",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 5,
          }}
          alt="man"
        />
      </Box>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <img
          src={Lady}
          style={{
            height: "auto",
            objectFit: "contain",
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 5,
          }}
          alt="Lady"
        />
      </Box>

      <Container maxWidth="xl" className={styles.__textWrapper}>
        <Box className={styles.innerTextWrapper}>
          <Typography variant="h1" component="h1" className={styles.title}>
            Register now!
          </Typography>

          <Typography
            variant="body"
            component="p"
            className={styles.description}
          >
            for your FREE UK mailing address
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
