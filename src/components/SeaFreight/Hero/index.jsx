import { Container, Box, Typography, Grid } from "@mui/material";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Box className={styles.__content}>
        <Container>
          <Grid container>
            <Grid item xs={12} lg={6}></Grid>
            <Grid item xs={12} lg={6}>
              <Typography className={styles.__title} variant="h3">
                Sea FREIGHT
              </Typography>

              <Box className={styles.para}>
                <Typography>
                  We undestand that, even though your shipment is time
                  sensitive, price is still important, which is why we have
                  negotiated advantageous terms for our customers with leading
                  courier companies
                </Typography>
                <br />

                <Typography>
                  Regardless of weight, size or contents-documents, heavy weight
                  - we deliver your shipment where and when you want it.
                </Typography>
                <br />
                <Typography>
                  We offer worldwide shipments at express speed. Our proactive
                  courier team track your goods from collection, keeping you
                  informed every step of the way until delivery.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
