import { Container, Box, Typography } from "@mui/material";
import Divider from "../../../common/Divider";
import styles from "./styles.module.scss";

const ServiceDetails = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Container>
        <Box className={styles.__content__wrapper}>
          <Divider />
          <Typography component="h1" variant="h1" className={styles.title}>
            <span>Road Freight Service</span>

            <span className={styles.svgWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 200">
                <path d="M250,199.65a34.19,34.19,0,1,1,34.2-34.19A34.23,34.23,0,0,1,250,199.65Zm0-57.6a23.41,23.41,0,1,0,23.41,23.41A23.43,23.43,0,0,0,250,142.05Z"></path>
                <path d="M241.11,165.46A8.87,8.87,0,1,0,250,156.6,8.86,8.86,0,0,0,241.11,165.46Z"></path>
                <path d="M51.57,199.65a34.19,34.19,0,1,1,34.19-34.19A34.23,34.23,0,0,1,51.57,199.65Zm0-57.6A23.41,23.41,0,1,0,75,165.46,23.43,23.43,0,0,0,51.57,142.05Z"></path>
                <path d="M42.71,165.46a8.86,8.86,0,1,0,8.86-8.86A8.86,8.86,0,0,0,42.71,165.46Z"></path>
                <path d="M188,199.65a34.19,34.19,0,1,1,34.19-34.19A34.23,34.23,0,0,1,188,199.65Zm0-57.6a23.41,23.41,0,1,0,23.4,23.41A23.43,23.43,0,0,0,188,142.05Z"></path>
                <path d="M179.1,165.46A8.86,8.86,0,1,0,188,156.6,8.86,8.86,0,0,0,179.1,165.46Z"></path>
                <path d="M163.07,153.72H77a5.4,5.4,0,1,1,0-10.79h86.09a5.4,5.4,0,0,1,0,10.79Z"></path>
                <path d="M26.87,153.72H15.09C7.32,153.72,1,148,1,140.87V121a12.17,12.17,0,0,1,.23-2.32,58.59,58.59,0,0,1,58.1-53.29h4.53V39.88A18.65,18.65,0,0,1,82.49,21.25h44.77a5.4,5.4,0,1,1,0,10.79H82.49a7.85,7.85,0,0,0-7.84,7.84V70.76a5.39,5.39,0,0,1-5.4,5.39H59.33A47.76,47.76,0,0,0,12,119.88a4.85,4.85,0,0,1-.13.85,1.13,1.13,0,0,0,0,.25v19.89c0,1,1.41,2.06,3.3,2.06H26.87a5.4,5.4,0,0,1,0,10.79Z"></path>
                <path d="M296.91,153.72l-17.78-.05a5.4,5.4,0,0,1,0-10.79h0l17.76.05c1.15,0,3.29-2.6,3.29-6.85V17.76c0-4.25-2.14-6.85-3.3-6.85h-160c-1.16,0-3.3,2.6-3.3,6.85l.72,130.17a5.39,5.39,0,0,1-5.36,5.43h0a5.39,5.39,0,0,1-5.39-5.37l-.73-130.2C122.78,7.87,129,.13,136.87.13h160C304.81.13,311,7.87,311,17.76V136.08C311,146,304.81,153.72,296.91,153.72Z"></path>
                <path d="M113,76.88H84.68a5.39,5.39,0,0,1-5.39-5.39V50.28A15.39,15.39,0,0,1,94.66,34.91H113a5.39,5.39,0,0,1,5.4,5.39V71.49A5.39,5.39,0,0,1,113,76.88ZM90.08,66.09h17.48V45.7H94.66a4.58,4.58,0,0,0-4.58,4.58Z"></path>
              </svg>
            </span>
          </Typography>

          <Box
            sx={{
              paddingBottom: "2rem",
            }}
          >
            <Typography component="p" className={styles.paragraph}>
              But the execution often requires the ingenuity of a road freight
              services provider. UK-based businesses that move their products
              domestically should be able to make the most of{" "}
              <a
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                road freight
              </a>{" "}
              transport services.
            </Typography>
            <Typography component="p" className={styles.paragraph}>
              That’s where the Express Cargo team comes in. We’re here to listen
              to your challenges and provide innovative solutions with our road
              freight services.
            </Typography>
            <Typography component="p" className={styles.paragraph}>
              Over the years, freight transport has diversified, but 80% of all
              domestic cargo is still moved by road.
            </Typography>
            <Typography component="p" className={styles.paragraph}>
              If you want to ensure your business thrives, you might want to
              consider professional shipping companies in UK like Express Cargo.
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceDetails;
