import { Container, Box, Typography, Grid } from "@mui/material";
// import styles from "./FreightServices.module.scss";

const FreightServices = ({ services = [] }) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#031224",
        padding: "1.5rem 0",
        color: "#fff",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {services.map(({ icon, title }, i) => (
            <Grid item xs={12} lg={4} key={i}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "3rem 1rem",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: "50px", lg: "80px" },
                    color: "#fff",
                  }}
                >
                  {icon}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "18px",
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FreightServices;
