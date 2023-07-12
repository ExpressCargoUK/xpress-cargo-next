import { Container, Grid, Typography } from "@mui/material"
import Divider from "../../common/Divider"
import styles from "./ShopAndShip.module.scss"

const Shop = () => {
  return (
    <div className={styles._wrapper}>
      <Container>
        <div className={styles._dividers}>
          <Divider />
        </div>
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={12}>
            <div className={styles._content}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                Start shopping online and have all your items delivered to our
                warehouse.
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                Once we receive your items, we will forward them on to your
                country of residence using our fast delivery service.
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                See this website for example we will add our rates later
                <a
                  href="http://www.youbuywesend.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.youbuywesend.com/
                </a>
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._title}
              >
                For more information please contact us first to facilitate your
                requirements.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <div className={styles._image_wrapper}>
              <img src="/assets/images/Shop and Ship.png" alt="shop and ship" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Shop
