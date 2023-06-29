import { Container, Box, Typography, Button } from "@mui/material";
import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Container>
        <Typography className={styles.__title} variant="h3">
          GIVE US A CALL ON 0161 882 0666
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Button className={styles.btn}>BOOK OR GET A QUOTATION</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
