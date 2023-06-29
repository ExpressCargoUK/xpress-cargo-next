import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "../../common/Divider";
import styles from "./InternationalRemovals.module.scss";
const InternationalRemovals = () => {
  return (
    <div className={styles._wrapper}>
      <Container>
        <div className={styles._provide_wrapper}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                International furniture shipping
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Do you need services for shipping furniture? If you’re ready to
                move overseas, or maybe you have been living abroad for a while
                and it is time to return home, you might be wondering how to
                ship furniture abroad… That’s where Express Cargo&apos;s specialist
                furniture shipping skills can help.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                As one of the UK&apos;s most reliable, professional, and dedicated
                furniture shipping companies, we have completed European and
                international removals for over 15 years. Our team of furniture
                shippers handles over 1000&apos;s of consignments every year, so your
                items are in safe hands when you choose Express Cargo.
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <img
                src="/assets/images/International furniture shipping.jpg"
                alt="International furniture shipping"
              />
            </Grid>
          </Grid>
        </div>

        <div className={styles.divider_wrapper}>
          <Divider />
        </div>
        <div className={styles._provide_wrapper}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <img
                src="/assets/images/Furniture Shipping Services.jpg"
                alt="Furniture Shipping Services"
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                Items we ship with our Furniture Shipping Services
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Over the past 15 years, we have shipped every possible piece of
                furniture, regardless of size or weight, overseas.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                We offer professional furniture shipping services for all kinds
                of furniture, including fragile and high-value items.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Furniture items we commonly ship abroad are:
              </Typography>

              <ul>
                <li>Beds, mattresses, wardrobes and dressing tables</li>
                <li>Beds, mattresses, wardrobes and dressing tables</li>
                <li>Bunk beds, cots and baby changers</li>
                <li>
                  Book shelves, desks &amp; office chairs, shelving units and
                  chests of drawers
                </li>
                <li>Dining tables, chairs and benches</li>
                <li>
                  Fridges, freezers, ovens, dishwashers and extractor fans
                </li>
                <li>Soft furnishings, textiles, rugs and curtains</li>
                <li>Pictures, frames, art work, lighting and mirrors</li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default InternationalRemovals;
