import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "./sea-freight.module.scss";
import Link from "next/link";

const SeaFreight = () => {
  const [service, setService] = useState("");

  const handleService = (e) => setService(e.target.value);

  return (
    <Box className={styles["air-freight__wrapper"]}>
      <Container>
        <Box className={styles.content__wrapper}>
          <Box className={styles.section__head}>
            <Typography className={styles.section__heading} variant="h5">
              Sea Freight Shipment
            </Typography>
            <Typography>Ship more than 20kg</Typography>
          </Box>

          <Box className={styles.form} component="form">
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
                    Phone*
                  </Typography>
                  <TextField placeholder="Enter Phone Number" fullWidth />
                </Box>
              </Box>
            </Box>

            <Box className={styles.select__group}>
              <Box className={styles.single__select}>
                <Typography>Service Required*</Typography>
                <FormControl className={styles.select} fullWidth>
                  <Select
                    value={service}
                    onChange={handleService}
                    displayEmpty
                    sx={{ color: "#fff", height: "40px" }}
                  >
                    <MenuItem className={styles.list__item} value="" disabled>
                      <em>Select Service</em>
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={10}>
                      FCL (Full Container Load)
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={20}>
                      LCL (Less Container Load)
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={30}>
                      RORF (Roll On/Roll Off)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box className={styles.single__select}>
                <Typography>Container*</Typography>
                <FormControl className={styles.select} fullWidth>
                  <Select
                    value={service}
                    onChange={handleService}
                    displayEmpty
                    sx={{ color: "#fff", height: "40px" }}
                  >
                    <MenuItem className={styles.list__item} value="" disabled>
                      <em>Select Container Type</em>
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={10}>
                      20ft Dry
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={20}>
                      40ft Dry
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={30}>
                      HC High Cube
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={30}>
                      Refrigerator
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={30}>
                      20ft Open Box
                    </MenuItem>
                    <MenuItem className={styles.list__item} value={30}>
                      Barrel Container
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Typography sx={{ mt: 3 }}>
              *By filling in this information you agree with your Privacy Policy
              and our Terms of Service. You have Data Protection Rights
              accordion to EU regulations.{" "}
              <Link href="/">Check our Privacy Policy for details.</Link>
            </Typography>

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

export default SeaFreight;
