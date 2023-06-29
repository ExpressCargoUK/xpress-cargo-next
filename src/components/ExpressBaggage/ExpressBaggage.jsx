import { Container, Grid, Typography } from "@mui/material";
import styles from "./ExpressBaggage.module.scss";

const ExpressBaggage = () => {
  return (
    <div className={styles._wrapper}>
      <Container>
        <div className={styles._provide_wrapper}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item md={10} sm={12} xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                Excess Baggage
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Are you an international student in the UK or someone going home
                for holiday ? Looking for the best option to ship your
                belongings back home? Our air freight and door-to-door courier
                services could save you time and money. Forget about high
                airline charges—get a quote from Express Cargo today and take
                advantage of our hugely discounted prices.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Using our services you could save £100’s on Excess Baggage. Why
                pay Airline Airport Services when you could book with us from
                £1.49 per Kilo.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                We offer special shipping rates to Saudi Arabia, Qatar, Bahrain,
                Kuwait, UAE, Jordan, Oman.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Getting a quote online is simple and free and allows you to
                compare the costs of the different services we provide. Whether
                it’s an express courier service with next day delivery, or an
                economy service for less urgent deliveries, you’ll be able to
                compare all the costs and details of each service available to
                you.
              </Typography>

              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                If you would like to discuss your delivery in more detail or
                have any queries about our services, our Customer Service team
                is more than happy to help. You can reach us either by phone on
                0161 88 20 666 or through our Live Chat facility.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ExpressBaggage;
