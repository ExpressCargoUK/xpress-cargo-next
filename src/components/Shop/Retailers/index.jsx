import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { retailers } from "../../../data";
import styles from "./styles.module.scss";

const Retailers = () => {
  return (
    <Box className={styles.__wrapper}>
      <Typography variant="h2" component="h2" className={styles.title}>
        RECOMMENDED RETAILERS
      </Typography>

      <Marquee gradient={false}>
        {retailers.map((retailer, i) => (
          <img src={retailer} className={styles.retailer_img} alt={i} key={i} />
        ))}
      </Marquee>
    </Box>
  );
};

export default Retailers;
