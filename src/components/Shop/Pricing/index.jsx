import { Container, Box, Typography, Grid, Card } from "@mui/material";
import { pricing } from "../../../data";
import styles from "./styles.module.scss";

const Pricing = () => {
  return (
    <Box className={styles.__wrapper}>
      <Container>
        <Box className={styles.description__wrapper}>
          <Typography variant="h2" component="h2" className={styles.title}>
            RATES
          </Typography>

          {/* <Typography variant="body" component="p" className={styles.para}>
            The below prices are based on our express ( airport to airport )
            parcel service. The typical transit time is 3 to 6 days. We will
            deliver your parcel to the nearest international airport in your
            region / city.
          </Typography> */}
        </Box>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {pricing.map(({ title, currency, per30kg, perKg }, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <Card className={styles.card}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.__card_title}
                >
                  {title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.pricing_at_30kg}
                >
                  First 30Kg is {per30kg}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#fff",
                    fontSize: "20px",
                    padding: "20px 0",
                  }}
                >
                  THEN
                </Typography>
                <ul>
                  <li>£</li>
                  <li>{perKg.split(".")[0]}</li>
                  <li>.{perKg.split(".")[1]}</li>
                  <li>per Kg</li>
                </ul>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
