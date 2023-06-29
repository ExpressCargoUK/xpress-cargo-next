import { Container, Box, Typography, Grid } from "@mui/material";
import Divider from "../../../common/Divider";
import NewsCard from "../../../common/NewsCard";
import { recentNews } from "../../../data";

import styles from "./styles.module.scss";

const RecentNews = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Container>
        <div style={{ height: "50px" }} aria-hidden="true" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h3" variant="h3" className={styles.title}>
            Recent News
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          {recentNews?.map((news, i) => (
            <Grid items xs={12} md={6} lg={4} key={i}>
              <NewsCard {...news} />
            </Grid>
          ))}
        </Grid>

        <div style={{ height: "50px" }} aria-hidden="true" />

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Divider />
        </Box> */}
      </Container>
    </Box>
  );
};

export default RecentNews;
