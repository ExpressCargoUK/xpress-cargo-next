import { Container, Box, Typography, Grid } from "@mui/material";

import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Container>
        <Grid container>
          <Grid
            items
            xs={12}
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          ></Grid>
          <Grid items xs={12} md={6}>
            <Box className={styles.form__wrapper}>
              <Typography component="h2" className={styles.title}>
                Contact Us
              </Typography>
              <Typography component="p" className={styles.subtitle}>
                Use the form to contact us or alternatively call us on
              </Typography>

              <Typography
                component="p"
                className={styles.subtitle}
                style={{
                  color: "#4ce4c6",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                03300 245 121
              </Typography>

              <form></form>
            </Box>
          </Grid>
          <Grid
            items
            xs={12}
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          ></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
