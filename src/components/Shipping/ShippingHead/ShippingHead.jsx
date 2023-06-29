import { Box, Container, Typography } from "@mui/material";
import styles from "./shipping-head.module.scss";

const ShippingHead = ({ bgImg, title, description }) => {
  return (
    <Box className={styles.bg__image} sx={{ backgroundImage: `url(${bgImg})` }}>
      <Box className={styles.content__wrapper}>
        <Typography className={styles.title} variant="h3">
          <Container maxWidth="sm">{title}</Container>
        </Typography>
        <Container maxWidth="sm">
          <Typography className={styles.description}>
            {description ||
              "We provide a comprehensive range of transportation service form Air, Sea and road. Our mission is to exceed customer expectations in the transfer of their goods and documents around the world. We deliver value to our customers by providing the most reliable and efficient solutions in distribution and logistics."}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ShippingHead;
