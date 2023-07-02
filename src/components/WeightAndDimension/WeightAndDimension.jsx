import { Box, Container, Typography } from "@mui/material"
import styles from "./weight-and-dimension.module.scss"

const WeightAndDimensionComponent = () => {
  return (
    <Box className={styles.__wrapper}>
      <Container>
        <div className={styles.content}>
          <Typography className={styles.title} variant="h5">
            Weighing and measuring your parcel
          </Typography>
          <br />
          <Typography>
            Weigh your parcel once it is packaged and sealed. If possible, use
            digital scales for accuracy.
          </Typography>
          <br />
          <Typography>
            You&apos;ll also need to measure the length, width and height of
            your box.
          </Typography>
          <br />
          <img
            src="/assets/images/parcel-weighting.gif"
            alt=""
            style={{ maxWidth: "300px", width: "100%" }}
          />
          <br />
          <Typography>
            For irregularly shaped objects, measure to the furthest point on
            each side.
          </Typography>
          <br />
          <img
            src="/assets/images/parcel-weighting2.gif"
            alt=""
            style={{ maxWidth: "300px", width: "100%" }}
          />
          <br />
          <Typography>
            It&apos;s important that your parcel is weighed and measured as
            accurately as possible. Couriers will weigh and measure your parcel
            after collection. If your parcel is heavier or larger than stated,
            you will be billed for related costs.
          </Typography>
          <br />
          <Typography className={styles.title} variant="h5">
            Record your measurements
          </Typography>
          <br />
          <Typography>
            It&apos;s always a good idea to take a few photos of your sealed
            parcels, next to a tape measure and on the weighing scales. These
            may help in the rare event that the courier disputes your stated
            measurements.
          </Typography>
        </div>
      </Container>
    </Box>
  )
}

export default WeightAndDimensionComponent
