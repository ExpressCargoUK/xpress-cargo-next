import { Box, Stack, Typography } from "@mui/material";
import Divider from "../../../common/Divider";
import styles from "./offices.module.scss";

const Offices = () => {
  return (
    <Box className={styles.content__wrapper}>
      <Box className={styles.separator}>
        <Divider />
      </Box>

      <Box className={styles.office__content}>
        <Typography className={styles.office__heading} variant="h3">
          Our Offices
        </Typography>

        <Box className={styles.main__content}>
          <Box className={styles.img__box}>
            <Box
              className={styles.image}
              component="a"
              href="https://goo.gl/maps/dcTGbD5NdrJH4en87"
              target="_blank"
            >
              <img src="/assets/images/map.jpg" alt="Our Office" />
              <Box className={styles.btn} component="span">
                +
              </Box>
            </Box>
          </Box>

          <Box className={styles.office__location}>
            <Typography className={styles.heading} variant="h5">
              Head Office
            </Typography>

            <Typography className={styles.info}>
              Express Cargo UK Ltd
            </Typography>

            <Typography className={styles.info}>
              Unit C 88-90 Chorlton Road
            </Typography>

            <Typography className={styles.info}>Old Trafford</Typography>
            <Typography className={styles.info}>Manchester</Typography>
            <Typography className={styles.info}>M15 4AN</Typography>
            <Typography className={styles.info}>United Kingdom</Typography>
            <br />

            <Typography className={styles.telephone} variant="h6">
              Tel: &nbsp;
              <Box
                className={styles.link}
                component="a"
                href="tel:01618820666"
                target="_blank"
              >
                0161 88 20 666
              </Box>
            </Typography>

            <Typography className={styles.telephone} variant="h6">
              Mob: &nbsp;
              <Box
                className={styles.link}
                component="a"
                href="mob:07875666625"
                target="_blank"
              >
                07875666625
              </Box>
            </Typography>

            <Typography className={styles.telephone} variant="h6">
              Email: &nbsp;
              <Box
                className={styles.link}
                component="a"
                href="mailto:info@ecul.co.uk"
                target="_blank"
              >
                info@ecul.co.uk
              </Box>
            </Typography>
            <br />

            <Box className={styles.opening__info}>
              <Typography variant="h6">Opening Hours:</Typography>

              <Stack direction="row" spacing={6}>
                <Typography>Monday</Typography>
                <Typography>10:00 to 18:00</Typography>
              </Stack>

              <Stack direction="row" spacing={6}>
                <Typography>Tuesday</Typography>
                <Typography>10:00 to 18:00</Typography>
              </Stack>

              <Stack direction="row" spacing={3}>
                <Typography>Wednesday</Typography>
                <Typography>10:00 to 18:00</Typography>
              </Stack>

              <Stack direction="row" spacing={5}>
                <Typography>Thursday</Typography>
                <Typography>10:00 to 18:00</Typography>
              </Stack>

              <Stack direction="row" spacing={8}>
                <Typography>Friday</Typography>
                <Typography>10:00 to 18:00</Typography>
              </Stack>

              <Stack direction="row" spacing={6}>
                <Typography>Saturday</Typography>
                <Typography>Hours or services may differ</Typography>
              </Stack>

              <Stack direction="row" spacing={7}>
                <Typography>Sunday</Typography>
                <Typography>Closed</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Offices;
