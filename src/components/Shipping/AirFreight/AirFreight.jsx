import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./air-freight.module.scss";
import Link from "next/link";

const AirFreight = () => {
  return (
    <Box className={styles["air-freight__wrapper"]}>
      <Container>
        <Box className={styles.content__wrapper}>
          <Box className={styles.section__head}>
            <Typography className={styles.section__heading} variant="h5">
              Air Freight Shipment
            </Typography>
            <Typography>Ship more than 100kg</Typography>
          </Box>

          <Box className={styles.form} component="form">
            <Box className={styles.input__group}>
              <Box className={styles.single__input}>
                <Typography className={styles.input__title} variant="h6">
                  Departure
                </Typography>
                <Typography className={styles.input__label}>
                  Departure Airport*
                </Typography>
                <TextField placeholder="MANCHESTER (MAN)" fullWidth />
              </Box>

              <Box className={styles.single__input}>
                <Typography className={styles.input__title} variant="h6">
                  Destination
                </Typography>
                <Typography className={styles.input__label}>
                  Destination Airport*
                </Typography>
                <TextField placeholder="Enter City" fullWidth />
              </Box>
            </Box>

            <Box className={styles.shipped}>
              <Box className={styles.single__input}>
                <Typography className={styles.input__title} variant="h6">
                  Items to be shipped
                </Typography>
                <Typography className={styles.input__label}>
                  Commodity Type*
                </Typography>
                <TextField placeholder="General cargo" fullWidth />
              </Box>
            </Box>

            <Box className={styles.shipping__details}>
              <Box className={styles.single__input}>
                <Typography className={styles.input__label}>Qty*</Typography>
                <TextField placeholder="1" fullWidth />
              </Box>
              <Box className={styles.single__input}>
                <Typography className={styles.input__label}>
                  Packaging*
                </Typography>
                <TextField placeholder="Boxed" fullWidth />
              </Box>
              <Box className={styles.single__input}>
                <Typography className={styles.input__label}>
                  Total Weight*
                </Typography>
                <TextField placeholder="KGS" fullWidth />
              </Box>
              <Box className={styles.single__input}>
                <Typography className={styles.input__label}>Length*</Typography>
                <TextField placeholder="CM" fullWidth />
              </Box>
              <Box className={styles.single__input}>
                <Typography className={styles.input__label}>Width*</Typography>
                <TextField placeholder="CM" fullWidth />
              </Box>
              <Box className={styles.single__input}>
                <Typography className={styles.input__label}>Height*</Typography>
                <TextField placeholder="CM" fullWidth />
              </Box>
            </Box>

            <Box className={styles.your__details}>
              <Typography className={styles.input__title} variant="h6">
                Your Details:
              </Typography>

              <Box className={styles.details__input__group}>
                <Box className={styles.single__input}>
                  <Typography className={styles.input__label}>
                    Email*
                  </Typography>
                  <TextField placeholder="Email" fullWidth />
                </Box>

                <Box className={styles.single__input}>
                  <Typography className={styles.input__label}>
                    Company Name*
                  </Typography>
                  <TextField placeholder="Company Name" fullWidth />
                </Box>

                <Box className={styles.single__input}>
                  <Typography className={styles.input__label}>
                    Promo Code*
                  </Typography>
                  <TextField placeholder="Promo Code" fullWidth />
                </Box>
              </Box>

              <Box className={styles.checkbox__group}>
                <Typography>Insurance Required?*</Typography>
                <Box className={styles.checkbox}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#fff",
                          "&.Mui-checked": {
                            color: "#fff",
                          },
                        }}
                      />
                    }
                    label="Yes"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#fff",
                          "&.Mui-checked": {
                            color: "#fff",
                          },
                        }}
                      />
                    }
                    label="No"
                  />
                </Box>
              </Box>

              <Typography>
                *By filling in this information you agree with your Privacy
                Policy and our Terms of Service. You have Data Protection Rights
                accordion to EU regulations.{" "}
                <Link href="/">Check our Privacy Policy for details.</Link>
              </Typography>
            </Box>

            <Box component={"center"}>
              <Button className={styles.submit__btn} variant="contained">
                Get A Quick Quote
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AirFreight;
