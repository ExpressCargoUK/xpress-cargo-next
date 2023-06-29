import { Container, Grid, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import React from "react";
import styles from "./Parcels.module.scss";

const logos = [
  "/assets/images/parcel/dpduk.png",
  "/assets/images/parcel/evri.png",
  "/assets/images/parcel/United_Parcel_Service.png",
  "/assets/images/parcel/DHL-Logo.png",
  "/assets/images/parcel/fedex.png",
  "/assets/images/parcel/dpduk.png",
  "/assets/images/parcel/evri.png",
  "/assets/images/parcel/United_Parcel_Service.png",
  "/assets/images/parcel/DHL-Logo.png",
  "/assets/images/parcel/fedex.png",
  "/assets/images/parcel/dpduk.png",
  "/assets/images/parcel/evri.png",
  "/assets/images/parcel/United_Parcel_Service.png",
  "/assets/images/parcel/DHL-Logo.png",
  "/assets/images/parcel/fedex.png",
  "/assets/images/parcel/dpduk.png",
  "/assets/images/parcel/evri.png",
  "/assets/images/parcel/United_Parcel_Service.png",
  "/assets/images/parcel/DHL-Logo.png",
  "/assets/images/parcel/fedex.png",
];

const Parcels = () => {
  return (
    <div className={styles._wrapper}>
      <div className={styles.logo_wrapper}>
        <Marquee gradient={false}>
          {logos?.map((logo, i) => (
            <img src={logo} alt="" key={i} />
          ))}
        </Marquee>
      </div>
      <Container>
        <div className={styles._provide_wrapper}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item md={10} sm={12} xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                Parcel
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                We understand that, even though your shipment is time sensitive,
                price is still important, which is why we have negotiated
                advantageous terms for our customers with leading courier
                companies.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Regardless of weight, size or contents – documents, heavy weight
                – we deliver your shipment where and when you want it. Worldwide
                shipments at express speed
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Our proactive courier team track your goods from collection,
                keeping you informed every step of the way until delivery.
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Express Cargo offers a wide range of courier services to suit
                your needs:
              </Typography>

              <ul>
                <li>Secure Door-to-Door Delivery</li>
                <li>UK and international delivery</li>
                <li>A wide range of FREE envelopes and boxes in store</li>
                <li>Simple pricing from £7.95</li>
                <li>
                  Send your parcels to more than 220 countries and worldwide
                </li>
                <li>Track your parcel every step of the way online </li>
                <li>Parcel signed for on delivery</li>
              </ul>

              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._description}
              >
                Too get an instant quotation, please click on the get a quote
                button.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Parcels;
