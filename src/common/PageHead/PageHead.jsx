import { Box, Container, Typography } from "@mui/material";
import styles from "./page-head.module.scss";

const PageHead = ({ bgImage, title1, title2, description }) => {
  return (
    <Box
      className={styles.section__bg}
      sx={{ background: `url('${bgImage}')` }}
    >
      <Container>
        <Box className={styles.inner__text}>
          <Typography className={styles.title} variant="h2">
            {title1}
            <br />
            {title2}
          </Typography>
          <Box className={styles.linear} />
          <Typography className={styles.description}>{description}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PageHead;
